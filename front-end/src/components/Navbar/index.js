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
                <NavLinks to='/' smooth = {true} duration = {500} spy={true} exact = 'true' offset = {-80} activeClass='active'  onClick = {toggleHome} >
                    Home</NavLinks>
                </NavItem>
        <NavItem>
                <NavLinks to='about' smooth = {true} duration = {500} spy={true} exact = 'true' offset = {-80} activeClass='active'>
                    About</NavLinks>
                </NavItem>
         
            <NavItem>
                <NavLinks to='reservation' smooth = {true} duration = {500} spy={true} exact = 'true' offset = {-80} activeClass='active'>Reservation</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='services' smooth = {true} duration = {500} spy={true} exact = 'true' offset = {-80} activeClass='active'>Nos Offres</NavLinks>
            </NavItem>
            </NavMenu>
            <NavBtn>
              
            </NavBtn>
      
        </NavbarContainer>
</Nav>
</>
    )
}

