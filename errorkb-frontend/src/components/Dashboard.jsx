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
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 250,
        },
    },
}));

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

var request = require('superagent');



export default function Dashboard() {

    const [cookies, setCookie, removeCookie] = useCookies(['rights']);
    const [state, setState] = React.useState({
        columns: [
            { title: 'ID', field: 'id' ,editable:'never'},
            { title: 'Status', field: 'status',lookup:{open:'open',closed:'closed'} },
            { title: 'Title', field: 'title' },
            { title: 'Description', field: 'desc' },
            { title: 'Assigned user', field: 'user' },
            { title: 'Creation date', field: 'date',editable:"never" ,type:'datetime'},
            { title: 'Solution', field: 'solution' },
        ],
        data: [

        ],
    });

    const getEntries = async() => {

        const url = "http://localhost/errorkb/api/GetAllEntries";
        const response = await fetch(url);
        const entrydata = await response.json();
        for(let i = 0 ; i < entrydata.length; i++){
            new Promise(resolve => {
                {resolve();
                    setState(prevState => {
                        const data = [...prevState.data];
                        data.push({id:entrydata[i].id,status:entrydata[i].status,title:entrydata[i].title,desc:entrydata[i].description.slice(0,50),user:entrydata[i].user,date:entrydata[i].timestamp,solution:entrydata[i].solution});
                        return { ...prevState, data };
                    });
                }
            })
        }
    }
    useEffect(()=>{
        getEntries();
    },[]);

        return(
            <MaterialTable
                title="Entries"
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
                                    try{
                                    if(newData.status != "open" && newData.status != "closed") {
                                        newData.status = "open"
                                    }
                                    if(newData.status == "open" && newData.solution!= null){
                                        newData.solution = null;
                                        alert("Warning: You can only provide a solution to a closed entry. The solution gets deleted. The entry is added.");
                                    }
                                    if(newData.timestamp != null){
                                        alert("Timestamp not valid");
                                        return { ...prevState, data };
                                    }
                                    if(newData.user == null){
                                        alert("Assign this entry to an user!");
                                        return { ...prevState, data };
                                    }
                                    if(newData.status == "closed" && newData.solution == null){
                                        alert("Error: You wanted to close this entry but did not provide any solution");
                                        return { ...prevState, data };
                                    }
                                    if(newData.title == null || newData.desc == null){
                                        alert("Please give this entry a title and a description");
                                        return { ...prevState, data };
                                    }
                                    if(newData.id != null){
                                        alert("Error: Invalid ID");
                                        return { ...prevState, data };
                                    }
                                    const url = "http://localhost/errorkb/api/PostNewEntry/?tit="+newData.title+"&desc="+newData.desc+"&stat="+newData.status+"&username="+newData.user+"&solution="+newData.solution;

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
                                            try{

                                                if(newData.status != "open" && newData.status != "closed") {
                                                    newData.status = "open"
                                                }
                                                if(newData.status == "open" && newData.solution!= null){
                                                    newData.solution = null;
                                                    alert("Warning: You can only provide a solution to a closed entry. The solution gets deleted. The entry is added.");
                                                }
                                                if(newData.timestamp != null){
                                                    alert("Timestamp not valid");
                                                    return { ...prevState, data };
                                                }
                                                if(newData.user == null){
                                                    alert("Assign this entry to an user!");
                                                    return { ...prevState, data };
                                                }
                                                if(newData.status == "closed" && newData.solution == null){
                                                    alert("Error: You wanted to close this entry but did not provide any solution");
                                                    return { ...prevState, data };
                                                }
                                                if(newData.title == null || newData.desc == null){
                                                    alert("Please give this entry a title and a description");
                                                    return { ...prevState, data };
                                                }
                                                if(newData.id != oldData.id){
                                                    alert("Error: Invalid ID");
                                                    return { ...prevState, data };
                                                }
                                            const url = "http://localhost/errorkb/api/PutNewEntry/?id="+ oldData.id+"&tit="+newData.title+"&desc="+newData.desc+"&stat="+newData.status+"&username="+newData.user+"&solution="+newData.solution;

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
                                    const url = "http://localhost/errorkb/Api/DeleteEntry?id="+oldData.id;
                                    try{
                                        if(cookies.rights == "admin"){
                                            const response = await request('DELETE',url);
                                            if(response.statusCode==200){
                                                data.splice(data.indexOf(oldData), 1);
                                                return { ...prevState, data };
                                            }
                                        }
                                        else{
                                            alert("Insufficient permissions");
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
