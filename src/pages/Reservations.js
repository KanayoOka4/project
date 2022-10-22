import * as React from "react";
import {DataGrid, GridColDef } from "@mui/x-data-grid";
import styled from "styled-components";
import { Typography } from "@mui/material";

const Topdisplay = styled.div`
    background-color: black;
    height: 50px;

`;

const MiddleDisplay = styled.div`
    //background-color: #806543;
    height: 100px;
`;

const columns: GridColDef[] = [
    {field: 'id', headerName: 'id', width: 70},
    {field: 'reservation', headerName: 'Reservation', width: 180},
    {field: 'client', headerName: 'Client', width: 200},
    {field: 'date', headerName: 'Date', width: 200},
    {field: 'start_time', headerName: 'Start time', width: 130},
    {field: 'end_time', headerName: 'End time', width: 130},
    {field: 'deposit', headerName: 'Deposit', width: 130},
    {field: 'type', headerName: 'Type', width: 190},      
];

const rows = [
    {
        id: 1, reservation: "#0001104", client:"Anne Marie", date:"2022/08/12", start_time: "15:30", end_time: "18:30", deposit: "paid",
        type: "Braids",
    },
    {
        id: 2,  reservation: "#0001104", client:"Anne Marie", date:"2022/08/12", start_time: "15:30", end_time: "18:30", deposit: "paid",
        type: "Braids",
    },
    {
        id: 3,  reservation: "#0001104", client:"Anne Marie", date:"2022/08/12", start_time: "15:30", end_time: "18:30", deposit: "paid",
        type: "Braids",
    },
    {
        id: 4,  reservation: "#0001104", client:"Anne Marie", date:"2022/08/12", start_time: "15:30", end_time: "18:30", deposit: "paid",
        type: "Braids",
    },
    {
        id: 5,  reservation: "#0001104", client:"Anne Marie", date:"2022/08/12", start_time: "15:30", end_time: "18:30", deposit: "paid",
        type: "Braids",
    },
    {
        id: 6,  reservation: "#0001104", client:"Anne Marie", date:"2022/08/12", start_time: "15:30", end_time: "18:30", deposit: "paid",
        type: "Braids",
    },
    {
        id: 7,  reservation: "#0001104", client:"Anne Marie", date:"2022/08/12", start_time: "15:30", end_time: "18:30", deposit: "paid",
        type: "Braids",
    },
];
const Reservations = ()=> {
    return(
        <div>
        <Topdisplay> 
            <Typography variant="h6" color="white">
                Reservations   Export  More actions   Add product
            </Typography>               
        </Topdisplay>
        <MiddleDisplay>
            <Typography>
                All   Approved   Pending     Archived 
            </Typography>
        </MiddleDisplay>
        <div style={{ color: 806543, height: 700, width: '100%'}}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
             />
        </div>
        </div>
    );
};

export default Reservations;
