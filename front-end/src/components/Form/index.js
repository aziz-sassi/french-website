import React, {useState} from 'react';
import "./Form.css"
import {Button} from '../ButtonElements';
import {InfoContainer,InfoWrapper,Heading, InfoRow, Column1, TextWrapper , BtnWrap, Column2 , ImgWrap , Subtitle, Img } from './FormElements';
import TimePicker from 'react-time-picker';




const Form = ({lightBg,id,imgStart,topLine,lightText,darkText,description,buttonLabel,img,alt,heading,headline, primary, dark , dark2 }) => {
    const [missingInputs,setMissingInput] = useState(false);
    const [value, onChange] = useState('10:00');
    const [success,setsuccess] = useState(false);
    const [formData, setformData] = useState({
        name: "",
        phoneNumber: "",
        startAdress : "",
        endAdress : "",
        
      });
    
      const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData, e.target.value);
   
      };
    

    const submitInfos = ()=>{
if (formData.name === "" || formData.phoneNumber ==="") {
    setMissingInput(true)
}else if(formData.name !== " " && formData.phoneNumber !==" "){
    setsuccess(true);

}
    }
    




    return (
        <>
         <InfoContainer lightBg ={lightBg} id = {id}>
                  <InfoWrapper>
                      <InfoRow imgStart={imgStart}>
                      <Column1>
                          
                          <TextWrapper>
                        
                                <div className="main-block">
    
          {!success ? (
                 
                 
          <form action="/">
            <div className="title">
              <h2>Réservez Maintenant</h2>
            </div>
            <div className="info">
              <input className="fname" type="text" name="name" placeholder="Full name" onChange ={handleChange}/>
              <input type="text" name="phoneNumber" placeholder="Phone number" onChange ={handleChange}/>
           
                <div className="tripData">
                <input  type="text" name="startAdress" placeholder="Start Adress" onChange ={handleChange} />
                <input  type="text" name="endAdress" placeholder="end Adress" onChange ={handleChange} />
            
                <TimePicker
        onChange={onChange}
        value={value}
      />{console.log(value)}
                 <div>
  
  
               
                 
                </div>
               </div>
            </div>
            <div className="checkbox">
                
            </div>
           {missingInputs? (<p className ="missingInputs">please make sure to fill all inputs</p>) : <></>}
            <BtnWrap>
                                  <Button 
                                  onClick={submitInfos}
                                  className='mybtn' 
                                  type='submit'
                                  smooth={true}
                                  duration={500}
                                  spy={true}
                                  exact="true"
                                  offset={-80}
                                  primary = {primary ? 1 : 0}
                                  dark={dark ? 1 : 0}
                                  dark2={dark2 ? 1 : 0}
                                  >confirmer</Button>
                              </BtnWrap>
          </form>


          ) : (
              <div>
            <div className="container">
            <div className="content">
              <Heading lightText={lightText} >thank you for your reservation</Heading >
              <Subtitle darkText={darkText}>our team will contact you ASAP to confirm your reservation</Subtitle>
            </div>
            <div className="flap"></div>
          </div>
          </div>
          )}
          </div>
    
                         
                 
           
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

export default Form
