import React, { Component } from "react";  
import './Form.css'    
    
class Form extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            name: '',       
            date: '',    
            gender: 'select',    
            phoneNumber: '',    
            district: 'select',    
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { name, date, gender, phoneNumber, district } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        if (!name) {    
            formIsValid = false;    
            formErrors["nameErr"] = "Name is required.";    
        }    
    
        if (!date) {    
            formIsValid = false;    
            formErrors["dateErr"] = "Date is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(date)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "Invalid date.";    
            }    
        }    
       
        if (gender === '' || gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "Select gender.";    
        }    
      
        if (!phoneNumber) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(phoneNumber)) {    
                formIsValid = false;    
                formErrors["phoneNumberErr"] = "Invalid phone number.";    
            }    
        }    
      
        if (district === '' || district === "select") {    
            formIsValid = false;    
            formErrors["districtErr"] = "Select district.";    
        }    
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully.')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { nameErr, dateErr, genderErr, phoneNumberErr, districtErr } = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h3 style={{ textAlign: "center" }} >Form of PHI status</ h3>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="name">Name</label>    
                            <input type="text" name="name"    
                                value={this.state.name}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={nameErr ? ' showError' : ''} />    
                            {nameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{nameErr}</div>    
                            }    
    
                        </div>       
                        <div>    
                            <label htmlFor="text">Date</label>    
                            <input type="text" name="date"    
                                value={this.state.date}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dateErr ? ' showError' : ''} />    
                            {dateErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dateErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="gender">Gender</label>    
                            <select name="gender" onChange={this.handleChange}    
                                className={genderErr ? ' showError' : ''}    
                                value={this.state.gender} >    
                                <option value="select">--Select--</option>    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                <option value="female">Other</option>    
                            </select>    
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="phoneNumber">Phone Number</label>    
                            <input type="text" name="phoneNumber"    
                                onChange={this.handleChange}    
                                value={this.state.phoneNumber}    
                                placeholder="Your phone number.."    
                                className={phoneNumberErr ? ' showError' : ''} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="district">District</label>    
                            <select name="district"    
                                value={this.state.district}    
                                onChange={this.handleChange}    
                                className={districtErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="Ampara">Ampara</option>    
                                <option value="Anuradhapura">Anuradhapura</option>    
                                <option value="Badulla">Badulla</option>    
                                <option value="Batticaloa">Batticaloa</option>    
                                <option value="Colombo">Colombo</option>    
                                <option value="Galle">Galle</option>    
                                <option value="Gampaha">Gampaha</option>    
                                <option value="Hambantota">Hambantota</option>    
                                <option value="Jaffna">Jaffna</option>    
                                <option value="Kalutara">Kalutara</option>    
                                <option value="Kandy">Kandy</option>    
                                <option value="Kegalle">Kegalle</option>    
                                <option value="Kilinochchi">Kilinochchi</option>    
                                <option value="Kurunegala">Kurunegala</option>    
                                <option value="Mannar">Mannar</option>    
                                <option value="Matale">Matale</option>    
                                <option value="Matara">Matara</option>    
                                <option value="Monaragala">Monaragala</option>    
                                <option value="Mullaitivu">Mullaitivu</option>    
                                <option value="Nuwara Eliya">Nuwara Eliya</option>    
                                <option value="Polonnaruwa">Polonnaruwa</option>    
                                <option value="Puttalam">Puttalam</option>    
                                <option value="Ratnapura">Ratnapura</option>    
                                <option value="Trincomalee">Trincomalee</option>    
                                <option value="Vavuniya">Vavuniya</option>    
                            </select>    
                            {districtErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{districtErr}</div>    
                            }    
                        </div>    
                        <input type="submit" value="Submit" />    
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default Form;