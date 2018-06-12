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
                            <button className="btn" onClick={this.props.loadStartedPortfolioItem}> Load Started Items </button>
                        
                        </div>
                    </div>
                </div>
            </section>
        )

    }

}

export default EditPortfolio