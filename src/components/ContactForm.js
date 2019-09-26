import React from 'react';
import Modal from './base/Modal';

import UserFormHandle from "./UserFormHandle";
import UserDataValidation from "./UserDataValidation";

const INITIAL_STATE = {
    name: "",
    email: "",
    message: "",
    apiSend: false,
    closeModal: false,
};

const ContactForm = () => {

    const {
        handleChange,
        handleSubmit,
        values,
        errors,
        apiError,
    } = UserFormHandle(INITIAL_STATE, UserDataValidation);

    return(
        !values.closeModal && <Modal
                desc={"contact__modal"}
                closeTo={'#footer'}
                header= { 
                    <div className="contact__header">
                        <h3>Let's talk!</h3>
                        <h1>What's in your mind?</h1>
                    </div> 
                }
                body={ 
                    !values.apiSend ? 
                        <form 
                            className="contact__form" 
                            className="form"
                            id="contact-form"
                            method="post"
                            onSubmit={handleSubmit}
                        >
                
                            <div className="contact__form--inputs">
                
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="box">
                                            <label htmlFor="name">
                                                Your Name 
                                                <span className="contact__required">*</span>
                                            </label>
                                            <input 
                                                className={`${errors.name && "required"}`}
                                                id="name"
                                                type="text"
                                                name="name" 
                                                value={values.name}
                                                onChange={handleChange}
                                                autoComplete="off"
                                            />
                                        </div>
                                    </div>
                
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="box">
                                            <label htmlFor="email">
                                                Your email
                                                <span className="contact__required">*</span>
                                            </label>
                                            <input 
                                            className={` ${errors.email && "required"}`}
                                                id="email"
                                                name="email" 
                                                type="text"
                                                value={values.email}
                                                onChange={handleChange}
                                                autoComplete="off"
                                            />
                                        </div>
                                    </div> 
                                </div> 
                
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="box">
                                            <label htmlFor="message">
                                                Your Message
                                                <span className="contact__required">*</span>
                                            </label>
                                            <textarea 
                                                className={`${errors.message && "required"}`}
                                                name="message" 
                                                id="message" 
                                                cols="30" 
                                                rows="4"
                                                required=""
                                                spellCheck="false"
                                                value={values.message}
                                                onChange={handleChange}
                                            >
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="box">
                                            <button 
                                                className="btn btn--round btn--small"
                                                form="contact-form"
                                                disabled={!values.message && !values.message && !values.message}
                                            >
                                                <span> Send Message</span>
                                                <span className="btn__icon"></span>
                                            </button>
                                        </div>
                
                                        <div className="errors">
                                            <p>
                                                {errors.name ? `* ${errors.name}` : <span>&nbsp;</span>}
                                                {errors.email && `* ${errors.email}`}
                                                {errors.message && `* ${errors.message}`}
                                                {apiError && `* ${apiError}`}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    
                  : <div className="contact__success">
                        <div className="contact__success__icon--container">
                            <div className="contact__success__icon">
                                <div className="contact__success__icon--tip"></div>
                                <div className="contact__success__icon--long"></div>
                            </div>
                        </div>

                        <p>Your message has been sent.</p>
                        <p>I will get back you soon!.</p>
                    </div>
                }
            />
    )
}

export default ContactForm;