import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux';
import {addUser} from '../actions';   
import {login} from '../actions';   

function Signup() {
    const history = useHistory();
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const loggedIn = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    
    const handleSignup = (event) => {
        event.preventDefault();
        const newUser = {
            userid: userid,
            password: password
        };
        dispatch(addUser(newUser));
        dispatch(login());
        history.push("/");
    }

    if(!loggedIn){
        return(
        <div className="container">
            <div className="card">
                <div className="card-body"> 
                    <Form onSubmit={handleSignup}>
                        <p className="h4 text-center py-4">Signup</p>
                        <FormGroup className="row">
                            <Label htmlFor="userid" className="offset-1 col-2">User Id</Label>
                            <Input type="text" id="userid" name="userid"
                                    className="col-6" 
                                    onChange={event => setUserid(event.target.value)} />
                        </FormGroup>
                        <FormGroup className="row">
                            <Label htmlFor="password" className="offset-1 col-2">Password</Label>
                            <Input type="password" id="password" name="password" 
                                    className="col-6" 
                                    onChange={event => setPassword(event.target.value)} />
                        </FormGroup>
                        <Button  className="offset-5 col-2" type="submit" value="submit">Sign Up</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
    }
    else {
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">You are already logged in!</h1>
                    <p className="lead">Login and Register App.</p>
                    <hr className="my-4" />
                    <div className="lead row">
                    <p className="mt-2"><strong>Logout</strong> now to switch to a different account.</p>
                    <Link to="/logout" className="col-3"><button className="btn btn-primary btn-lg">Logout!</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;