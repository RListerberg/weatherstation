import React, {Component} from "react";


export default class StatsDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="stats-container">
                <div className="stats-title">
                    <p>{this.props.title}</p>
                </div>
                <div className="stats-info">
                    <p>{this.props.value}</p>
                    <p>{this.props.unit}</p>
                </div>
            </div>
        )
    }
}