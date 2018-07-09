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
                                <h1 className="header_section">Challenges Projects</h1>
                                <p>This is a collection of challenges that I accomplished in my way to learn, to practice and the most common reason to be doing something :)</p>
                                
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
                                        <a href="/projects/yummyCoupon/index.html" target="_blank">
                                            <div className="project__circle"></div>

                                            <div className="project__img challenges"></div>

                                            <div className="portfolio_project__tech">
                                                React, Html, Css
                                            </div>
                                            
                                            <h2 className="portfolio_project__title">
                                                React Home page
                                            </h2>
                                            <p className="portfolio_project__description project--pbottom">
                                                This is a home site created with ReactJS to learn and practice the main components: stateless and functional.
                                            </p>
                                        </a> 
                                        
                                        <a href="/projects/yummyCoupon/index.html" target="_blank" className="btn btn--border btn--round"> View live</a>

                                    </div>
                                    
                                </div>

                            </div>

                            <div className="col-xs-12 col-sm-5 box--height">

                                <div className="box">

                                    <div  className="project__container">
                                        <a href="https://codesandbox.io/s/7mp5w4j26" target="_blank">
                                            <div className="project__circle"></div>

                                            <div className="project__img challenges"></div>

                                            <div className="portfolio_project__tech">
                                                React, Html, Css
                                            </div>
                                            
                                            <h2 className="portfolio_project__title">
                                                React Markdown Previewer
                                            </h2>
                                            <p className="portfolio_project__description project--pbottom">
                                                It was a <strong>FreecodeCamp</strong> Challenge with the purpose of doing a markdown Previewer using a library called marked.
                                            </p>
                                        </a> 
                                        
                                        <a href="https://codesandbox.io/s/7mp5w4j26" target="_blank" className="btn btn--border btn--round"> View live</a>

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

                            <div className="col-xs-12 col-sm-5 box--height">

                                <div className="box">

                                    <div  className="project__container">
                                        <a href="/projects/drum-kit/index.html" target="_blank">
                                            <div className="project__circle"></div>

                                            <div className="project__img challenges"></div>

                                            <div className="portfolio_project__tech">
                                                Html, Css, Javascript
                                            </div>
                                            
                                            <h2 className="portfolio_project__title">
                                                Drum Kit
                                            </h2>
                                            <p className="portfolio_project__description project--pbottom">
                                                This is a Challenge part of the <strong>wesbos Javascript30</strong>. The version is fully responsive, The purpose is to press a key to heard a drum a sound.
                                            </p>
                                        </a> 
                                        
                                        <a href="/projects/drum-kit/index.html" target="_blank" className="btn btn--border btn--round"> View live</a>

                                    </div>
                                    
                                </div>

                            </div>

                            <div className="col-xs-12 col-sm-5 box--height">

                                <div className="box">

                                    <div  className="project__container">
                                        <a href="/projects/threejs/index.html" target="_blank">
                                            <div className="project__circle"></div>

                                            <div className="project__img challenges"></div>

                                            <div className="portfolio_project__tech">
                                                Html, Css, Javascript
                                            </div>
                                            
                                            <h2 className="portfolio_project__title">
                                                Three Js Plane
                                            </h2>
                                            <p className="portfolio_project__description project--pbottom">
                                                This is a project based on the <strong>Karim Maaloul from Codrops</strong> article. The purpose for me was to practice Threejs in a cool way.
                                            </p>
                                        </a> 
                                        
                                        <a href="/projects/threejs/index.html" target="_blank" className="btn btn--border btn--round"> View live</a>

                                    </div>
                                    
                                </div>

                            </div>

                            <div className="col-xs-12 col-sm-5 box--height">

                                <div className="box">

                                    <div  className="project__container">
                                        <a href="/projects/gravity-canvas/index.html" target="_blank">
                                            <div className="project__circle"></div>

                                            <div className="project__img challenges"></div>

                                            <div className="portfolio_project__tech">
                                                Html, Css, Javascript
                                            </div>
                                            
                                            <h2 className="portfolio_project__title">
                                                Canvas Gravity
                                            </h2>
                                            <p className="portfolio_project__description project--pbottom">
                                                The purpose was to practice with canvas animations. My study resource was from <strong>Chris Courses</strong>.
                                            </p>
                                        </a> 
                                        
                                        <a href="/projects/gravity-canvas/index.html" target="_blank" className="btn btn--border btn--round"> View live</a>

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