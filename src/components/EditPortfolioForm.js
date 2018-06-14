import React from 'react';

class EditPortfolioForm extends React.Component{

    handleChange = (e) => {

        const updatedItem = { 
            ...this.props.portfolioItems,
            [e.currentTarget.name]: e.currentTarget.value
        }

        this.props.updatePortfolioItem(this.props.index, updatedItem)

    }

    handeDelete = (e) => {

        this.props.deletePortfolioItem(this.props.index);

    }

    render(){

        const { date, tech, status, name, desc, image } = this.props.portfolioItems;

        return(

            <div>
                
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <input 
                                type="text" 
                                name="name" 
                                value={name} 
                                onChange={ this.handleChange }
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-6">
                        <div className="box">
                            <input 
                                type="text"
                                name="date"
                                value={date} 
                                onChange={ this.handleChange }
                            />
                        </div>
                    </div>

                    <div className="col-xs-6">
                        <div className="box">
                            <input 
                                type="text" 
                                name="tech" 
                                value={tech} 
                                onChange={ this.handleChange }
                            />
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-6">
                        <div className="box">
                            <select 
                                name="status" 
                                value={status} 
                                onChange={ this.handleChange }
                            > 

                                <option value="available"> In Screen </option>
                                <option value="inactive"> Out of Screen </option>

                            </select>
                        </div>
                    </div>

                    <div className="col-xs-6">
                        <div className="box">
                            <input 
                                type="text"  
                                name="image" 
                                value={image} 
                                onChange={ this.handleChange }
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <textarea 
                                name="desc" 
                                value={desc} 
                                onChange={ this.handleChange }
                            ></textarea>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <button type="submit" className="btn" onClick={ this.handeDelete }> Remove Item </button>
                        </div>
                    </div>
                </div>

                <hr/>

            </div>

        )
    }
}

export default EditPortfolioForm