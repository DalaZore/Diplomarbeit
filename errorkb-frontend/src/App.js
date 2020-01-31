import React,{Component} from 'react';
import './App.css';
import Login from './components/auth/login.jsx';
import Home from "./components/Home";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import AuthApi from "./components/auth/AuthApi";
import { useCookies } from 'react-cookie';


export default function App(){
    const [auth,setAuth] = React.useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const readCookie = () => {
    const user = cookies.user
        console.log(user);
        if (user) {
            setAuth(true);
        }
    };

    React.useEffect(()=>{
        readCookie();
    },[]);

    return (

        <AuthApi.Provider value={{auth,setAuth}}>
                <Router>
                  <Routes/>
                </Router>
        </AuthApi.Provider>
    )
}



const Routes = () => {
    const Auth = React.useContext(AuthApi);
  return(
      <Switch>
        <ProtectedLogin path={"/login"} auth={Auth.auth} component={Login}/>
        <ProtectedRoute path={"/home"} auth={Auth.auth} component={Home}/>
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
                    <Redirect to={'/login'}/>
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
                    <Redirect to={'/home'}/>
                )
            }/>
    )
};

