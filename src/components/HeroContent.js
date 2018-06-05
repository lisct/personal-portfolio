import React from 'react';

class HeroContent extends React.Component{
    
    render(){
        return(
            <section>
                <div className="box hero_container">
                    <h1>Hello! I am <span className="hero_user"> Lisbel Cruz </span> 🙋🏻‍‍, <br/>
                        a UI/UX Designer & Front End Developer <br/>
                        from DR, based in Houston, TX. <br/>
                    </h1>
                </div>
            </section>
        )
    }
}

export default HeroContent;
