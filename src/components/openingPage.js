import React from "react";
import "./openingPage.css";
import admin from "./../assets/admin.png";
import NavBar from "./navbar";
function OpeningPage() {
  return (
    <div className="OpeningPage">
      <NavBar/>
      <div class="row">
        <div class="col col-lg-12 col-md-12 col-sm-12 intro">
          <h1>Reading gives us some space when we have to stay where we are</h1>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row openingImage">
          <div class="col col-lg-6 col-sm-6 col-md-6 ">
            <div id="image" style={{ height: "21rem;" }}>
              <img
                className="img-float"
                src={admin}
                alt=""
                height="200px"
                width="300px"
              ></img>
            </div>
            <a href="/signup" class="example_a">
              <h4>Are you a Student</h4>
            </a>
          </div>
          <div class="col col-lg-6 col-sm-6 col-md-6 ">
            <div id="image" style={{ height: "21rem;" }}>
              <img
                className="img-float"
                src={admin}
                alt=""
                height="200px"
                width="300px"
              ></img>
            </div>
            <a href="/signup" class="example_a">
              <h4>Are you a Librarian</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpeningPage;
