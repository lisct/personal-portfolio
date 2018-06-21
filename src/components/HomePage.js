import React from 'react';
import { Fragment } from 'react';
import firebase from 'firebase';

import Login from '../components/Login';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import EditPortfolioPage from '../components/EditPortfolioPage';
import NeedResume from '../components/NeedResume';

import startedPortfolioItems from '../helpers/portfolio-data';

import base, { firebaseApp } from '../base';

// Notes: The conection with the database live here. 
// The first person in logged will be the owner.  If the user is enable inside the firebase.
// Inside the database after you logged, will be add a owner obj inside the database. If delete the access will be revoked.
// You also need a document with all the settings to acces to firebase apiKey, authDomain, databaseURL is what I imported from base
// This document is not included in this project. It's something that you should set.

class HomePage extends React.Component{

    state = {
        
        portfolioItems: {},
        uid: null,
        owner: null

    }

    componentDidMount = () => {

        // linking firebase with the states
        this.ref = base.syncState(`portfolio`, {

            context: this,
            state: 'portfolioItems'

        });

        // Check if we are logged when refresh then stay logged
        firebase.auth().onAuthStateChanged( user => {

            if(user){

                this.authHandler({ user });

            }
        })

    }

    componentWillUnmount = () => {

        // stop firebase to watch for changes
        base.removeBinding(this.ref);

    }

    addPortfolioItem = (item) => {

       // Take a copy of the existing state. Never modify the existing state.
       const portfolioItems = { ...this.state.portfolioItems };

       // Add the new item to the item variable. Date.now is used to generate a unique number.
       portfolioItems[`item${Date.now()}`] = item;

       // Set the new item portfolio to the state.
       this.setState({ portfolioItems });

    }

    updatePortfolioItem = (key, updatedItem) => {

         // Take a copy of the existing state. Never modify the existing state.
       const portfolioItems = { ...this.state.portfolioItems };

      // Update the state value
       portfolioItems[key] = updatedItem;

       // Set the new state value
       this.setState({ portfolioItems })

    }

    deletePortfolioItem = (key) => {

        // Take a copy fo the existing state
        const portfolioItems = { ...this.state.portfolioItems }

        // Set the fish that we want to delete to null, to void weird behavor from firebase
        portfolioItems[key] = null;

        // Set the new state value
        this.setState({ portfolioItems });

    }


    loadStartedPortfolioItem = () => {
        
        // load to the state the started js obj doc
        this.setState({ portfolioItems: startedPortfolioItems });

    }
    
    authHandler = async (authData) => {

        // Look up the current store in the firebase database
        const inItems = await base.fetch('portfolio', { context: this });
        
        // Claim it fi there is no owner
        if(!inItems.owner){

            await base.post('portfolio/owner', {

                data: authData.user.uid
                
            })

        }

        // Set the state of the invesntory component to reglect the current user
        this.setState({

            uid: authData.user.uid,
            owner: inItems.owner || authData.user.uid

        })

    }

    authenticate = (provider) => {

        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);

    }

    logout = async () => {

        await firebase.auth.singOut;
        this.setState({ uid: null, owner: null });   

    }
    

    render(){
        
        return(
           
            <Fragment>
                {/* //  Chek if you are in the login route, then show the loggin btn*/}
                {(this.props.location.pathname == '/login') && 
                    <Login 
                        authenticate={ this.authenticate } 
                        uid={ this.state.uid } 
                        owner={ this.state.owner }
                        noOwner={ this.state.uid !== this.state.owner }
                        logout={ this.logout }
                    />
                }

                <Hero />
                <Portfolio 
                    portfolioItems={ this.state.portfolioItems }
                />
                
                {/* //  Check if the user is the owner and if is logged then show the editor side*/}
                { (this.props.location.pathname == '/login') && this.state.uid === this.state.owner && this.state.uid && 
                    <EditPortfolioPage 
                        addPortfolioItem={ this.addPortfolioItem } 
                        loadStartedPortfolioItem={ this.loadStartedPortfolioItem } 
                        portfolioItems={ this.state.portfolioItems }
                        updatePortfolioItem= {this.updatePortfolioItem }
                        deletePortfolioItem={this.deletePortfolioItem }
                    />
                }

                <NeedResume />
            </Fragment>
            
        )

    }

}

export default HomePage
