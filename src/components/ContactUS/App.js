import react , {useState} from 'react'
import './App.css';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';
import { Container, makeStyles } from '@material-ui/core';
import { color } from '@mui/system';
import { motion } from "framer-motion"
import AnimatedText from './AnimatedText'

const styles = makeStyles(theme => ({
  textField: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',            
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
      color: 'white',
  },
  innput: {
      // backgroundColor: 'white',
      color: 'white',
      width: '80%',
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "yellow !important"
  }
}));

function App() {

  const [mail, setmail] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleMail = (e) => {
    setmail({ ...mail, [e.target.name]: e.target.value });
    console.log(e.target)
  }
  const sendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ec06idv', 'template_j6k88u9', e.target, 'user_ZS3V2jmIlO8mYDvmRJZX5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  const classes = styles();

  const placeholderText = [
    { type: "heading1", text: "We are at your service! Contact Us ;)" },
    // {
    //   type: "heading2",
    //   text: "Animating responsive text!"
    // }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  

  return (
    <div className="App">
      <motion.div
      initial="hidden"
      // animate="visible"
      animate={"visible"}
      variants={container}
      >
    <h1>
    {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
      })}
    
      
    </h1>
    </motion.div>

    {/* <img src={'./assets/Down.svg'} alt='down'/> */}

    <div className='map-mail-box'>

      <div className='mail-box'>

      <form type='submit' action="/" onSubmit={sendMail}>

      <h3>
        First Name
      </h3>
      <TextField id="outlined-name" 
        // label="First Name" 
        // variant="standard" 
        // color="rgb(0, 217, 255)"
        // color="success"
        focused
        // color="warning"
        className={classes.innput}
        InputProps={{
          style: {
              color: "rgb(0, 252, 197)"
          },
          notchedOutline: classes.notchedOutline
      }}
      type="name"
       name = 'name'
       value = {mail.name}
       onChange={handleMail}
      />

      <h3>
       Email
      </h3>
      <TextField id="outlined-name" 
        // label="First Name" 
        // variant="standard" 
        // color="rgb(0, 217, 255)"
        // color="success"
        focused
        // color="warning"
        className={classes.innput}
        InputProps={{
          style: {
              color: "rgb(0, 252, 197)"
          },
          notchedOutline: classes.notchedOutline
      }}
      type="email"
      name = 'email'
      value = {mail.email}
      onChange={handleMail}
      />

      <h3>
        Message
      </h3>

      <TextField
      id="outlined-multiline-static"
      // label="Multiline"
      multiline
      focused
      rows={4}
      // defaultValue="Default Value"
      // color="warning"
      className={classes.innput}
      InputProps={{
          style: {
              color: "rgb(0, 252, 197)"
         },
         notchedOutline: classes.notchedOutline
      }}
      type="text"
      name = 'message'
      value = {mail.message}
      onChange={handleMail}
        />

<div >
  <button className = 'form-button'>
    Envoyer
  </button>
</div>
      </form>
        
      
      </div>

    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className='iframe-box'
    >

    <iframe
              src="https://maps.google.com/maps?q=nice&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="85%"
              height="450"
              // className={}
              frameBorder="0"
              style={{border:"0", "filter" : "invert(95%)"}}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title='my-mapp'
            />
    </motion.div>
    </div>
      
    </div>
  );
}

export default App;
