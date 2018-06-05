import React from 'react';
import heroBubbles from '../helpers/hero-bubbles';

class HeroBackground extends React.Component{

    componentDidMount(){

        heroBubbles(); // hero canvas code

    }
    
    render(){
        return(
            <div className="hero-interactive">
                <canvas id="canvas"></canvas>
            </div>
        )
    }
}

export default HeroBackground;
