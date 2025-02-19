import React from "react";
import BackButton from "./base/BackButton";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import TweenLite from "gsap";

class ProjectLogos extends React.Component {
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
                <h1 className="header_section">Logo Collection</h1>
                <p>
                  This is a group of different logos design. Each logo has a
                  specific purpose; for a bar, an agency, a tech company, etc. I
                  designed each one based in the design process: main purpose,
                  selection of the color, typography and form.
                </p>
              </div>
            </div>

            <BackButton />
          </div>
        </div>

        <div className="bar bar--gray">
          <div className="wrap container-fluid">
            <div className="row around-xs">
              <div className="col-xs-12 col-sm-8">
                <div className="box">
                  <img
                    className="project__full--image"
                    src="/images/logos/ccgiftaway@2x.jpg"
                    alt="ccgiftaway"
                  />
                </div>
              </div>

              <div className="col-xs-12 col-sm-8">
                <div className="box">
                  <img
                    className="project__full--image"
                    src="/images/logos/30sbar@2x.jpg"
                    alt="30sbar"
                  />
                </div>
              </div>

              <div className="col-xs-12 col-sm-8">
                <div className="box">
                  <img
                    className="project__full--image"
                    src="/images/logos/yummy@2x.jpg"
                    alt="yummy"
                  />
                </div>
              </div>

              <div className="col-xs-12 col-sm-8">
                <div className="box">
                  <img
                    className="project__full--image"
                    src="/images/logos/innology@2x.jpg"
                    alt="innology"
                  />
                </div>
              </div>

              <div className="col-xs-12 col-sm-8">
                <div className="box">
                  <img
                    className="project__full--image"
                    src="/images/logos/naranja@2x.jpg"
                    alt="naranja95"
                  />
                </div>
              </div>

              <div className="col-xs-12 col-sm-8">
                <div className="box">
                  <img
                    className="project__full--image"
                    src="/images/logos/season@2x.jpg"
                    alt="season"
                  />
                </div>
              </div>

              <div className="col-xs-12 col-sm-8">
                <div className="box">
                  <img
                    className="project__full--image"
                    src="/images/logos/thechooser@2x.jpg"
                    alt="thechooser"
                  />
                </div>
              </div>
            </div>

            <div className="row center-xs">
              <div className="col-xs-12 col-sm-5 col-md-3">
                <div className="box">
                  <div className="btn btn--round btn--small resume__cta">
                    <Link
                      to="/project/challenges"
                      onClick={this.handleScrollToTop}
                    >
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

export default ProjectLogos;
