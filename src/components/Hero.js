import React from 'react';
import heroBubbles from '../helpers/hero-bubbles';

class Hero extends React.Component{

    componentDidMount(){

        heroBubbles();

    }
    
    render(){
        return(
            <div>
                <canvas id="canvas"></canvas>
            </div>
        )
    }
}

export default Hero;
