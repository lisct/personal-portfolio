import React from 'react';
import PropTypes from 'prop-types';

class ItemPortfolio extends React.Component{

    static propTypes = {

        itemDetails: PropTypes.shape({

            date: PropTypes.string,
            tech: PropTypes.string, 
            status: PropTypes.string, 
            name: PropTypes.string, 
            desc: PropTypes.string, 
            image: PropTypes.string    
        
        })

    } 

    render(){

        const { date, tech, status, name, desc, image } = this.props.itemDetails;
        const isAvailable =  status === "available";

        return(

            <div className="row" className={ !isAvailable ? "portfolio_project--hide" : undefined }>
                <div className="col-xs-12">
                    <div className="box portfolio_project__wrapper">

    
                        <a href="#" target="_blank" className="portfolio_project">

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

                        </a> 

                    </div>
                </div>
            </div>
 
        )

    }

}

export default ItemPortfolio;