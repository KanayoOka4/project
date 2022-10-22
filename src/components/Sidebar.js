import React from 'react';
import styled from "styled-components";
import  SidebarData from './SidebarData';
import Submenu from './Submenu';

const SidebarNavv = styled.nav`
    background:#15171c;
    width: 250px;
    float: left;
    height: 100%;
    overflow: hidden;  
`;

const SidebarWrap = styled.nav`   
`;

const Sidebar = () => {
    return(
        <>        
            <SidebarNavv>
                <SidebarWrap> 
                    {SidebarData.map((item, index) => {
                        return<Submenu item={item} key={index} />
                    })}
                </SidebarWrap>
            </SidebarNavv>
        </>
    );
}
export default Sidebar;