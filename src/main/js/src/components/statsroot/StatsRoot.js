import React, { Component } from 'react';
import logo from '../../img/giphy.gif';
import './StatsRoot.css';

export default class StatsRoot extends Component {

    render() {
        return (
            <div id="stats-root">

                <p>Stats page</p>
                <img src={logo} alt=""/>

            </div>
        )
    }
}
