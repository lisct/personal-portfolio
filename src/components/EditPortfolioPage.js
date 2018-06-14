import React from 'react';
import AddPortfolioForm from './AddPortfolioForm';
import EditPortfolioForm from './EditPortfolioForm';

class EditPortfolioPage extends React.Component{

    render(){

        return(
            <section className="wrap container-fluid portfolio_editor">
                 <div className="row">
                    <div className="col-xs-12">
                        <div className="box">

                            <h1 className="header_main">Portfolio Editor</h1>

                            {Object.keys(this.props.portfolioItems).map( key => (
                                
                                <EditPortfolioForm 
                                    key={key} 
                                    index={key}
                                    portfolioItems={this.props.portfolioItems[key]}  
                                    updatePortfolioItem= {this.props.updatePortfolioItem}
                                    deletePortfolioItem={this.props.deletePortfolioItem}
                                />
                            
                            ))}
                            
                            <AddPortfolioForm addPortfolioItem={ this.props.addPortfolioItem } />
                            <button className="btn" onClick={this.props.loadStartedPortfolioItem}> Load Started Items </button>
                        
                        </div>
                    </div>
                </div>
            </section>
        )

    }

}

export default EditPortfolioPage