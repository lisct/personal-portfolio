import React from 'react';
import Modal from './base/Modal';


const Header = () => (
    <div className="contact__header">
        <h3>Let's talk!</h3>
        <h1>What's in your mind?</h1>
    </div>
)

const Body = () => (
    <form className="contact__form">
        <div className="contact__form--inputs">

            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    <div className="box">
                        <label htmlFor="name">Your Name</label>
                        <input 
                            name="name" 
                            type="text"
                        />
                    </div>
                </div>

                <div className="col-xs-12 col-sm-6">
                    <div className="box">
                        <label htmlFor="email">Your Email</label>
                        <input 
                            name="email" 
                            type="text"
                        />
                    </div>
                </div> 
            </div> 

            <div className="row">
                <div className="col-xs-12">
                    <div className="box">
                        <label htmlFor="message">Your Message</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="4"
                            required=""
                            spellCheck="false"
                        >
                        </textarea>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <div className="box">
                        <a href="">
                            <div className="box">
                                <div className="btn btn--round btn--small">
                                    <span> Send Message</span>
                                    <span className="btn__icon"></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </form>
)

const ContactForm = () => (
    <Modal
        desc={"contact__modal"}
        closeTo={'#footer'}
        header={ <Header/> }
        body= { <Body/> }
    />
);

export default ContactForm;