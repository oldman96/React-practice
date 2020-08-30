import React from 'react'
import Box from '@material-ui/core/Box';
import 'fontsource-roboto';
import header1 from '../pictures/header1.jpg';
import header2 from '../pictures/header2.jpg';

function Header() {
  return (
    <div >
      <img height= "300px"  display="flex" src={header1} alt="Header1" />
      <img height= "300px"  display="flex" src={header2} alt="Header2" />
    </div>

    
  )
}

export default Header