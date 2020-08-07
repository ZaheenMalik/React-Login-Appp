import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
    

function Signup(props) {
    const history = useHistory();
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const handleSignup = (event) => {
        event.preventDefault();
        props.addInfo(userid, password);
        history.push("/");
    }
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

export default Signup;