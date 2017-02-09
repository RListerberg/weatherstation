import React, { Component } from 'react';
import MenuBar from '../menu/MenuBar';
import Form from '../dataform/Form';
import StatsRoot from '../statsroot/StatsRoot';

import './Root.css';

export default class Root extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: true, // <--- Temporarily until loginform is done
            activePage: "weatherdata"
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
            default:
                activePage = <Form/>;
        }

        return (
            <div id="root">
                {this.state.loggedIn ? <MenuBar changePage={this.changePage.bind(this)}/> : null}

                {activePage}
            </div>
        )
    }
}
