import React, {Component, useEffect} from 'react';
import '../App.css';
import Dashboard from "./Dashboard";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "material-ui/AppBar";
import AppBar from "./AppBar";
import {useCookies} from "react-cookie";
// import MaterialTableDemo from "./usermanagement/usertable";
import EnhancedTable from "./usermanagement/usertable";



//var apiBaseUrl = "http://localhost:4000/api/";




/*
Module:superagent
superagent is used to handle post/get requests to server
*/
var request = require('superagent');

export default function UserMgmt() {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [isAdm,setAdm] = React.useState(false);
    const [isLoggedIn,setLoggedIn] = React.useState(false);


    const readCookieUser = () => {
        const user = cookies.user
        if (user != null) {
            setLoggedIn(true);
        }
        else{
            setLoggedIn(false);
            window.location="/";
        }
    }
    useEffect(()=>{
        readCookieUser();
    })
    return (

                <div >

                        {/*<MaterialTableDemo/>*/}
                        <EnhancedTable/>

                </div>

    );
}


const style = {
    margin: 15,
};

