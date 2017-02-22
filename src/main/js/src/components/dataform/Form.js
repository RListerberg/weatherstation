import React, { Component } from 'react';
import moment from 'moment';
import Datainput from '../datainput/Datainput';
import { windValues, cloudValues, cloudCoverageValues } from '../../Constants';
import { serverCommunications } from '../../ServerCommunications';
import './Form.css';

const date = new Date();


export default class Form extends Component {

    constructor(props){
        super(props);
        this.state = ({
            date: moment(date).format("YYYY-MM-DD"),
            time: moment(date).format("HH:mm"),
            winddirection: windValues[0].value,
            cloudtype: cloudValues[0].value,
            cloudcoverage: 1
        });
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
        this.setState({date: moment(date).format("YYYY-MM-DD"), time: moment(date).format("HH:mm")});
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

    saveWeatherData(){

        console.log(this.validate());

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
            windVelocity: this.state.windvelocity
        };
/*
        serverCommunications.addWeatherData(weatherData).then((response)=> {
            console.log(response);
        }, (error) => {
            console.error(error);
            alert("Failed to connect to server");
        });
*/
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
            </div>
        )
    }
}

