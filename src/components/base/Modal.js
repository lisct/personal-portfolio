import React from 'react';

const Modal = ({desc, closeTo, header, body}) => (
    <div id="modal" 
        role="dialog" 
        className={ desc } 
        aria-labelledby={ desc } 
        aria-describedby={ desc }
    >
        <div className="modal-content">
            <div className="header">
                <a href={ closeTo } className="close-button"></a>
                { header }
            </div>
            <div className="copy">
                { body }
            </div>
        </div>
        <a href={ closeTo }><div className="overlay"></div></a>
    </div>
);

export default Modal;