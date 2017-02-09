import React, { Component } from 'react';
import './MenuBar.css';

export default class MenuBar extends Component {

    render() {
        return (
            <div id="menu-root">
                <div id="left-side">
                    <p onClick={() => this.props.changePage("weatherdata")}>Weatherdata</p>
                    <p onClick={() => this.props.changePage("stats")}>Stats</p>
                </div>

                <div id="right-side">
                    <p>Station 3</p>
                </div>

            </div>
        )
    }
}

