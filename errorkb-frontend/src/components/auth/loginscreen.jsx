import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Login from './login';

const style = {
    margin: 15,
};

class Loginscreen extends Component {
    constructor(props){
        super(props);
        var loginButtons=[];
        loginButtons.push(
            <div key={"Login-Div"}>
            </div>
        )
        this.state={
            username:'',
            password:'',
            loginscreen:[],
            loginmessage:'',
            loginButtons:loginButtons,
            isLogin:true
        }
    }
    componentWillMount(){
        let loginscreen=[];
        loginscreen.push(<Login parentContext={this} appContext={this.props.appContext} key={"LoginScreen"}/>);
        this.setState({
            loginscreen:loginscreen,
        })
    }
    handleClick(event,userRole){
        let loginmessage;
        if(this.state.isLogin){
            let loginscreen=[];
            let loginButtons=[];
            loginButtons.push(
                <div key="login-button">
                    <MuiThemeProvider>
                        <div>
                            <RaisedButton label={"Login"} primary={true} style={style} onClick={(event) => this.handleClick(event,userRole)}/>
                        </div>
                    </MuiThemeProvider>
                </div>
            )
            this.setState({
                loginscreen:loginscreen,
                loginmessage:loginmessage,
                isLogin:false
            })
        }

    }
    render() {
        return (
            <div className="loginscreen" key="loginscreen">
                {this.state.loginscreen}
                <div>
                    {this.state.loginmessage}
                </div>
            </div>
        );
    }
}


export default Loginscreen;