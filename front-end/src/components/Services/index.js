import React from 'react'
import {ServicesContainer , ServicesWrapper,Img, ServicesH1, ServicesCard , ServicesIcon ,  ServicesH2 , ServicesP} from './ServicesElements';
import Icon1 from '../../images/svg1.svg';
import Icon2 from '../../images/svg-4.svg';
import Icon3 from '../../images/svg-6.svg';
import image from '../../images/offres2.jpg';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Nos Offres</ServicesH1>
    <Img src={image}/>
        </ServicesContainer>
    )
}

export default Services
