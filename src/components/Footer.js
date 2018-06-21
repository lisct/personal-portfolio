import React from 'react';

const Footer = () => (
    <footer className="bar bar--blue footer">
        <div className="wrap container-fluid">    
            <div className="row middle-xs">

                <div className="col-xs-12 col-sm-3">
                    <div className="box footer__item">
                        <h4 className="footer__item__tittle">Say Hello</h4>
                        <p className="footer__item__info"><a href="mailto:lcruztaveras@gmail.com">lcruztaveras@gmail.com</a></p>
                        <p className="footer__item__info">+1 (786) 537 - 0166</p>
                    </div>

                    <div className="box footer__item">
                        <h4 className="footer__item__tittle">Location</h4>
                        <p className="footer__item__info">United States <br/> Houston, Tx.</p>
                    </div>

                </div>

                <div className="col-xs-12 col-sm-6">
                    <div className="box box--center footer__item">
                        <h1 className="footer__item__header">Let’s Work Together</h1>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-3">
                    <div className="box footer__item footer__item--left">
                        <h4 className="footer__item__tittle">Follow Me</h4>
                        <p className="footer__item__info"><a href="#">Behance</a></p>
                        <p className="footer__item__info"><a href="#">Dribble</a></p>
                        <p className="footer__item__info"><a href="#">Github</a></p>
                        <p className="footer__item__info"><a href="#">Instagram</a></p>
                        <p className="footer__item__info"><a href="#">Twitter</a></p>
                        <p className="footer__item__info"><a href="#">Linkedin</a></p>
                    </div>
                </div>


                <div className="footer_explore">
                    <h5 className="footer_explore--text">To the Top</h5>
                    <span className="footer_explore--line"></span>
                    <span className="footer_explore--fill"></span>
                </div>
            
            </div>
        </div>
    </footer>
)

export default Footer