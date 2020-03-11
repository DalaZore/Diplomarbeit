import React, { Component } from 'react';
import '../App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "material-ui/AppBar";
import AppBar from "./AppBar";



//var apiBaseUrl = "http://localhost:4000/api/";




/*
Module:superagent
superagent is used to handle post/get requests to server
*/
var request = require('superagent');

class Home extends Component {

    render() {
        return(
            <div>
                <MuiThemeProvider>
                    <AppBar />
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Home;