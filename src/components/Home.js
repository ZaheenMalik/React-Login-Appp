import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Home() {
    const loggedIn = useSelector(state => state.isLogged);
    if(loggedIn)
        return (
            <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Welcome!</h1>
                <p className="lead">Login and Register App.</p>
                <hr className="my-4" />
                <p className="lead row">
                <Link to="/logout" className="col-3"><button className="btn btn-warning btn-lg">Logout!</button></Link>
                </p>
            </div>
            </div>
        );
    else
        return(
            <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Join Us!</h1>
                <p className="lead">Login or Signup to continue.</p>
                <hr className="my-4" />
                <p className="lead row">
                    <Link to="/login" className="offset-2 col-2"><button className="btn btn-warning btn-lg">Login!</button></Link>
                    <Link to="/signup" className="offset-3 col-2"><button className="btn btn-warning btn-lg">Signup!</button></Link>
                </p>
            </div>
            </div>
        );

}

export default Home;