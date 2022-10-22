import * as React from "react";
import styled from "styled-components";
import { Box, alpha, Typography, AppBar, InputBase, CssBaseline, Toolbar } from "@mui/material";
//import SearchIcon from "@mui/icons-material";
//import {SearchIcon} from "@mui/icons-material/Search";
//import Logo from "./Logo.png";



// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 20),
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('md')]: {
//           width: '60ch',
//       },
//   },
// }));

// export default function Navbar() {
//     return(

//   <>
//     <CssBaseline />
//     <AppBar position="static">
//       <Toolbar variant="dense">
//         <Typography component="div">
//           <img src={logo} alt="logo" />
//         </Typography>
//       <Typography variant="h5">
//         Spicy
//         </Typography> 
//         <Search>
//           <SearchIconWrapper>
          
//           </SearchIconWrapper>
//           <StyledInputBase
//           placeholder="Search...."
//           inputProps={{ 'aria-label' : 'search'}}          
//           />
//         </Search>

//       </Toolbar>   
//     </AppBar>
//     </>


        // <Box sx={{ flexGrow: 1}}>
        //     <AppBar position="static">
        //         <Toolbar>
        //             <Typography
        //             variant="h6"
        //             noWrap
        //             component="div"
        //             sx={{ flexGrow: 1, display: { xs: "none", sm: "block"}}}
        //             >
        //                 Spicy 
        //             </Typography>
        //             <SearchIconWrapper>
                        
        //             </SearchIconWrapper>
        //             <StyledInputBase placeholder="Search" inputProps={{'aria-label' : "search"}}/>
        //         </Toolbar>
        //     </AppBar>
        // </Box>
//     );
// }

const Nav = styled.div`
background-color: black;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;


export default Nav;
