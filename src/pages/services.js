import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import {Navbar} from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
import {InfoServices} from '../components/infoServices';
import { homeObjOne, homeObjThree, homeObjTwo ,homeObjFour, homeObjFive, homeObjSix} from '../components/infoServices/data';
import Pricing from '../components/Pricing/Pricing';
import Footer from '../components/Footer'

function Services() {
    const [isOpen , setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }
    return (
        <>
             <Sidebar isOpen={isOpen} toggle = {toggle}/>
            <Navbar toggle={toggle}/>
            {/* <HeroSection/> */}
            <InfoServices {...homeObjOne}/>
            <InfoServices {...homeObjTwo}/>
            <InfoServices {...homeObjThree}/>
            <InfoServices {...homeObjFour}/>
            <InfoServices {...homeObjFive}/>
            <InfoServices {...homeObjSix}/>
            <Footer/>

        </>
    )
}

export default Services
