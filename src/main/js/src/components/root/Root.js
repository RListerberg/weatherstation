import React, { Component } from 'react';
import MenuBar from '../menu/MenuBar';
import Login from '../login/Login';
import Form from '../dataform/Form';
import StatsRoot from '../statsroot/StatsRoot';
import { loggedIn } from '../../Constants';

import './Root.css';

export default class Root extends Component {
    constructor(props){
        super(props);
        this.state = {
            activePage: ""
        };
    }

    changePage(activePage) {
        this.setState({activePage: activePage});
    }

    render() {
        let activePage = null;

        switch(this.state.activePage) {
            case "weatherdata":
                activePage = <Form/>;
                break;
            case "stats":
                activePage = <StatsRoot/>;
                break;
            case "login":
                activePage = <Login changePage={this.changePage.bind(this)}/>;
                break;
            default:
                activePage = <StatsRoot/>;
                break;
        }

        return (
            <div id="root">
                <MenuBar changePage={this.changePage.bind(this)}/>

                {activePage}

            </div>
        )
    }
}
