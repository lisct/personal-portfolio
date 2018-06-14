import React from 'react';

class AddPortfolioForm extends React.Component{

    // creating an instace of the item to get the values of the inputs
    dateRef = React.createRef();
    techRef = React.createRef();
    statusRef = React.createRef();
    nameRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createPortfolioItem = (e) => {

        e.preventDefault();

        const item = {
            
            date: this.dateRef.current.value, 
            tech: this.techRef.current.value, 
            status: this.statusRef.current.value, 
            name: this.nameRef.current.value, 
            desc: this.descRef.current.value, 
            image: this.imageRef.current.value
        }


        this.props.addPortfolioItem(item);

        // Reset the form 
        e.currentTarget.reset();
    }

    render(){

        return(
            <form className="portfolio_editor--form pb-medium" onSubmit={ this.createPortfolioItem }>

                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <input type="text" name="name" ref={this.nameRef} placeholder="Name" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-6">
                        <div className="box">
                            <input type="text" name="date" ref={this.dateRef} placeholder="Date" />
                        </div>
                    </div>

                    <div className="col-xs-6">
                        <div className="box">
                            <input type="text" name="tech" ref={this.techRef} placeholder="Tech" />
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-6">
                        <div className="box">
                            <select name="status" ref={this.statusRef}> 

                                <option value="available"> In Screen </option>
                                <option value="inactive"> Out of Screen </option>

                            </select>
                        </div>
                    </div>

                    <div className="col-xs-6">
                        <div className="box">
                            <input type="text" name="image" ref={this.imageRef} placeholder="Image" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <textarea name="desc" ref={this.descRef} placeholder="Description" ></textarea>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <button type="submit" className="btn"> Add to Portfolio </button>
                        </div>
                    </div>
                </div>

            </form>
        )

    }

}

export default AddPortfolioForm