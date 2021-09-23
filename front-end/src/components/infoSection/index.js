import React from 'react';
import {Button} from '../ButtonElements';
import {InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper , TopLine, Heading, Subtitle, BtnWrap, Column2 , ImgWrap ,  Img } from './infoElements';

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,darkText,description,buttonLabel,img,alt,heading,headline, primary, dark , dark2 }) => {
    return (
        <>
         <InfoContainer lightBg ={lightBg} id = {id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                      <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <Subtitle darkText={darkText}>{description}</Subtitle>
                          <BtnWrap>
                         
                          </BtnWrap>
                      </TextWrapper>
                      </Column1>
                      <Column2>
                      <ImgWrap>
                      <Img src={img} alt={alt}/>
                      </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>

             
        </InfoContainer>  
        </>
    )
}

export default InfoSection
