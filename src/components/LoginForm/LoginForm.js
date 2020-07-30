import React, { Component } from 'react'
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import './LoginForm.css';
import {
 Redirect
} from "react-router-dom";


export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('token');
        let loggedIn = true;
        if (token==null) {
            loggedIn = false;
        }
        this.state = {
            username: '',
            password: '',
            loggedIn,
        }
    }
    submitForm = (e) => {
        e.preventDefault();
        const {username, password} = this.state;
        if (username=="admin" && password=="admin") {
            localStorage.setItem("token", "asdfghjklpoiu")
            this.setState({
                loggedIn:true
            })            
        }

    }
    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        if (this.state.loggedIn=== true) {
            return <Redirect to="/admin" />
        }
        return (
            <>
                <div className="formwrapper">
                    <form onClick={this.submitForm}>
                        <h1>Login Form</h1>
                        <label>Username</label>
                        <input type="username" id="username" name="username" className="formcontrol" onChange={this.inputChange} />
                        <label>Password</label>
                        <input type="password" id="password" name="password" className="formcontrol" onChange={this.inputChange} />
                        <input type="submit" value="Login" className="btnlogin" />
                    </form>
                </div>

            </>)
    }
}
