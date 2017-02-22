import React, { Component } from 'react';
import './Login.css';
import {serverCommunications} from '../../ServerCommunications';

export default class Login extends Component {



    constructor(props){
        super(props);
        this.state = ({
            id: "",
            password: "",
            loginInputs: "loginInputs",
            errorDiv: "errorDiv"
        })
    }

    handleId = (event) => {
            this.setState({id: event.target.value})
    };

    handlePassword = (event) => {
        this.setState({password: event.target.value})
    };


    handleLogin(){
        if(this.state.id == "" || null)
        {
            this.setState({errorDiv: "errorDiv-active" , errorMessage : "Please fill out the fields"});
        }
        else{
            serverCommunications.doLogin(this.state.id, this.state.password).then((response)=> {
                console.log(response);
                this.setState({token:response.text});
                serverCommunications.getOneStation(this.state.id, this.state.token);
            }, (error) => {
                this.setState({loginInputs: "loginInputs-active", errorDiv: "errorDiv-active" , errorMessage : "Wrong password or StationID, please try again"});
                console.log(error);
            });
        }
    };


    render() {
        return (
            <div id="login-root">
                <div id="login-form">
                    <div>
                        <h1 id="titleHeader" name="title">Nimbus Weatherstation</h1>
                    </div>
                    <div id="errorDiv" className={this.state.errorDiv}><p id="errorMessageID" className={this.state.errorMessage}>{this.state.errorMessage}</p></div>
                    <div id="login-graphics">
                            <input type="text" placeholder="StationsID" id="stationIdInp" className={this.state.loginInputs} value={this.state.id} onChange={this.handleId} />
                            <input type="password" placeholder="Password" id="passwordInp" className={this.state.loginInputs} value={this.state.password} onChange={this.handlePassword} />
                        <div>
                            <button type="button" className="LoginBut" id="loginBut" onClick={this.handleLogin.bind(this)}><span>Login</span></button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

