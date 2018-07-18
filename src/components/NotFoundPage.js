import React from 'react';
import { Link } from 'react-router-dom';
import HeroBackground from '../components/HeroBackground';
import ReactGA from 'react-ga';

class NotFoundPage extends React.Component {


    handleScrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        
        // Tracker event
        ReactGA.event({
            category: 'Navigation',
            action: 'Back Home ( from page not found)',
        });

        // changing the page
        const page = '/';  
        this.props.history.push(page);

    }

    render(){

        return(

            <div className="notFound">
                <div className="wrap container-fluid">      
                        <div className="row center-xs project__row_container">
                            <div className="col-xs-9 col-md-6">
                                <div className="box project__header">

                                    <h1 className="header_section">$#!@, 404!</h1>

                                    <p>Houston, we have a problem!</p>
                                    <p>We cannot find what you're looking for.</p>

                                     <div className="btn btn--round" onClick={this.handleScrollToTop}> 
                                        <Link to="/"> Back Home </Link>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                    </div>

                <HeroBackground />

            </div>
        )
    
    }
        
}

export default NotFoundPage


