import React, { Component } from "react";
import "./openingPage.css";
class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
              Holistic Library
            </a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
              <li class="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/updateProfile">Profile</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-left">
              <li>
                <a href="/register">
                  <span class="glyphicon glyphicon-user"></span> Sign Up
                </a>
              </li>
              <li>
                <a href="/login">
                  <span class="glyphicon glyphicon-log-in"></span> Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
