import React, { Component } from 'react';
import './MenuBar.css';
import {loggedIn} from '../../Constants';
import {stationsID} from '../../Constants';

export default class MenuBar extends Component {

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
                    {loggedIn ? <p>Station {stationsID}</p> : <p onClick={() => this.props.changePage("login")}>Log in</p>}
                </div>
            </div>
        )
    }
}

