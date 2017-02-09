import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {


    handleLogin = (event) =>{

    }

    render() {
        return (
            <div id="login-root">

                <div id="login-form">
                    <label><b>StationsId</b></label>
                    <input type="text" placeholder="stationsId" name="uname" />
                    <label><b>Password</b></label>
                    <input type="text" placeholder="password" name="pword"/>
                    <div>
                        <button type="button" class="cancelBut">Cancel</button>
                        <button type="button" class="LoginBut" onChange={this.handleLogin}>Login</button>
                    </div>
                </div>

            </div>
        )
    }
}

