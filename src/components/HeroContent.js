import React from 'react';

class HeroContent extends React.Component{
    
    render(){
        return(
            <section>
                <div className="box hero_container">
                    <h1 className="hero_container_copy">
                        Hello! I am <span className="hero_user">L<span className="hero_user_dot">i</span>sbel Cruz </span>
                        <span className="hero_user_icon">🙋🏻‍‍</span>, <br/>
                        a UI/UX Designer & Front End Developer <br/>
                        from DR, based in Houston, TX. <br/>
                    </h1>
                </div>
            </section>
        )
    }
}

export default HeroContent;
