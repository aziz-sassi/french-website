import React from 'react';
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu, SidebarLink , SideBtnWrap , SidebarRoute } from './SidebarElements';
import {animateScroll as scroll} from 'react-scroll';


const Sidebar = ({isOpen, toggle}) => {
    const toggleHome = () => {
        scroll.scrollToTop();
        toggle()
    }
    return (
        <SidebarContainer isOpen = {isOpen} onClick= {toggle}>
            <Icon  onClick= {toggle}> 
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink to="/" onClick = {toggleHome }>
                Home
                    </SidebarLink>
                    <SidebarLink to="about" onClick = {toggle}>
                    About
                    </SidebarLink>
                    <SidebarLink to="reservation" onClick = {toggle}>
                    Reservation
                    </SidebarLink>
                    <SidebarLink to="services" onClick = {toggle}>
                    Nos Offres
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                  
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
