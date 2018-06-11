import React from 'react';

class Portfolio extends React.Component{

    render(){

        return(

            <section className="wrap container-fluid">
                
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <h1 className="header_main">Here are some projects I've worked</h1>
                        </div>
                    </div>
                </div>

                 <div className="row">
                    <div className="col-xs-12">
                        <div className="box portfolio_project__wrapper">

                            {/* item */}
                            <a href="#" target="_blank" className="portfolio_project">

                                <div className="col-xs-11 col-sm-8 col-md-6">
                                    <div className="portfolio_project__image">
                                        <img src="./images/img_sample@2x.png" alt=""/>
                                    </div>
                                </div>
                            
                                <div className="portfolio_project__info">
                                
                                    <div className="portfolio_project__date">
                                        May 2017
                                    </div>
                                    <div className="portfolio_project__divider">
                                        - 
                                    </div>
                                    <div className="portfolio_project__tech">
                                        React, Html, Css
                                    </div>
                                    
                                    <h2 className="portfolio_project__title">
                                        React Markdown Viewer
                                    </h2>
                                    <p className="portfolio_project__description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                    </p>

                                    <div className="portfolio_project__circle"></div>

                                </div>
                                
                            </a>

                        </div>
                    </div>
                </div>
                
            </section>
        )

    }

}

export default Portfolio
