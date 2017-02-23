import React, {Component} from "react";
import {serverCommunications} from "../../ServerCommunications";
import "./StatsRoot.css";
import StatsDetail from "../statsdetail/StatsDetail";
import WeatherdataContainer from '../weatherdata-container/WeatherdataContainer';

export default class StatsRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avgArray: [],
            idArray: [],
            currArray: []
        }
    }

    componentDidMount() {
        this.extractAvgData();
        this.extractCurrData("?size=10&sort=dataDate,desc&sort=dataTime,desc");
    }

    renderCurrent() {
        return  (
             <WeatherdataContainer weatherDataArray={this.state.currArray}/>
           )
    }

    renderData() {
        return this.state.avgArray.map((currPoint) => {
            return (
                <StatsDetail title={currPoint.title} value={currPoint.value} unit={currPoint.unit}/>
            );
        });
    }

    extractAvgData() {
        Promise.all([serverCommunications.getAvgTemp(),
            serverCommunications.getAvgRainfall(),
            serverCommunications.getAvgWindVelocity(),
            serverCommunications.getAvgCloudCoverage(),
            serverCommunications.getAvgHumidity(),
            serverCommunications.getAvgPressure(),
            serverCommunications.getAllStationIds()
        ]).then((res) => {
            var tempArray = [];

            tempArray.push({
                title: "TEMPERATURE",
                value: res[0].body.toFixed(2),
                unit: "°C"
            });

            tempArray.push({
                title: "RAINFALL",
                value: res[1].body.toFixed(2),
                unit: "mm"
            });

            tempArray.push({
                title: "WIND VELOCITY",
                value: res[2].body.toFixed(2),
                unit: "m/s"
            });

            tempArray.push({
                title: "CLOUD COVERAGE",
                value: res[3].body.toFixed(2),
                unit: "/8"
            });

            tempArray.push({
                title: "HUMIDITY",
                value: res[4].body.toFixed(2),
                unit: "%"
            });

            tempArray.push({
                title: "PRESSURE",
                value: res[5].body.toFixed(1),
                unit: "hPa"
            });
            console.log(res[6]);
            this.setState({avgArray: tempArray});
            this.setState({idArray: res[6].body})
        });
    }


    extractCurrData(currString) {
        serverCommunications.getStats(currString).then((res) => {
           this.setState({currArray: res.body.content});
        });
    }

    fillDropdown() {
        return this.props.dropdownValues.map((value) => {
            return (
                <option key={value.id} value={value.value}>{value.text}</option>
            )
        });
    }

    fillDropdown() {
        return this.state.idArray.map((value) => {
            return (
                <option key={value} value={value}>Station {value}</option>
            )
        });
    }

    returnSelect() {
        return (
            <select name="Station" className="stationDropDown" onChange={this.handleChange}>
                <option key="All" value="All">All stations</option>
                {this.fillDropdown()}
            </select>
        )
    }

    handleChange = (event) => {
        if (event.target.value === "All") {
            this.extractCurrData("?size=10&sort=dataDate,desc&sort=dataTime,desc");
        } else {
            this.extractCurrData("/"+event.target.value+"?size=10&sort=dataDate,desc&sort=dataTime,desc");
        }
    };

    render() {
        return (
            <div className="stats-root">
                <div className="stats-title-container">
                    <div id="title-div">
                        <h2>Latest collected weather data</h2>
                        {this.returnSelect()}
                    </div>
                        {this.renderCurrent()}
                </div>
                <div className="stats-title-container">
                    <h2>Average weather</h2>
                </div>
                <div className="details-container">
                    {this.renderData()}
                </div>
            </div>
        )
    }
}
