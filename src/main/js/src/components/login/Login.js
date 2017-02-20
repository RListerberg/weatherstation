import React, { Component } from 'react';
import './Login.css';
import {serverCommunications} from '../../ServerCommunications';

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = ({
            username: "",
            password: ""
        })
    }

    handleUsername = (event) => {
        this.setState({username: event.target.value})
    };

    handlePassword = (event) => {
        this.setState({password: event.target.value})
    };


    handleLogin(){


        serverCommunications.doLogin(this.state.username, this.state.password).then((response)=> {
            console.log(response);
        });
        // alert('Username: ' + this.state.username);
        // alert('Password: ' + this.state.password);
    };


    render() {
        return (
            <div id="login-root">

                <div id="login-form">

                        <label><b>StationsId</b></label>
                        <input type="text" placeholder="stationsId" name="username" value={this.state.username} onChange={this.handleUsername} />
                        <label><b>Password</b></label>
                        <input type="text" placeholder="password" name="password" value={this.state.password} onChange={this.handlePassword} />

                    <div>
                        <button type="button" className="cancelBut">Cancel</button>
                        <button type="button" className="LoginBut" onClick={this.handleLogin.bind(this)}>Login</button>
                    </div>
                </div>

            </div>
        )
    }
}

