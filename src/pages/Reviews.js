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
    {field: 'id', headerName: 'id', width: 100},
    {field: 'title', headerName: 'Title', width: 200},
    {field: 'customer', headerName: 'Customer', width: 250},
    {field: 'product', headerName: 'Product', width: 220},
    {field: 'rating', headerName: 'Rating', width: 150},
    {field: 'order', headerName: 'Order', width: 200},
      
];


const rows = [
    {
        id: 1, title: "Excellent product" , customer: "Anne Marie", product: "Cantu shampoo" , rating: "5 stars", order: "#0001106",
    },
    {
        id: 2, title: "Excellent product" , customer: "Anne Marie", product: "Cantu shampoo" , rating: "5 stars", order: "#0001106",
    },
    {
        id: 3, title: "Excellent product" , customer: "Anne Marie", product: "Cantu shampoo" , rating: "5 stars", order: "#0001106",
    },
    {
        id: 4, title: "Excellent product" , customer: "Anne Marie", product: "Cantu shampoo" , rating: "5 stars", order: "#0001106",
    },
    {
        id: 5, title: "Excellent product" , customer: "Anne Marie", product: "Cantu shampoo" , rating: "5 stars", order: "#0001106",
    },
    {
        id: 6, title: "Excellent product" , customer: "Anne Marie", product: "Cantu shampoo" , rating: "5 stars", order: "#0001106",
    },
    {
        id: 7, title: "Excellent product" , customer: "Anne Marie", product: "Cantu shampoo" , rating: "5 stars", order: "#0001106",
    },
];

const Reviews = ()=> {
    return(
        <div>
        <Topdisplay> 
            <Typography variant="h6" color="white">
                Reviews   Export  More actions   Add product
            </Typography>               
        </Topdisplay>
        <MiddleDisplay>
            <Typography>
                All   Approved   Pending    Archived 
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

export default Reviews;