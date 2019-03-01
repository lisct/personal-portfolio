import React from 'react';
import BackButton from './base/BackButton';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import TweenLite from 'gsap';
import scrollTo from '../../node_modules/gsap/ScrollToPlugin';

class ProjectChallenge extends React.Component{

    componentDidMount = () => {

        TweenLite.to(window, .5, { scrollTo: window.innerHeight - window.innerHeight } );

    }

    handleScrollToTop = () => {
        
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // Tracker event
        ReactGA.event({
            category: 'Navigation',
            action: 'Next Project',
        });

        // changing the page
        const page = '/project/padsquad';  
        this.props.history.push(page);

    }

    render(){

        return(

            <section className="project">

                <div className="wrap container-fluid">      
                    <div className="row center-xs project__row_container">
                        <div className="col-xs-9 col-md-6">
                            <div className="box project__header">
                                <h1 className="header_section">Personal Projects</h1>
                                <p>This is a collection of projects that I accomplished in a way to learn, to practice and the most common reason to be doing something :).</p>
                                
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

                                    <div  className="project__container">
                                        <a href="https://facefinder.surge.sh/" target="_blank">
                                            <div className="project__circle"></div>

                                            <div className="project__img challenges"></div>

                                            <div className="portfolio_project__tech">
                                                React, Express, PostgreSql, Html, Css
                                            </div>
                                            
                                            <h2 className="portfolio_project__title">
                                                Face Recognition
                                            </h2>
                                            <p className="portfolio_project__description project--pbottom">
                                                This is an app that identify the faces in a picture. I'm using Clarifai API to detect the presence and location of human faces with a bounding box.
                                            </p>
                                        </a> 
                                        
                                        <a href="https://facefinder.surge.sh/" target="_blank" className="btn btn--border btn--round"> View live</a>

                                    </div>
                                    
                                </div>

                            </div>

                            <div className="col-xs-12 col-sm-5 box--height">

                                <div className="box">

                                    <div  className="project__container">
                                        <a href="https://tip.surge.sh/" target="_blank">
                                            <div className="project__circle"></div>

                                            <div className="project__img challenges"></div>

                                            <div className="portfolio_project__tech">
                                                React, Html, Css
                                            </div>
                                            
                                            <h2 className="portfolio_project__title">
                                                Tip calculator
                                            </h2>
                                            <p className="portfolio_project__description project--pbottom">
                                                Calculates gratuity based on meal or service total. Enter the total cost and the tip percentage you would like to include as gratuity. 
                                            </p>
                                        </a> 
                                        
                                        <a href="https://tip.surge.sh/" target="_blank" className="btn btn--border btn--round"> View live</a>

                                    </div>
                                    
                                </div>

                            </div>

                            <div className="col-xs-12 col-sm-5 box--height">

                                <div className="box">

                                    <div  className="project__container">
                                        <a href="https://moviefinder.surge.sh" target="_blank">
                                            <div className="project__circle"></div>

                                            <div className="project__img challenges"></div>

                                            <div className="portfolio_project__tech">
                                               JS (Ajax-request / Promises), Html, Css
                                            </div>
                                            
                                            <h2 className="portfolio_project__title">
                                                Movie Finder
                                            </h2>
                                            <p className="portfolio_project__description project--pbottom">
                                                This application finds movies that match with the search text that has been introduced.This application uses themoviedb API.
                                            </p>
                                        </a> 
                                        
                                        <a href="https://moviefinder.surge.sh" target="_blank" className="btn btn--border btn--round"> View live</a>

                                    </div>
                                    
                                </div>

                            </div>

                            <div className="col-xs-12 col-sm-5 box--height">

                                <div className="box">

                                    <div  className="project__container">
                                        <a href="/projects/css-js-clock/index.html" target="_blank">
                                            <div className="project__circle"></div>

                                            <div className="project__img challenges"></div>

                                            <div className="portfolio_project__tech">
                                                Html, Css, Javascript
                                            </div>
                                            
                                            <h2 className="portfolio_project__title">
                                                Clock With CSS and JS
                                            </h2>
                                            <p className="portfolio_project__description project--pbottom">
                                                This is a Challenge part of the <strong>wesbos Javascript30</strong>. I added some extra functionalities: the background change according the time.
                                            </p>
                                        </a> 
                                        
                                        <a href="/projects/css-js-clock/index.html" target="_blank" className="btn btn--border btn--round"> View live</a>

                                    </div>
                                    
                                </div>

                            </div>
                        </div>

                        <div className="row center-xs">
                            <div className="col-xs-12 col-sm-5 col-md-3">
                                <div className="box">
                                    <div className="btn btn--round btn--small resume__cta" onClick={this.handleScrollToTop}> 
                                        <Link to="/project/padsquad">
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

           
        )
    }
}

export default ProjectChallenge;