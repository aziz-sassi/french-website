import React from 'react'
import {ServicesContainer , ServicesWrapper, ServicesH1, ServicesCard , ServicesIcon ,  ServicesH2 , ServicesP} from './ServicesElements';
import Icon1 from '../../images/svg1.svg';
import Icon2 from '../../images/svg-4.svg';
import Icon3 from '../../images/svg-6.svg';
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Nos Offres</ServicesH1>
            <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>point A vers point B</ServicesH2>
                <ServicesP>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>point C vers point D</ServicesH2>
                <ServicesP>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>point F vers point G</ServicesH2>
                <ServicesP>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </ServicesP>
            </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
