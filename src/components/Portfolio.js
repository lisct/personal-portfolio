import React from 'react';
import PropTypes from 'prop-types';

import ItemPortfolio from '../components/ItemPortfolio';


class Portfolio extends React.Component{

    static propTypes = {

        portfolioItems: PropTypes.object

    }

    render(){

        return(

            <section className="wrap container-fluid">
                
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <h1 className="header_main">Here are some projects I've worked</h1>
                        </div>
                    </div>
                </div>

                 <div className="row">
                    <div className="col-xs-12">
                        <div className="box portfolio_project__wrapper">

                            {/* item */}
                            { Object.keys(this.props.portfolioItems).map( key => <ItemPortfolio key={key} itemDetails={this.props.portfolioItems[key]} />) }
                            

                        </div>
                    </div>
                </div>
                
            </section>
        )

    }

}

export default Portfolio
