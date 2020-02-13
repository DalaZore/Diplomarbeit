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
    const [username, setUsername] = useState('');
    const [password,setPassword]= useState('');
    const Auth = React.useContext(AuthApi);

    const handleOnClick=async()=>{
        const url = "http://localhost/errorkb/api/user/"+username;
        const response = await fetch(url);
        const data = await response.json();
        if (data[0].username == username && data[0].passwd == password){
            Auth.setAuth(true);
            setCookie(username,"LoginTrue")
        }
        else{
            alert("Wrong credentials")
        }
    }


    const classes = useStyles();

    return (

        <form className={classes.root} noValidate autoComplete="off">

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:'100px',
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
                paddingTop:'10px',
                paddingLeft:'10px',
            }}>
                <Grid container spacing={4}>
                    <Grid item xs={5} sm={5}/>

                    <Grid item xs={8} sm={6}>
                    <Button onClick={handleOnClick} className={classes.root} style={{width:'255px'}} variant="outlined" color="Primary">
                        Login
                    </Button>
                    <Grid item xs={5}/>
                </Grid>
                </Grid>

            </div>
        </form>
    );
}
