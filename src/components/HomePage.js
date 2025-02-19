import React, { Fragment } from "react";
import { ref, get, set, onValue, off } from "firebase/database";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import base, { firebaseApp } from "../base";

import Login from "../components/Login";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import EditPortfolioPage from "../components/EditPortfolioPage";
import NeedResume from "../components/NeedResume";

import startedPortfolioItems from "../helpers/portfolio-data";

const auth = getAuth(firebaseApp);

class HomePage extends React.Component {
  state = {
    portfolioItems: {},
    uid: null,
    owner: null,
  };

  componentDidMount() {
    const portfolioRef = ref(base, "portfolio");

    // Fetch existing data and listen for updates
    onValue(portfolioRef, (snapshot) => {
      const data = snapshot.val() || {};
      this.setState({ portfolioItems: data });
    });

    // Keep track of this reference for cleanup
    this.portfolioRef = portfolioRef;

    // Check if user is already logged in
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  componentWillUnmount() {
    if (this.portfolioRef) {
      off(this.portfolioRef); // Remove database listener
    }
  }

  authHandler = async (authData) => {
    const portfolioRef = ref(base, "portfolio");
    const snapshot = await get(portfolioRef);
    const data = snapshot.val();

    if (!data?.owner) {
      await set(ref(base, "portfolio/owner"), authData.user.uid);
    }

    this.setState({
      uid: authData.user.uid,
      owner: data?.owner || authData.user.uid,
    });
  };

  authenticate = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then(this.authHandler);
  };

  logout = async () => {
    await signOut(auth);
    this.setState({ uid: null, owner: null });
  };

  addPortfolioItem = async (item) => {
    const newPortfolioItems = {
      ...this.state.portfolioItems,
      [`item${Date.now()}`]: item,
    };
    this.setState({ portfolioItems: newPortfolioItems });

    await set(ref(base, "portfolio"), newPortfolioItems);
  };

  updatePortfolioItem = async (key, updatedItem) => {
    const newPortfolioItems = {
      ...this.state.portfolioItems,
      [key]: updatedItem,
    };
    this.setState({ portfolioItems: newPortfolioItems });

    await set(ref(base, "portfolio"), newPortfolioItems);
  };

  deletePortfolioItem = async (key) => {
    const newPortfolioItems = { ...this.state.portfolioItems };
    newPortfolioItems[key] = null; // Firebase requires setting null to remove

    this.setState({ portfolioItems: newPortfolioItems });
    await set(ref(base, "portfolio"), newPortfolioItems);
  };

  loadStartedPortfolioItem = async () => {
    this.setState({ portfolioItems: startedPortfolioItems });
    await set(ref(base, "portfolio"), startedPortfolioItems);
  };

  render() {
    return (
      <Fragment>
        {this.props.location?.pathname === "/login" && (
          <Login
            authenticate={this.authenticate}
            uid={this.state.uid}
            owner={this.state.owner}
            logout={this.logout}
          />
        )}

        <Hero />
        <Portfolio portfolioItems={this.state.portfolioItems} />

        {this.props.location?.pathname === "/login" &&
          this.state.uid === this.state.owner &&
          this.state.uid && (
            <EditPortfolioPage
              addPortfolioItem={this.addPortfolioItem}
              loadStartedPortfolioItem={this.loadStartedPortfolioItem}
              portfolioItems={this.state.portfolioItems}
              updatePortfolioItem={this.updatePortfolioItem}
              deletePortfolioItem={this.deletePortfolioItem}
            />
          )}

        <NeedResume />
      </Fragment>
    );
  }
}

export default HomePage;
