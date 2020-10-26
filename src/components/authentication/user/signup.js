import React, { Component, useState } from "react";
import "./user.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "./../../navbar";
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      startDate: new Date(),
      isVerified: false,
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.phoneCheck = this.phoneCheck.bind(this);
  }
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  phoneCheck(e) {
    const re = /^[0-9\b]+$/;
    let errors = {};
    if (e.target.value.length < 10) {
      errors["phone"] = "Size must be 10";
    }
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
    } else {
      errors["phone"] = "Please enter only numbers";
    }
    this.setState({ errors: errors });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["email"] = "";

      this.setState({ input: input });

      alert("Form is submited");
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }
  render() {
    return (
      <>
        <div class="signup-container">
          <NavBar />

          <div className="alreadyLogin">
            Already registered &nbsp;
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Login
            </button>
          </div>
          <div className="container">
            <h2>Sign Up Here</h2>
            <form action="" onSubmit={this.handleSubmit} id="signupForm">
              <div className="form-group">
                <label for="fname">First Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="Enter your First Name"
                  name="fname"
                  required
                />
              </div>

              <div className="form-group">
                <label for="mname">Middle Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="mname"
                  placeholder="Enter your Middle Name"
                  name="mname"
                />
              </div>

              <div className="form-group">
                <label for="lname">Last Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="Enter your Last Name"
                  name="lname"
                  required
                />
              </div>

              <div className="form-group">
                <label for="address"> Address:</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Address"
                  name="address"
                  required
                />
              </div>
              <div class="row">
                <div className="col col-md-4">
                  <div className="form-group">
                    <label for="district">District:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="district"
                      placeholder="District"
                      name="district"
                      required
                    />
                  </div>
                </div>

                <div class="col col-md-4">
                  <div className="form-group">
                    <label for="state">State:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lname"
                      placeholder="State"
                      name="state"
                      required
                    />
                  </div>
                </div>
                <div class="col col-md-4">
                  <div className="form-group">
                    <label for="country">Country:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      placeholder="Country"
                      name="country"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="email">Email Id:</label>
                <div className="row">
                  <div className="col col-sm-8">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      onChange={this.handleChange}
                      placeholder="Enter your Email Id"
                      name="email"
                      required
                    />
                  </div>
                  <div className="col col-sm-3">
                    <div
                      className={
                        this.state.isVerified ? "text-success" : "text-danger"
                      }
                    >
                      {this.state.isVerified ? "Verified" : "Not Verified"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="pno">Phone Number:</label>
                <div class="row">
                  <div class="col col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      id="pno"
                      value={this.state.value}
                      onChange={this.phoneCheck}
                      placeholder="Enter Phone Number"
                      name="pno"
                      required
                    />
                    <div
                      className={
                        this.state.errors["phone"] == null
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {this.state.errors["phone"] == null
                        ? ""
                        : this.state.errors["phone"]}
                    </div>
                  </div>
                  <div class="col col-sm-3">
                    <div
                      className={
                        this.state.isVerified ? "text-success" : "text-danger"
                      }
                    >
                      {this.state.isVerified ? "Verified" : "Not Verified"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="dob">Date of Birth:</label>
                <br />

                <DatePicker
                  selected={this.state.startDate}
                  onChange={(date) => this.setState({ startDate: date })}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  placeholderText="Choose your DOB"
                />
              </div>

              <div className="form-group">
                <label for="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="pswd"
                  required
                />
              </div>

              <div className="form-group">
                <label for="uid">User Id:</label>
                <input
                  type="text"
                  className="form-control"
                  id="uid"
                  placeholder="Userid"
                  name="uid"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  this.setState({ isVerified: true });
                }}
              >
                Sign Up
              </button>
              <footer className="footer">
              
              </footer>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
