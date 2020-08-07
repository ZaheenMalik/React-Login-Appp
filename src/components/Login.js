import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
    

function Login(props) {
    const history = useHistory();
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');

    const verifyUser = () => {
        if(props.credentials.some(user => user.userid === userid)){
            if(props.credentials.some(user => user.password === password)){
                props.setloggedIn(true);
                history.push("/");
                alert("Correct!");
            }
            else
                alert("Incorrect Password!");
        }
        else
            alert("User does not exist");
        // let mssg = props.credentials.map(user => {
        //     if(user.userid === userid){
        //       if(user.password===password) 
        //         return("Correct");
        //       else
        //         return("Password incorrect");
        //     }
        //     else
        //         return("Invalid ID");
        //   })[0];
        //   console.log(mssg);
        //     alert(mssg);
        //     if(mssg === "Correct")
        //         props.setloggedIn(true);
    }
    const handleLogin = (event) => {
        event.preventDefault();
        verifyUser();
        
    }
    return(
        <div className="container">
        <div className="card">
            <div className="card-body"> 
                <Form onSubmit={handleLogin}>
                    <p className="h4 text-center py-4">Login</p>
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
                    <Button  className="offset-5 col-2 btn btn-cyan" type="submit" value="submit" color="primary">Login</Button>
                </Form>
                </div>
                </div>
        </div>
    );
}

export default Login;