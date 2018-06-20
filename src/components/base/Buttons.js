import React from 'react';
import { Fragment } from 'react';

const Buttons = (props) => (
    <Fragment>
        <button 
            className="btn btn--round btn--small"
        >
            { props.copy } 
            <span className="btn__icon"></span>
        </button>
    </Fragment>
)

export default Buttons