import React, {useState , useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav,NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';
import { Button } from 'react-bootstrap';



export const Navbar = ( { toggle }) => {

    const [scrollNav,setScrollNav] = useState(false);
    
    const changeNav = ()=>{
        if(window.scrollY >= 80){
            setScrollNav(true);
        }
        else{
            setScrollNav(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", changeNav);
    }, []);


    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
<>
<Nav scrollNav={scrollNav}>
    <NavbarContainer>
        
        <NavLogo to='/' onClick = {toggleHome}>dolla</NavLogo>
        <MobileIcon onClick = {toggle} >
            <FaBars/>

        </MobileIcon>
        <NavMenu>
        <NavItem>
                <NavBtnLink to='/' smooth = {true} duration = {500} spy={true} exact = 'true' offset = {-80} activeClass='active'  onClick = {toggleHome} >
                    Home</NavBtnLink>
                </NavItem>
        <NavItem>
        <NavBtnLink to= "about">About</NavBtnLink>
                </NavItem>
         
            <NavItem>
            <NavBtnLink to= "services">Services</NavBtnLink>
                </NavItem>
            <NavItem>
            <NavBtnLink to= "contactus">Contact Us</NavBtnLink>
                </NavItem>
            <NavItem class>
            </NavItem>
            </NavMenu>
          
            <NavBtn>
            <NavLinks><h1 style={{color: '#01bf71'}}><b>06 61 58 58 85</b></h1></NavLinks>

            </NavBtn>
            
        </NavbarContainer>
</Nav>
</>
    )
}

