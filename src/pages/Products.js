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
    {field: 'img', headerName: 'Image', width: 120},
    {field: 'product', headerName: 'Product', width: 220},
    {field: 'status', headerName: 'Status', width: 200},
    {field: 'inventory', headerName: 'Inventory', width: 200},
    {field: 'category', headerName: 'Category', width: 200},
    {field: 'vendor', headerName: 'Vendor', width: 200},
      
];

const rows = [
    {
        id: 1, image: "", product:"Cantu shampoo", status: "active", inventory: "40 in stock", category: "Beauty",
        vendor: "Cantu",
    },
    {
        id: 2, image: "", product:"Cantu shampoo", status: "active", inventory: "40 in stock", category: "Beauty",
        vendor: "Cantu",
    },
    {
        id: 3, image: "", product:"Cantu shampoo", status: "active", inventory: "40 in stock", category: "Beauty",
        vendor: "Cantu",
    },
    {
        id: 4, image: "", product:"Cantu shampoo", status: "active", inventory: "40 in stock", category: "Beauty",
        vendor: "Cantu",
    },
    {
        id: 5, image: "", product:"Cantu shampoo", status: "active", inventory: "40 in stock", category: "Beauty",
        vendor: "Cantu",
    },
    {
        id: 6, image: "", product:"Cantu shampoo", status: "active", inventory: "40 in stock", category: "Beauty",
        vendor: "Cantu",
    },
    {
        id: 7, image: "", product:"Cantu shampoo", status: "active", inventory: "40 in stock", category: "Beauty",
        vendor: "Cantu",
    },
];

const Products = ()=> {
    return(
        <div>
        <Topdisplay> 
            <Typography variant="h6" color="white">
                Products   Export  More actions   Add product
            </Typography>               
        </Topdisplay>
        <MiddleDisplay>
            <Typography>
                All   Active   Draft    Archived 
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

export default Products;
