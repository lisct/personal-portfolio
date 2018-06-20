import React from 'react';

const Footer = () => (
    <footer className="bar bar--blue footer">
        <div className="wrap container-fluid">    
            <div className="row middle-xs">

                <div className="col-xs-12 col-sm-3">
                    <div className="box footer__item">
                        <h4 className="footer__item__tittle">Say Hello</h4>
                        <p className="footer__item__info">lcruztaveras@gmail.com</p>
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
                    <div className="box box--right footer__item">
                        <h4 className="footer__item__tittle">Follow Me</h4>
                        <p className="footer__item__info"><a href="#">Behance</a></p>
                        <p className="footer__item__info"><a href="#">Dribble</a></p>
                        <p className="footer__item__info"><a href="#">Github</a></p>
                        <p className="footer__item__info"><a href="#">Instagram</a></p>
                        <p className="footer__item__info"><a href="#">Twitter</a></p>
                        <p className="footer__item__info"><a href="#">Linkedin</a></p>
                    </div>
                </div>
            
            </div>
        </div>
    </footer>
)

export default Footer