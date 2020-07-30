import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

export default class Logout extends Component {
    constructor(props) {
        super(props);

        localStorage.removeItem('token');
        
        this.state = {
          
        }
    }
    render() {
        return (
            <div>
                <h1>You have been logout</h1>
                <br />
                <Link to="/">Login</Link>
            </div>
        )
    }
}
