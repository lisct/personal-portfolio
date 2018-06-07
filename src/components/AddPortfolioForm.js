import React from 'react';

class AddPortfolioForm extends React.Component{

    render(){

        return(
            <form className="portfolio_editor--form">
                
                <input name="date" type="text" placeholder="Date" />

                <input name="tech" type="text" placeholder="Tech" />

                <select name="status"> 
                    <option value="available"> In Screen </option>
                    <option value="inactive"> Out of Screen </option>
                </select>

                <input name="name" type="text" placeholder="Name" />

                <textarea name="desc" type="text" placeholder="Desc" ></textarea>
                
                <input name="image" type="text" placeholder="Image" />
                
                <button type="submit"> Add to Portfolio </button>

            </form>
        )

    }

}

export default AddPortfolioForm