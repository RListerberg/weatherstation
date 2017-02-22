import React, { Component } from 'react';
import Datetime from 'react-datetime'
import './Datainput.css';
import 'react-date-picker/index.css'

let date = new Date();

export default class Datainput extends Component {

    returnDatepicker(){
        return (
            <Datetime onChange={this.props.handleDateChange} dateFormat="YYYY-MM-DD" timeFormat="HH:mm" defaultValue={date} inputProps={{"className":"dateTimeInput"}}/>
        )
    }

    fillDropdown(){
       return this.props.dropdownValues.map((value) => {
            return (
                <option key={value.id} value={value.value}>{value.text}</option>
            )
        });
    }

    returnSelect(){
        return (
            <select name={this.props.inputName} className="valuedropdown" onChange={this.props.handleChange}>
                {this.fillDropdown()}
            </select>
        )
    }

    returnInput() {
        return (
            <div id="valueinput-container">
                <input type="number" ref={this.props.inputRef} name={this.props.inputName} onChange={this.props.handleChange} className={this.props.inputClass}/>
                <p>{this.props.valueSymbol}</p>
            </div>
        )
    }

    render() {
        var input;

        if (this.props.isDatePicker) {
            input = this.returnDatepicker();
        }
        else if (this.props.isDropdown) {
            input = this.returnSelect();
        }
        else {
            input = this.returnInput();
        }

        return (
            <div id="datainput-root">
                <p>{this.props.valueName}</p>
                {input}
            </div>
        )
    }
}

