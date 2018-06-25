import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';

class AppRouter extends React.Component{

    state = {

        isLoading: true

    }

    componentDidMount() {

        // simulates loading of data
        setTimeout(() => this.setState({ isLoading: false }), 2200); 

    }
      
    render(){

        // loader
        const { isLoading } = this.state;

        if(isLoading) {

            return null;
            
        }

        return (
            <BrowserRouter>
                <Fragment>

                    <Header />
                    
                    <Switch>
                        <Route path="/" component={ HomePage } exact={true}/>
                        <Route path="/:login" component={ HomePage } exact={true}/>
                        <Route component={NotFoundPage} />
                    </Switch>
                    
                    <Footer />
                    
                </Fragment>
            </BrowserRouter>
        )

    }
}


export default AppRouter