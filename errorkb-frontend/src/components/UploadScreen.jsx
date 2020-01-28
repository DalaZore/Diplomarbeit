import React, { Component } from 'react';
import '../App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router";
import LoginScreen from './auth/loginscreen';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "material-ui/AppBar";
import AppBar from "./AppBar";



//var apiBaseUrl = "http://localhost:4000/api/";




/*
Module:superagent
superagent is used to handle post/get requests to server
*/
var request = require('superagent');

class UploadScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            role:'student',
            filesPreview:[],
            filesToBeSent:[],
            draweropen:false,
            printcount:10,
            printingmessage:'',
            printButtonDisabled:false
        }
    }
    componentWillMount(){

    }

    handleLogout(event){
        // console.log("logout event fired",this.props);
        // var loginPage =[];
        // loginPage.push(<LoginScreen appContext={this.props.appContext}/>);
        // this.props.appContext.setState({loginPage:loginPage,uploadScreen:[]})
    }
    render() {
        return(
            <div>
                <MuiThemeProvider>
                    <AppBar                    />
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default UploadScreen;