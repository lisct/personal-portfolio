import React from "react";
import { Fragment } from "react";
import TweenLite from "gsap";
import ReactGA from "react-ga";

class HeroContent extends React.Component {
  handleScrollTo = () => {
    TweenLite.to(window, 0.5, { scrollTo: window.innerHeight });

    //Tracker
    ReactGA.event({
      category: "Navigation",
      action: "explore",
    });
  };

  render() {
    return (
      <Fragment>
        <div className="hero_container">
          <h1 className="hero_container_copy">
            Hello! I am{" "}
            <span className="hero_user">
              L<span className="hero_user_dot">i</span>sbel Cruz{" "}
            </span>
            <span className="hero_user_icon">🙋🏻‍♀️</span>, <br />
            Front End Developer <br />
            from DR, based in Houston, TX. <br />
          </h1>
        </div>

        <div className="hero_explore explore" onClick={this.handleScrollTo}>
          <h5 className="hero_explore--text">Explore</h5>
          <span className="hero_explore--line"></span>
          <span className="hero_explore--fill"></span>
        </div>
      </Fragment>
    );
  }
}

export default HeroContent;
