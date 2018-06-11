import React from 'react';
import { Fragment } from 'react';

import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import EditPortfolio from '../components/EditPortfolioPage';

class HomePage extends React.Component{

    state = {
        
        portfolioItems: {}

    }

    addPortfolioItem = (item) => {

       // Take a copy of the existing state. Never modify the existing state.
       const portfolioItems = { ...this.state.portfolioItems };

       // Add the new item to the item variable. Date.now is used to generate a unique number.
       portfolioItems[`item${Date.now()}`] = item;

       // Set the new item portfolio to the state.
       this.setState({ portfolioItems });

    }

    render(){
        
        return(

            <Fragment>

                <Hero />
                <Portfolio />
                <EditPortfolio addPortfolioItem={ this.addPortfolioItem } />
                
            </Fragment>
            
        )

    }

}

export default HomePage
