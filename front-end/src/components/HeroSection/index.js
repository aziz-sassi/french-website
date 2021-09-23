import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {HeroContainer,HeroBg, VideoBg , HeroContent , HeroH1 , HeroP , HeroBtnWrapper , ArrowForward , ArrowRight } from './HeroElements';
import {Button} from '../ButtonElements';

const HeroSection = () => {
    const [hover , setHover] = useState(false);
    const onHover = ()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src ={Video} type = 'video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                Tous vos déplacements au meilleur prix.
                </HeroH1>
                <HeroP>
                Indiquez votre destination, confirmez votre course, rencontrez votre chauffeur et profitez du trajet !
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='reservation' onMouseEnter = {onHover} onMouseLeave = {onHover}
                    primary = "true"
                    dark = "true"
                    smooth = {true} duration = {500} spy={true} exact = 'true' offset = {-80} activeClass='active'
                    >
                    réservez maintenant {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
