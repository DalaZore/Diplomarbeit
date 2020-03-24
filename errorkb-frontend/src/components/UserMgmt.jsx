import React, {Component, useEffect} from 'react';
import '../App.css';
import {useCookies} from "react-cookie";
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


export default function UserMgmt() {
    var request = require('superagent');
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [isAdm,setAdm] = React.useState(false);
    const [isLoggedIn,setLoggedIn] = React.useState(false);

    const [state, setState] = React.useState({
        columns: [
            { title: 'Username', field: 'username' },
            { title: 'Password', field: 'password'},
            { title: 'Privileges', field: 'priv' },
        ],
        data: [

        ],
    });

    const getUsers = async() => {

        const url = "http://localhost/errorkb/api/user";
        const response = await fetch(url);
        const userdata = await response.json();
        for(let i = 0 ; i < userdata.length; i++){
            new Promise(resolve => {
                {resolve();
                    setState(prevState => {
                        const data = [...prevState.data];
                        data.push({username:userdata[i].username,password:userdata[i].passwd,priv:userdata[i].privileges});
                        return { ...prevState, data };
                    });
                }
            })
        }
        console.log("test")
    }


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
    const readCookieRights=()=>{
        const rights = cookies.rights
        if (rights == 'admin') {
        }
        else{
            window.location="/";
        }
    }
    useEffect(()=>{
        getUsers();
        readCookieUser();
        readCookieRights();
    },[]);
    return (

        <MaterialTable
            title="User Management"
            columns={state.columns}
            data={state.data}
            icons={tableIcons}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(async prevState => {
                                const data = [...prevState.data];
                                const url = "http://localhost/errorkb/api/PostNewUser/?username="+newData.username+"&password="+newData.password+"&priv="+newData.priv;
                                try{
                                    const response = await request('POST',url);
                                    if(response.statusCode==200){
                                        data.push(newData);
                                        return { ...prevState, data };
                                    }
                                }
                                catch(error){
                                    alert(error.message)
                                    return { ...prevState, data };
                                }
                                finally{
                                    window.location.reload();
                                }
                            })
                        }, 600);
                    }),
                onRowUpdate:
                    (newData, oldData) =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    if (oldData) {
                                        console.log(oldData.username);
                                        console.log(newData);
                                        setState(async prevState => {
                                            const data = [...prevState.data];
                                            const url = "http://localhost/errorkb/api/PutNewUser/?oldUsername="+ oldData.username+"&oldPassword="+oldData.password+"&newUsername="+newData.username+"&newPassword="+newData.password+"&newPriv="+newData.priv;
                                            try{
                                                const response = await request('PUT',url);
                                                if(response.statusCode==200){
                                                    data[data.indexOf(oldData)] = newData;
                                                    return { ...prevState, data };
                                                }
                                            }
                                            catch(error){
                                                alert(error.message)
                                                return { ...prevState, data };
                                            }
                                            finally{
                                                window.location.reload();
                                            }
                                        })
                                    }
                                }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(async prevState => {
                                const data = [...prevState.data];
                                const url = "http://localhost/errorkb/Api/DeleteUser?username="+oldData.username;
                                try{
                                    const response = await request('DELETE',url);
                                    if(response.statusCode==200){
                                        data.splice(data.indexOf(oldData), 1);
                                        return { ...prevState, data };
                                    }
                                }
                                catch(error){
                                    alert(error.message)
                                    return { ...prevState, data };
                                }
                                finally{
                                    window.location.reload();
                                }
                            });
                        }, 600);
                    }),
            }}
        />
    );
}


const style = {
    margin: 15,
};

