import React from 'react';
import { Fragment } from 'react';

import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import EditPortfolioPage from '../components/EditPortfolioPage';
import startedPortfolioItems from '../helpers/portfolio-data';

import base from '../base';

class HomePage extends React.Component{

    state = {
        
        portfolioItems: {}

    }

    componentDidMount = () => {

        // linking firebase with the states
        this.ref = base.syncState(`portfolio`, {
            context: this,
            state: 'portfolioItems'
        });

    }

    componentWillUnmount = () => {

        // stop firebase to watch for changes
        base.removeBinding(this.ref);

    }

    addPortfolioItem = (item) => {

       // Take a copy of the existing state. Never modify the existing state.
       const portfolioItems = { ...this.state.portfolioItems };

       // Add the new item to the item variable. Date.now is used to generate a unique number.
       portfolioItems[`item${Date.now()}`] = item;

       // Set the new item portfolio to the state.
       this.setState({ portfolioItems });

    }

    updatePortfolioItem = (key, updatedItem) => {

         // Take a copy of the existing state. Never modify the existing state.
       const portfolioItems = { ...this.state.portfolioItems };

      // Update the state value
       portfolioItems[key] = updatedItem;

       // Set the new state value
       this.setState({ portfolioItems })

    }

    deletePortfolioItem = (key) => {

        // Take a copy fo the existing state
        const portfolioItems = { ...this.state.portfolioItems }

        // Set the fish that we want to delete to null, to void weird behavor from firebase
        portfolioItems[key] = null;

        // Set the new state value
        this.setState({ portfolioItems });

    }


    loadStartedPortfolioItem = () => {
        
        this.setState({ portfolioItems: startedPortfolioItems });

    }

    render(){
        
        return(

            <Fragment>

                <Hero />
                <Portfolio 
                    portfolioItems={ this.state.portfolioItems }
                />
                <EditPortfolioPage 
                    addPortfolioItem={ this.addPortfolioItem } 
                    loadStartedPortfolioItem={ this.loadStartedPortfolioItem} 
                    portfolioItems={ this.state.portfolioItems }
                    updatePortfolioItem= {this.updatePortfolioItem}
                    deletePortfolioItem={this.deletePortfolioItem}
                />
            </Fragment>
            
        )

    }

}

export default HomePage
