import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AuthApi from "./AuthApi";
import { useCookies } from 'react-cookie';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 250,
        },
    },
}));

export default function Login() {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const pathStart = window.location.protocol + "//" + window.location.host;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const Auth = React.useContext(AuthApi);


    const handleOnClick = async () => {
        if(password==null){
            setPassword("");
        }
        if(username==null){
            setUsername("");
        }
        const url = pathStart + ":8080/errorkb/api/GetUser/?username=" + username+"&password="+password;
        const response = await fetch(url);
        console.log(url);
        try{
            const data = await response.json();
            if(response.status==200){
                Auth.setAuth(true);
                setCookie("user", data[0].username);
                setCookie("rights", data[0].privileges);
            }
        }
        catch{
            alert("wrong credentials");
        }
        finally{

        }

        console.log(response);


    }




        const classes = useStyles();

        return (

            <form className={classes.root} noValidate autoComplete="off">

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '100px',
                }}>
                    <Grid container spacing={4}>
                        <Grid item xs={5} sm={5}/>
                        <Grid item xs={9} sm={5}>
                            <TextField
                                id="standard-username-input"
                                label="Username"
                                type="text"
                                autoComplete="current-username"
                                value={username}
                                onChange={
                                    (e) => {
                                        setUsername(e.target.value);
                                    }}
                            />
                        </Grid>

                    </Grid>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Grid container spacing={4}>
                        <Grid item xs={5} sm={5}/>
                        <Grid item xs={9} sm={5}>
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={
                                    (e) => {
                                        setPassword(e.target.value)
                                    }}
                            />
                            <Grid item xs={5}/>
                        </Grid>
                    </Grid>

                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '10px',
                    paddingLeft: '10px',
                }}>
                    <Grid container spacing={4}>
                        <Grid item xs={5} sm={5}/>

                        <Grid item xs={8} sm={6}>
                            <Button onClick={handleOnClick} className={classes.root} style={{width: '255px'}}
                                    variant="outlined" color="Primary">
                                Login
                            </Button>
                            <Grid item xs={5}/>
                        </Grid>
                    </Grid>

                </div>
            </form>
        );
    }
