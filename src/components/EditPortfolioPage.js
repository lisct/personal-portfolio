import React from 'react';
import AddPortfolioForm from './AddPortfolioForm';

class EditPortfolio extends React.Component{

    render(){

        return(
            <section className="wrap container-fluid portfolio_editor">
                 <div className="row">
                    <div className="col-xs-12">
                        <div className="box">

                            <h1 className="header_main">Portfolio Editor</h1>
                            <AddPortfolioForm addPortfolioItem={ this.props.addPortfolioItem } />
                        
                        </div>
                    </div>
                </div>
            </section>
        )

    }

}

export default EditPortfolio