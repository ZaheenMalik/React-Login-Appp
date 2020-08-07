import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './Header';
import Login from './Login';
import Logout from './Logout';
import Home from './Home';
import Signup from './Signup';

function Main(){
    return(
        <>
        <Header />
        <Switch>
            <Route path='/home' component={() => <Home />} />
            <Route exact path='/login' component={() => <Login />} />
            <Route exact path='/signup' component={() => <Signup />} />
            <Route exact path='/logout' component={() => <Logout />} />
            <Redirect to="/home" />
        </Switch>
        </>
    );
}

export default Main;