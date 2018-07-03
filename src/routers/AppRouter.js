import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import ProjectChallenge from '../components/ProjectChallenge';
import ProjectPadsquad from '../components/ProjectPadsquad';

//Tracker
import tracker from '../helpers/tracker';



class AppRouter extends React.Component{

    state = {

        isLoading: true

    }

    componentDidMount() {

        // waiting for loader to animate. Loading complete when var is set to false. 
        setTimeout(() => this.setState({ isLoading: false }), 2200); 

    }
      
    render(){

        // Loader
        const { isLoading } = this.state;

        if(isLoading) {

            return null;
            
        }

        return (
            <BrowserRouter >
                <Fragment>

                    <Header />
                    
                    <Switch>
                        <Route path="/" component={ tracker(HomePage) } exact={true}/>
                        <Route path="/:login" component={ tracker(HomePage) } exact={true}/>
                        <Route path="/project/challenges" component={ tracker(ProjectChallenge) } exact={true}/>
                        <Route path="/project/padsquad" component={ tracker(ProjectPadsquad) } exact={true}/>
                        <Route component={tracker(NotFoundPage)} />
                    </Switch>
                    
                    <Footer />
                    
                </Fragment>
            </BrowserRouter>
        )

    }
}


export default AppRouter