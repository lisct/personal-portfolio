import React from 'react';
import HeroBackground from '../components/HeroBackground';
import HeroContent from '../components/HeroContent';

// stateless function doesn't need this.props.tag for example just use props.tag
const Hero = () => (

    <section>

        <HeroContent />
        <HeroBackground />
        
    </section>

)

export default Hero
