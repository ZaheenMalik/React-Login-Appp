import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './Header';
import Login from './Login';
import Logout from './Logout';
import Home from './Home';
import Signup from './Signup';

const initialCredentials = [{
    userid: 'zaheen',
    password: '123'
}]
function Main(){
    const addInfo = (id, pass) => {
        //{...credentials}.push()
        const newCredentials = [...credentials];
        newCredentials.push({ 
            userid: id,
            password: pass
        });
        setloggedIn(true);
        console.log(newCredentials);
        setCredentials(newCredentials);
      };
    const [credentials, setCredentials] = useState(initialCredentials);
    const [loggedIn, setloggedIn] = useState(false);
    return(
        <>
        <Header />
        <Switch>
            <Route path='/home' component={() => <Home loggedIn={loggedIn}/>} />
            <Route exact path='/login' component={() => <Login credentials={credentials} setloggedIn = {setloggedIn} />} />
            <Route exact path='/signup' component={() => <Signup addInfo = {addInfo} />} />
            <Route exact path='/logout' component={() => <Logout setloggedIn = {setloggedIn} />} />
            <Redirect to="/home" />
        </Switch>
        </>
    );
}

export default Main;