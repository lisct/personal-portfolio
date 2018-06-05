import React from 'react';
import HeroBackground from '../components/HeroBackground';
import HeroContent from '../components/HeroContent';

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <HeroContent />
                <HeroBackground />
            </div>
        )
    }
}

export default HomePage;
