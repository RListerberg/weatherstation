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

    saveWeatherData(){
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

        serverCommunications.addWeatherData(weatherData).then((response)=> {
            console.log(response);
        }, (error) => {
            console.error(error);
            alert("Failed to connect to server");
        });

    }

    render() {
        return (
            <div id="form-root">
                <div id="input-container">
                    <Datainput valueName="DATE & TIME" handleDateChange={this.handleDateChange} inputName="" isDatePicker={true}/>
                    <Datainput valueName="TEMPERATURE" valueSymbol="°C" handleChange={this.handleChange} inputName="temperature" />
                    <Datainput valueName="HUMIDITY" valueSymbol="%" handleChange={this.handleChange} inputName="humidity"/>
                    <Datainput valueName="PRESSURE" valueSymbol="hPa" handleChange={this.handleChange} inputName="pressure"/>
                    <Datainput valueName="WIND DIRECTION" handleChange={this.handleChange} inputName="winddirection" isDropdown={true} dropdownValues={windValues}/>
                    <Datainput valueName="WIND VELOCITY" valueSymbol="m/s" handleChange={this.handleChange} inputName="windvelocity"/>
                    <Datainput valueName="RAINFALL" valueSymbol="mm" handleChange={this.handleChange} inputName="rainfall"/>
                    <Datainput valueName="CLOUD BASE" valueSymbol="m" handleChange={this.handleChange} inputName="cloudbase"/>
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

