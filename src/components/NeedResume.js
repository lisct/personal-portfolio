import React from 'react';
import ReactGA from 'react-ga';

class NeedResume extends React.Component{

    // Tracker handle
    handleClickTracker() {

        ReactGA.event({
            category: 'Navigation',
            action: 'Download Resume',
        });
    }

    render(){

        return(

            <section className="bar bar--gray resume">
                <div className="wrap container-fluid">    
                    <div className="row middle-xs center-xs">
        
                        <div className="col-xs-12 col-sm-6">
                            <div className="box box--left">
                                <h1 className="resume__title">Need my resume?</h1>
                                <p className="resume__description">Here you can download a PDF file with all my info.</p>
                            </div>
                        </div>
        
                        <div className="col-xs-12 col-sm-6">
                            <div className="box">  
                                <div className="row center-xs">
                                    <div className="col-xs-12 col-sm-9 col-md-6">
                                        <div className="box">  
                                            <div className="btn btn--round btn--small resume__cta"> 
                                                <a href="doc/resume_lisbelcruz.pdf" target="_blank" onClick={this.handleClickTracker}>
                                                Download Resume
                                                    <span className="btn__icon"></span>
                                                </a>
                                            </div>
                                        </div>
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

export default NeedResume


