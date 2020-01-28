import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from "../AppBar";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Counters from '../counters';
import UploadScreen from '../UploadScreen';


let apiBaseUrl = "http://localhost:4000/api/";
class Login extends Component {
    constructor(props){
        super(props);
        let localloginComponent=[];
        localloginComponent.push(
            <MuiThemeProvider key={"theme"}>
                <div>
                    <TextField
                        hintText="Enter your Username"
                        floatingLabelText="Login"
                        onChange={(event,newValue) => this.setState({username:newValue})}
                    />
                    <br/>
                    <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange = {(event,newValue) => this.setState({password:newValue})}
                    />
                    <br/>
                    <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                </div>
            </MuiThemeProvider>
        )
        this.state={
            username:'',
            password:'',
            menuValue:1,
            loginComponent:localloginComponent,
            loginRole:'user'
        }
    }
    componentWillMount(){
        let localloginComponent=[];
        localloginComponent.push(
            <MuiThemeProvider>
                <div>
                    <TextField
                        hintText="Enter your Username"
                        floatingLabelText="Login"
                        onChange = {(event,newValue) => this.setState({username:newValue})}
                    />
                    <br/>
                    <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange = {(event,newValue) => this.setState({password:newValue})}
                    />
                    <br/>
                    <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                </div>
            </MuiThemeProvider>
        )
        this.setState({menuValue:1,loginComponent:localloginComponent,loginRole:'user'})
            }

    handleClick(event){
        let self = this;
        let payload={
            "userid":this.state.username,
            "password":this.state.password,
        }
        if(payload.userid=="test" && payload.password=="test"){
            let uploadScreen=[];
            uploadScreen.push(<UploadScreen appContext={self.props.appContext} role={self.state.loginRole}/>)
            self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})

        }
        // axios.post(apiBaseUrl+'login', payload)
        //     .then(function (response) {
        //         console.log(response);
        //         if(response.data.code == 200){
        //             console.log("Login successfull");
        //             let uploadScreen=[];
        //             uploadScreen.push(<Counters appContext={self.props.appContext} role={self.state.loginRole}/>)
        //             self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
        //         }
        //         else if(response.data.code == 204){
        //             console.log("Username password do not match");
        //             alert(response.data.success)
        //         }
        //         else{
        //             console.log("Username does not exists");
        //             alert("Username does not exist");
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title="Login"
                    />
                </MuiThemeProvider>
                {this.state.loginComponent}
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Login;