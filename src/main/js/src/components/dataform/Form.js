import React, { Component } from 'react';
import Datainput from '../datainput/Datainput';
import moment from 'moment';
import './Form.css';

const date = new Date();
const windValues = [
    {id: 1, value: "North", text: "North"},
    {id: 2, value: "East", text: "East"},
    {id: 3, value: "South", text: "South"},
    {id: 4, value: "West", text: "West"},
    {id: 5, value: "Northeast", text: "Northeast"},
    {id: 6, value: "Northwest", text: "Northwest"},
    {id: 7, value: "Southeast", text: "Southeast"},
    {id: 8, value: "Southwest", text: "Southwest"},
];
const cloudValues = [
    {id: 1, value: "Fibratus", text: "Fibratus"},
    {id: 2, value: "Capillatus", text: "Capillatus"},
    {id: 3, value: "Castellanus", text: "Castellanus"},
    {id: 4, value: "Lenticularis", text: "Lenticularis"},
    {id: 5, value: "Mediocris", text: "Mediocris"},
    {id: 6, value: "Spissatus", text: "Spissatus"},
    {id: 7, value: "Calvus", text: "Calvus"},
    {id: 8, value: "Nebulosus", text: "Nebulosus"},
    {id: 9, value: "Uncinus", text: "Uncinus"},
    {id:10, value: "Humilis", text: "Humilis"},
    {id:11, value: "Stratiformis", text: "Stratiformis"},
    {id:12, value: "Fractus", text: "Fractus"},
    {id:13, value: "Floccus", text: "Floccus"}
];
const cloudCoverageValues = [
    {id: 1, value: 1, text: "1/8"},
    {id: 2, value: 2, text: "2/8"},
    {id: 3, value: 3, text: "3/8"},
    {id: 4, value: 4, text: "4/8"},
    {id: 5, value: 5, text: "5/8"},
    {id: 6, value: 6, text: "6/8"},
    {id: 7, value: 7, text: "7/8"},
    {id: 8, value: 8, text: "8/8"},
];

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

        console.log(weatherData);
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

