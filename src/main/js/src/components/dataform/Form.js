import React, { Component } from 'react';
import moment from 'moment';
import Datainput from '../datainput/Datainput';
import WeatherdataContainer from '../weatherdata-container/WeatherdataContainer';
import { windValues, cloudValues, cloudCoverageValues, currentStation } from '../../Constants';
import { serverCommunications } from '../../ServerCommunications';
import './Form.css';

let weatherData = {
    cloudBase: 125,
    cloudCoverage: 124,
    cloudType: 532,
    dataDate: 2015225212,
    dataTime: 12242,
    humidity: 1356,
    pressure: 7456,
    rainfall: 2352,
    temp: 2352,
    windDirection: 2352,
    windVelocity: 235,
};

export default class Form extends Component {

    constructor(props){
        super(props);
        this.state = ({
            date: moment(new Date()).format("YYYY-MM-DD"),
            time: moment(new Date()).format("HH:mm:ss"),
            winddirection: windValues[0].value,
            cloudtype: cloudValues[0].value,
            cloudcoverage: 1,
            weatherDataHistory: []
        });
    }

    componentWillMount(){
        this.getHistoryData();
    }

    handleChange = (event) => {
        switch (event.target.name) {
            case "temperature":
                this.setState({temperature: Number(event.target.value)});
                break;
            case "humidity":
                this.setState({humidity: Number(event.target.value)});
                break;
            case "windvelocity":
                this.setState({windvelocity: Number(event.target.value)});
                break;
            case "pressure":
                this.setState({pressure: Number(event.target.value)});
                break;
            case "rainfall":
                this.setState({rainfall: Number(event.target.value)});
                break;
            case "cloudbase":
                this.setState({cloudbase: Number(event.target.value)});
                break;
            case "cloudcoverage":
                this.setState({cloudcoverage: event.target.value});
                break;
            case "cloudtype":
                this.setState({cloudtype: event.target.value});
                break;
            case "winddirection":
                this.setState({winddirection: event.target.value});
                break;
            default:
                break;
        }
    };

    handleDateChange = (date) => {
        this.setState({date: moment(date).format("YYYY-MM-DD"), time: moment(date).format("HH:mm:ss")});
    };

    validate(){
        let validateOk = true;

        if (!this.state.temperature){
            this.tempInput.className = "input-error";
            validateOk = false;
        } else {
            this.tempInput.className = undefined;
        }

        if (!this.state.humidity){
            this.humidityInput.className = "input-error";
            validateOk = false;
        } else {
            this.humidityInput.className = undefined;
        }

        if (!this.state.pressure){
            this.pressureInput.className = "input-error";
            validateOk = false;
        } else {
            this.pressureInput.className = undefined;
        }

        if (!this.state.windvelocity){
            this.windvelocityInput.className = "input-error";
            validateOk = false;
        } else {
            this.windvelocityInput.className = undefined;
        }

        if (!this.state.rainfall){
            this.rainfallInput.className = "input-error";
            validateOk = false;
        } else {
            this.rainfallInput.className = undefined;
        }

        if (!this.state.cloudbase){
            this.cloudbaseInput.className = "input-error";
            validateOk = false;
        } else {
            this.cloudbaseInput.className = undefined;
        }

        return validateOk;
    }

    getHistoryData(){
        serverCommunications.getStats("/" + currentStation.id + "?size=5&sort=dataDate,desc&sort=dataTime,desc").then((response) => {
            this.setState({weatherDataHistory: response.body.content});
        }, (error) => {
            console.error(error);
        });
    }

    saveWeatherData(){
        if (this.validate()) {

            let weatherData = {
                cloudBase: this.state.cloudbase,
                cloudCoverage: this.state.cloudcoverage,
                cloudType: this.state.cloudtype,
                dataDate: this.state.date,
                dataTime: this.state.time,
                humidity: this.state.humidity,
                pressure: this.state.pressure,
                rainfall: this.state.rainfall,
                temp: this.state.temperature,
                windDirection: this.state.winddirection,
                windVelocity: this.state.windvelocity,
                station: currentStation
            };

            serverCommunications.addWeatherData(weatherData).then((response)=> {
                this.setState({
                    winddirection: windValues[0].value,
                    cloudtype: cloudValues[0].value,
                    cloudcoverage: 1,
                    cloudBase: "",
                    humidity: "",
                    pressure: "",
                    rainfall: "",
                    temp: "",
                    windvelocity: ""
                });

                this.tempInput.value = "";
                this.humidityInput.value = "";
                this.rainfallInput.value = "";
                this.windvelocityInput.value = "";
                this.pressureInput.value = "";
                this.cloudbaseInput = "";

                this.getHistoryData();

            }, (error) => {
                console.error(error);
                alert("Failed to connect to server");
            });

        }
    }

    render() {
        return (
            <div id="form-root">

                <div id="input-container">
                    <Datainput valueName="DATE & TIME" handleDateChange={this.handleDateChange} inputName="" isDatePicker={true}/>
                    <Datainput inputRef={(input) => { this.tempInput = input; }} valueName="TEMPERATURE" valueSymbol="°C" handleChange={this.handleChange} inputName="temperature" />
                    <Datainput inputRef={(input) => { this.humidityInput = input; }} valueName="HUMIDITY" valueSymbol="%" handleChange={this.handleChange} inputName="humidity"/>
                    <Datainput inputRef={(input) => { this.pressureInput = input; }} valueName="PRESSURE" valueSymbol="hPa" handleChange={this.handleChange} inputName="pressure"/>
                    <Datainput valueName="WIND DIRECTION" handleChange={this.handleChange} inputName="winddirection" isDropdown={true} dropdownValues={windValues}/>
                    <Datainput inputRef={(input) => { this.windvelocityInput = input; }} valueName="WIND VELOCITY" valueSymbol="m/s" handleChange={this.handleChange} inputName="windvelocity"/>
                    <Datainput inputRef={(input) => { this.rainfallInput = input; }} valueName="RAINFALL" valueSymbol="mm" handleChange={this.handleChange} inputName="rainfall"/>
                    <Datainput inputRef={(input) => { this.cloudbaseInput = input; }} valueName="CLOUD BASE" valueSymbol="m" handleChange={this.handleChange} inputName="cloudbase"/>
                    <Datainput valueName="CLOUD COVERAGE" handleChange={this.handleChange} inputName="cloudcoverage" isDropdown={true} dropdownValues={cloudCoverageValues}/>
                    <Datainput valueName="CLOUD TYPE" handleChange={this.handleChange} inputName="cloudtype" isDropdown={true} dropdownValues={cloudValues}/>
                </div>

                <div id="button-container">
                    <div id="save-button" onClick={() => this.saveWeatherData()}><p>SAVE</p></div>
                </div>

                <h2 id="history-header">HISTORY</h2>
                <hr/>
                <div id="weatherdata-container">
                    <WeatherdataContainer weatherDataArray={this.state.weatherDataHistory}/>
                </div>

            </div>
        )
    }
}

