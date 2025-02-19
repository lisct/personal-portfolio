import React from "react";
import BackButton from "./base/BackButton";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import TweenLite from "gsap";

class ProjectPadsquad extends React.Component {
  componentDidMount = () => {
    TweenLite.to(window, 0.5, {
      scrollTo: window.innerHeight - window.innerHeight,
    });
  };

  handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Tracker event
    ReactGA.event({
      category: "Navigation",
      action: "Next Project",
    });
  };

  render() {
    return (
      <section className="project">
        <div className="wrap container-fluid">
          <div className="row center-xs project__row_container">
            <div className="col-xs-9 col-md-6">
              <div className="box project__header">
                <h1 className="header_section">Padsquad Projects</h1>
                <p>
                  This is a collection of projects that I worked in padsquad as
                  a Senior Mobile Ad Developer. PadSquad LLC All Rights
                  Reserved.
                </p>

                <p>The team involved in most of the projects:</p>

                <p>
                  <strong>Creative direction:</strong> Jen Gavin, Gini de la
                  Cruz & Claudio Tellez
                  <br />
                  <strong>Visual Designer:</strong> Roberto Herrera
                  <br />
                  <strong>Developers:</strong> Claudio Tellez and I<br />
                </p>
              </div>
            </div>

            <BackButton />
          </div>
        </div>

        <div className="bar bar--gray">
          <div className="wrap container-fluid">
            <div className="row around-xs">
              <div className="col-xs-12 col-sm-5 box--height">
                <div className="box">
                  <div className="project__container">
                    <a
                      href="http://padsquad.com/creative-automation/form/simpli-super"
                      target="_blank"
                    >
                      <div className="project__circle"></div>

                      <div className="project__img padsquad"></div>

                      <div className="portfolio_project__tech">
                        Html, Css, React
                      </div>

                      <h2 className="portfolio_project__title">
                        Creative Automation Tool
                      </h2>
                      <p className="portfolio_project__description project--pbottom">
                        The main purpose of this tool is to automate the process
                        of requesting an Ad unit. Basically is a form that
                        request all the info necessary to start.
                      </p>
                    </a>

                    <a
                      href="http://padsquad.com/creative-automation/form/simpli-super"
                      target="_blank"
                      className="btn btn--border btn--round"
                    >
                      {" "}
                      View live
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-5 box--height">
                <div className="box">
                  <div className="project__container">
                    <a href="http://crabfesttest.surge.sh/" target="_blank">
                      <div className="project__circle"></div>

                      <div className="project__img padsquad"></div>

                      <div className="portfolio_project__tech">
                        Html, Css, Javacript
                      </div>

                      <h2 className="portfolio_project__title">
                        Crabfest Game
                      </h2>
                      <p className="portfolio_project__description project--pbottom">
                        This a game in which you have to put all the crabs
                        inside a box to gain points against the time. This is a
                        game for advertising purpose.
                      </p>
                    </a>

                    <a
                      href="http://crabfesttest.surge.sh/"
                      target="_blank"
                      className="btn btn--border btn--round"
                    >
                      {" "}
                      View live
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-5 box--height">
                <div className="box">
                  <div className="project__container">
                    <a
                      href="http://padsquad.celtra.com/preview/1ab1d4f5"
                      target="_blank"
                    >
                      <div className="project__circle"></div>

                      <div className="project__img padsquad"></div>

                      <div className="portfolio_project__tech">
                        Javacript, Celtra, CSS
                      </div>

                      <h2 className="portfolio_project__title">
                        DSW Catch Shoe Game
                      </h2>
                      <p className="portfolio_project__description project--pbottom">
                        This is a banner game in which you have to catch all the
                        shoes that you can to be able to see the offer of the
                        product that you catched.
                      </p>
                    </a>

                    <a
                      href="http://padsquad.celtra.com/preview/1ab1d4f5"
                      target="_blank"
                      className="btn btn--border btn--round"
                    >
                      {" "}
                      View live
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-5 box--height">
                <div className="box">
                  <div className="project__container">
                    <a
                      href="http://padsquad.celtra.com/preview/53c8ac29"
                      target="_blank"
                    >
                      <div className="project__circle"></div>

                      <div className="project__img padsquad"></div>

                      <div className="portfolio_project__tech">
                        Javacript, Celtra, Css
                      </div>

                      <h2 className="portfolio_project__title">
                        Peter The Rabbit Match Game
                      </h2>
                      <p className="portfolio_project__description project--pbottom">
                        This is a banner game in which you have to match two of
                        the characters to be able to reveal the video promotion
                        of them.
                      </p>
                    </a>

                    <a
                      href="http://padsquad.celtra.com/preview/53c8ac29"
                      target="_blank"
                      className="btn btn--border btn--round"
                    >
                      {" "}
                      View live
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row center-xs">
              <div className="col-xs-12 col-sm-5 col-md-3">
                <div className="box">
                  <div className="btn btn--round btn--small resume__cta">
                    <Link to="/project/logos" onClick={this.handleScrollToTop}>
                      Next Project
                      <span className="btn__icon"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectPadsquad;
