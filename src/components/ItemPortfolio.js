import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TweenLite from 'gsap';
import scrollTo from '../../node_modules/gsap/ScrollToPlugin';

class ItemPortfolio extends React.Component{

    // allow string for the uid that are included when you logged 
    static propTypes = {

        itemDetails:  PropTypes.oneOfType([

            PropTypes.shape({

                date: PropTypes.string,
                tech: PropTypes.string, 
                status: PropTypes.string, 
                name: PropTypes.string, 
                url: PropTypes.string, 
                desc: PropTypes.string, 
                image: PropTypes.string
            
            }), 
            
            PropTypes.string

        ]),

    } 

    handleScrollToTop = () => {

        TweenLite.to(window, .4, { scrollTo: 0 } );

    }

    render(){
    
        const { date, tech, status, name, url, desc, image } = this.props.itemDetails;
        const isAvailable =  status === "available";

        return(

            <div className="row" className={ !isAvailable ? "portfolio_project--hide" : undefined }>
                <div className="col-xs-12">
                    <div className="box portfolio_project__wrapper">

    
                        <Link to={`${url}`} onClick={this.handleScrollToTop} className="portfolio_project">

                            <div className="col-xs-11 col-sm-8 col-md-6">
                                <div className="portfolio_project__image">
                                    <img src={ image } alt={ name }/>
                                </div>
                            </div>

                            <div className="portfolio_project__info">

                                <div className="portfolio_project__date">
                                    { date }
                                </div>
                                <div className="portfolio_project__divider">
                                    - 
                                </div>
                                <div className="portfolio_project__tech">
                                    { tech }
                                </div>
                                
                                <h2 className="portfolio_project__title">
                                    { name }
                                </h2>
                                <p className="portfolio_project__description">
                                   { desc }
                                </p>

                                <div className="portfolio_project__circle"></div>

                            </div>

                        </Link> 

                    </div>
                </div>
            </div>
 
        )

    }

}

export default ItemPortfolio