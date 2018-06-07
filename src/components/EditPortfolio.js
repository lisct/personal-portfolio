import React from 'react';
import AddPortfolioForm from './AddPortfolioForm';

class EditPortfolio extends React.Component{

    render(){

        return(
            <section className="porfolio_editor">
                <h2>Portafolio Editor</h2>
                <AddPortfolioForm />
            </section>
        )

    }

}

export default EditPortfolio