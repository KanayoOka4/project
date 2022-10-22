import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";


const SidebarFile = styled(Link)`
    display: flex;
    //background-color:#806543;
    background-color:#06283D
    justify-content: space-between;
    align-items: center;
    padding: 1px 20px;
    list-styles: none;
    height: 75px;
    text-decoration: none;
    font-size: 18px;
    color: white;

    &:hover {
        background-color: #06283D;
        cursor: pointer;                
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    // background-color:#806543;
    height: 50px;
    padding-left: 3rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #f5f5f5;
    font-size: 18px;
    justify-content: space-between;

    &:hover {
        background-color:#06283D;
        cursor: pointer;        
    }

`;


const Submenu = ({item}) => {

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return(
        <>
         <SidebarFile to={item.path} onClick={item.subNav && showSubnav}>
            <div>
               <SidebarLabel>  {item.title} </SidebarLabel>
            </div>
            <div>
                {item.subNav && subnav 
                ? item.iconOpened 
                : item.subNav 
                ? item.iconClosed
                : null}
            </div>
        </SidebarFile>
        {subnav && item.subNav.map((item, index) => {
            return(
                <DropdownLink to={item.path} key={index}>
                    <SidebarLabel> {item.title} </SidebarLabel>
                </DropdownLink>
            );
        })}
        </>    
    );
};

export default Submenu;