import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (

    <section className="wrap container-fluid">
        <div className="row  end-xs">
            <div className="col-xs-12">
                <div className="box">
                    <div className="login_container">
                        
                        
                        {/* //  Chek if the user is is logged and then if the user is not show a msj */}
                        { !props.uid  ?

                            <a className="login_container--item" onClick={() =>  props.authenticate('Github') }> {props.uid !== props.owner ? "Sorry you're not the owner, " : " "}Login</a>

                        :
                            <a className="login_container--item" onClick={() =>  props.logout() }> Hi, Logout </a>

                        }

                    </div>
                </div>
            </div>
        </div>
    </section>

);

Login.propTypes = {

    authenticate: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    uid: PropTypes.string,
    owner: PropTypes.string
    
}

export default Login;