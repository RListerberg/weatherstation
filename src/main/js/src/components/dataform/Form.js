import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {

    handleChange = (event) => {
        this.setState( {request: event.target.value} )
    };

    handleSubmit = (event) => {
        event.preventDefault();
        var request = this.state.request.trim();
        if (!request) {
            return;
        }

        fetch(`/echo?request=${request}`)
            .then(response => {
                return response.text();
            })
            .then(body => {
                alert(body);
            });
    };

    render() {
        return (
            <div id="form-root">

                <h2>Form for data</h2>

                <p>Test connection to server:</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <input type="submit" value="Echo" />
                </form>

            </div>
        )
    }
}

