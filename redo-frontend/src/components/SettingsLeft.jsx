import React from 'react'
import Header from '../components/Header';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import changepwbutton from '../images/changepwbutton.png'
import logoutbutton from '../images/logoutbutton.png'

const SettingsLeft = () => {
  return (
    <div>
        <Header />
        <br />
        <Paper className="menu">
          <Typography variant="h3">General Setting</Typography>
          <br/>
          <Typography variant="h3">About</Typography>
          <br/>
          <Typography variant="h3">Help</Typography>
          <br/>
          <Typography variant="h3">Privacy</Typography>
        </ Paper>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <img src={changepwbutton} alt="change password" />

        <br />
        <br />
        <br />

        
        <a target="popup" href="http://127.0.0.1:3000/login_"><img src={logoutbutton} alt="tile" /> </a>

        {/* <img src={logoutbutton} alt="log out"/> */}


    </div>
  )
}

export default SettingsLeft