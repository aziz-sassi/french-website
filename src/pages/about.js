import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import {Navbar} from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/infoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/infoSection/data';
import Footer from '../components/Footer';



function About() {
    const [isOpen , setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }
    return (
        <>
             <Sidebar isOpen={isOpen}  toggle = {toggle}/>
            <Navbar toggle={toggle}/>
            <InfoSection {...homeObjOne}/>
            <Footer/>

        </>
    )
}

export default About
