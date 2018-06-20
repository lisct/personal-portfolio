import React from 'react';
import Buttons from './base/Buttons';

const NeedResume = () => (
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
                                <div>
                                        <Buttons copy={"Download Resume"}/>
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

export default NeedResume