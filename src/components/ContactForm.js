import React from 'react';
import Modal from './base/Modal';

import UserFormHandle from "./UserFormHandle";
import UserDataValidation from "./UserDataValidation";

const INITIAL_STATE = {
    name: "",
    email: "",
    message: ""
};

const Header = () => (
    <div className="contact__header">
        <h3>Let's talk!</h3>
        <h1>What's in your mind?</h1>
    </div>
)

const Body = () => {

    const {
        handleChange,
        handleSubmit,
        values,
        errors,
    } = UserFormHandle(INITIAL_STATE, UserDataValidation);

    return(
        <form 
            className="contact__form" 
            className="form"
            method="get"
            id="contact-form"
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
                                {errors.email ? `* ${errors.email}` : <span>&nbsp;</span>}
                                {errors.message ? `* ${errors.message}` : <span>&nbsp;</span>}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

const ContactForm = () => (
    <Modal
        desc={"contact__modal"}
        closeTo={'#footer'}
        header={ <Header/> }
        body= { <Body/> }
    />
);

export default ContactForm;