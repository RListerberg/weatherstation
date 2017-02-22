import React, { Component } from 'react';
import './Login.css';
import {serverCommunications} from '../../ServerCommunications';
import {setToken} from '../../Constants';
import {setLoggedIn} from '../../Constants';
import {setStationsID} from '../../Constants';

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
            this.setState({errorDiv: "errorDiv-active-1" , errorMessage : "Please fill out the fields"});
        }
        else{
            serverCommunications.doLogin(this.state.id, this.state.password).then((response) => {
                setToken(response.text);
                serverCommunications.getOneStation(this.state.id).then((response)=>{
                    setLoggedIn(true);
                    setStationsID(response.body.id);
                    this.props.changePage("weatherdata");
                });

            }, (error) => {
                this.setState({loginInputs: "loginInputs-active", errorDiv: "errorDiv-active" , errorMessage : "Wrong password or StationID, please try again"});
                console.log(error);
            });
        }
    };

    render() {

        return (
            <div id="login-root">
                <div id="backgroundCloud">
                <div id="login-form">
                    <div>
                        <h1 id="titleHeader" name="title">Nimbus Weatherstation</h1>
                    </div>
                    <div id="errorDiv" className={this.state.errorDiv}><p id="errorMessageID" className={this.state.errorMessage}>{this.state.errorMessage}</p></div>
                    <div id="login-graphics">
                            <input type="text" placeholder="StationsID" id="stationIdInp" className={this.state.loginInputs} value={this.state.id} onChange={this.handleId} />
                            <input type="password" placeholder="Password" id="passwordInp" className={this.state.loginInputs} value={this.state.password} onChange={this.handlePassword} />
                        <div>
                            <button type="button" id="loginBut" onClick={() => this.handleLogin()}><span>Login</span></button>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        )
    }
}

