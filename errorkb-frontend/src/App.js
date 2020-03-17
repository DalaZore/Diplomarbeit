import React,{Component} from 'react';
import './App.css';
import Login from './components/auth/login.jsx';
import Dashboard from "./components/Dashboard";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import AuthApi from "./components/auth/AuthApi";
import { useCookies } from 'react-cookie';
import UserMgmt from "./components/UserMgmt";
import AppBar from "./components/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


export default function App(){
    const [auth,setAuth] = React.useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const readCookie = () => {
    const user = cookies.user
        if (user) {
            setAuth(true);
        }
    };

    React.useEffect(()=>    {
        readCookie();
    },[]);

    return (
        <div>
            <MuiThemeProvider>
                <AppBar />
            </MuiThemeProvider>
            <AuthApi.Provider value={{auth,setAuth}}>
                    <Router>
                      <Routes/>
                    </Router>
            </AuthApi.Provider>
        </div>
    )
}



const Routes = () => {
    const Auth = React.useContext(AuthApi);
  return(
      <Switch>
          <ProtectedLogin path={"/"} exact auth={Auth.auth} component={Login}/>
          <ProtectedRoute path={"/Dashboard"} exact auth={Auth.auth} component={Dashboard}/>
          <Route path={"/UserMgmt"} auth={Auth.auth} exact component={UserMgmt}/>
      </Switch>
  )
};

const ProtectedRoute = ({auth,component:Component,...rest}) => {
    return(
        <Route
            {...rest}
            render = {()=>auth?(
                <Component/>
            ):
                (
                    <Redirect to={'/'}/>
                )
            }/>
    )
};
const ProtectedLogin = ({auth,component:Component,...rest}) => {
    return(
        <Route
            {...rest}
            render = {()=>!auth?(
                    <Component/>
                ):
                (
                    <Redirect to={'/Dashboard'}/>
                )
            }/>
    )
};



