import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import {Navbar} from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/infoSection';
import Form from '../components/Form';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/infoSection/data';
import { formObj} from '../components/Form/data'
import Services from '../components/Services'
import Footer from '../components/Footer';
import SwipeButtons from '../components/Buttons/SwipeButtons';


const Home = () => {
    const [isOpen , setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle = {toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
           
            <Form {...formObj}/>
            <SwipeButtons/>

            <Footer />
        </>
    )
}

export default Home
