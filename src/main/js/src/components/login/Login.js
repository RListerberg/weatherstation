import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {

    handleLogin = (event) =>{
        alert('Username: ' + this.state.username);
        alert('Password: ' + this.state.password);
        event.preventDefault();
    };


    render() {
        return (
            <div id="login-root">

                <div id="login-form">

                        <label><b>StationsId</b></label>
                        <input type="text" placeholder="stationsId" name="username" value={this.state.username} />
                        <label><b>Password</b></label>
                        <input type="text" placeholder="password" name="password" value={this.state.password} />

                    <div>
                        <button type="button" class="cancelBut">Cancel</button>
                        <button type="button" class="LoginBut" onSubmit={this.handleLogin} >Login</button>
                    </div>
                </div>

            </div>
        )
    }
}

