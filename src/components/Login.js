import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (

    <section className="wrap container-fluid">
        <div className="row  end-xs">
            <div className="col-xs-12">
                <div className="box">
                    <div className="login_container">
                        
                        <a className="login_container--item" onClick={() => props.authenticate('Github') }>Login</a>

                    </div>
                </div>
            </div>
        </div>
    </section>

);

Login.propTypes = {

    authenticate: PropTypes.func.isRequired
}

export default Login;