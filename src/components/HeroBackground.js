import React from 'react';
import heroBubbles from '../helpers/hero-bubbles';

class HeroBackground extends React.Component{

    // creating an instace of the canvas to be able to pass it as an argument
    canvas = React.createRef();

    // when this component is loaded
    componentDidMount(){

        heroBubbles(this.canvas.current.id); //where the code of the bubbles live. Which receive the id of the actual canvas 

    }
    
    render(){

        return(

            <div className="hero-interactive">
        
                <canvas id="canvas" ref={this.canvas}></canvas>
        
            </div>

        )

    }
    
}

export default HeroBackground
