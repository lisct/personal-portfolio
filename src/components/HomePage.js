import React from 'react';
import { Fragment } from 'react';

import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';

class HomePage extends React.Component{

    render(){
        
        return(

            <Fragment>

                <Hero />
                <Portfolio />
                
            </Fragment>
            
        )

    }

}

export default HomePage
