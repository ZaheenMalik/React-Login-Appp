import React from 'react';
import {Link} from 'react-router-dom';

function Logout(props) {
    props.setloggedIn(false);
        return (
            <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Logged Out</h1>
                <p className="lead">Login again to continue.</p>
                <hr className="my-4" />
                <p className="lead">
                <Link to="/login" className="col-3"><button className="btn btn-warning btn-lg" href="#" role="button">Login!</button></Link>
                </p>
            </div>
            </div>
        );
    

}

export default Logout;