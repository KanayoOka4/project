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

const date = new Date();
//const currentTime = date.getHours();
const currentTime = date.getDate();

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'order', headerName: 'Order', width: 180},
    {field: 'date', headerName: 'Date', width: 150},
    {field: 'customer', headerName: 'Customer', width: 200},
    {field: 'total', headerName: 'Total', width: 150},
    {field: 'paymentMethod', headerName: 'Payment method', width: 130},
    {field: 'fulfilmentStatus', headerName: 'Fulfilment status', width: 130},
    {field: 'items', headerName: 'Items', width: 150},
    
];

const rows = [
    {
        id: 1, order: "0001106", date:"{currentTime}", customer: "Guest", total: " $32", paymentMethod: "visa",
        fulfilmentStatus: "in progress", items: "1 item",
    },
    {
        id: 2, order: "0001106", date: "{currentTime}", customer: "Guest", total: " $76", paymentMethod: "master card",
        fulfilmentStatus: "in progress", items: "1 item",
    },
    {
        id: 3, order: "0001106", date: "{currentTime}", customer: "Guest", total: " $76", paymentMethod: "master card",
        fulfilmentStatus: "in progress", items: "1 item",
    },
    {
        id: 4, order: "0001106", date: "{currentTime}", customer: "Guest", total: " $76", paymentMethod: "visa",
        fulfilmentStatus:"in progress", items: "1 item",
    },
    {
        id: 5, order: "0001106", date: "{currentTime}", customer: "Guest", total: " $76", paymentMethod: "visa",
        fulfilmentStatus:"in progress", items: "1 item",
    },
    {
        id: 6, order: "0001106", date: "{currentTime}", customer: "Guest", total: " $76", paymentMethod: "visa",
        fulfilmentStatus:"in progress", items: "1 item",
    },
    {
        id: 7, order: "0001106", date: "{currentTime}", customer: "Guest", total: " $76", paymentMethod: "master card",
        fulfilmentStatus:"in progress", items: "1 item",
    }
];

const Order = ()=> {
    return(
        <div>
            <Topdisplay> 
                <Typography variant="h6" color="white">
                    Orders   Export  More actions
                </Typography>               
            </Topdisplay>
            <MiddleDisplay>
                <Typography>
                    All   Unfilfilled   Shipped    Fulfilled 
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

export default Order;