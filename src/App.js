import React from "react";
import "./App.css";
import OpeningPage from "./components/openingPage";
// import NavBar from "./components/navbar";
import Signup from "./components/authentication/user/signup";
import Login from "./components/authentication/user/login";
import Register from "./components/authentication/user/register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UpdateProfile from "./components/landingPage/user/updateProfile";
import Search from "./components/landingPage/admin/search";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <OpeningPage />
        </Route>

         <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/updateProfile">
          <UpdateProfile />
        </Route>

        <Route exact path="/search">
          <Search />
        </Route>
  
      </div>
    </Router>
  );
}

export default App;


