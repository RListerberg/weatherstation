import React, { Component } from 'react';
import './Login.css';
import {serverCommunications} from '../../ServerCommunications';

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = ({
            id: "",
            password: ""
        })
    }

    handleId = (event) => {
        this.setState({id: event.target.value})
    };

    handlePassword = (event) => {
        this.setState({password: event.target.value})
    };


    handleLogin(){

        serverCommunications.doLogin(this.state.id, this.state.password).then((response)=> {
            console.log(response);
            this.setState({token:response.text});
            serverCommunications.getOneStation(this.state.id, this.state.token);


        }, (error) => {
            console.log(error);
        });

    };


    render() {
        return (
            <div id="login-root">

                <div id="login-form">

                        <label><b>StationsId</b></label>
                        <input type="text" placeholder="stationsId" name="username" value={this.state.id} onChange={this.handleId} />
                        <label><b>Password</b></label>
                        <input type="text" placeholder="password" name="password" value={this.state.password} onChange={this.handlePassword} />

                    <div>
                        <button type="button" className="LoginBut" onClick={this.handleLogin.bind(this)}>Login</button>
                    </div>
                </div>

            </div>
        )
    }
}

