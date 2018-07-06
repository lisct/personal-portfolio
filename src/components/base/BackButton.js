import React from 'react';
import { Link } from 'react-router-dom';

class BackButton extends React.Component{

    render(){

        return(

            <Link to="/">
                <div className="hero_explore explore">
                    <h5 className="hero_explore--text">Back</h5>
                    <span className="hero_explore--line"></span>
                    <span className="hero_explore--fill"></span>
                </div>
            </Link>

        )
    }
   
}

export default BackButton;