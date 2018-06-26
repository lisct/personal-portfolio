import React from 'react';
import TweenLite from 'gsap';
import scrollTo from '../../node_modules/gsap/ScrollToPlugin';

class Footer extends React.Component{

    handleScrollToTop = () => {

        TweenLite.to(window, .8, { scrollTo: 0 } );

    }

    render(){
        
        return(

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
                            <div className="box box--center footer__item footer__item--msj">
                                <h1 className="footer__item__header">Let’s Work Together</h1>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-3">
                            <div className="box footer__item footer__item--left footer__item--social">
                                <h4 className="footer__item__tittle">Follow Me</h4>
                                <p className="footer__item__info"><a href="https://www.behance.net/LisCT" target="_black">Behance</a></p>
                                <p className="footer__item__info"><a href="https://dribbble.com/LisCT" target="_black">Dribble</a></p>
                                <p className="footer__item__info"><a href="https://github.com/LisCT" target="_black">Github</a></p>
                                <p className="footer__item__info"><a href="https://www.instagram.com/lisccode/" target="_black">Instagram</a></p>
                                <p className="footer__item__info"><a href="https://twitter.com/lisct" target="_black">Twitter</a></p>
                                <p className="footer__item__info"><a href="https://www.linkedin.com/in/lisct/" target="_black">Linkedin</a></p>
                            </div>
                        </div>

                    
                        <div className="footer_explore explore" onClick={this.handleScrollToTop}>
                            <h5 className="footer_explore--text">To the Top</h5>
                            <span className="footer_explore--line"></span>
                            <span className="footer_explore--fill"></span>
                        </div>
                    
                    </div>
                </div>
            </footer>
        )

    }

}

export default Footer