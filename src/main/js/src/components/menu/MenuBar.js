import React, { Component } from 'react';
import './MenuBar.css';
import {loggedIn} from '../../Constants';
import {stationsID} from '../../Constants';
import {loginTag} from '../../Constants';
import {setLoginTag, setLoggedIn, setToken, setStationsID, getLoginTag} from '../../Constants';


export default class MenuBar extends Component {


    handleLogout(){
        setLoggedIn(false);
        setToken("");
        setStationsID("");
        setLoginTag("Log in");
        this.props.changePage("statsroot");
    }

    handleLoginTag(){
        if(getLoginTag() == "Back"){
            this.props.changePage("stats")
            setLoginTag("Log in")
        }
        else{
            setLoginTag("Back");
            this.props.changePage("login");
        }
    }

    render() {
        return (
            <div id="menu-root">
                {loggedIn ?
                    <div id="left-side">
                        <p onClick={() => this.props.changePage("weatherdata")}>Weatherdata</p>
                        <p onClick={() => this.props.changePage("stats")}>Stats</p>
                    </div>
               : null}

                <div id="right-side">
                    {loggedIn ? <p>Station {stationsID}</p> : <p onClick={() => this.handleLoginTag()}>{loginTag}</p>}
                    <div >{loggedIn ? <p onClick={() => this.handleLogout()}>Log out</p> : null}</div>
                </div>

            </div>
        )
    }
}

