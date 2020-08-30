import React from 'react'
import Box from '@material-ui/core/Box';
import 'fontsource-roboto';
import { Links, Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div style={{ maxWidth: '1200px', width: '60%', margin: 'auto' }}>
      <Box borderRadius={8} fontWeight={600} color="#616161" fontFamily="roboto" display="flex" p={0.5} bgcolor="#eeeeee">

        <Box justifyContent="center" style={{ margin: 'auto' }} display="flex" p={1} >
          <Link  className="links" to="/infok">
            {"Infók"}
          </Link>
        </Box>

        <Box justifyContent="center" style={{ margin: 'auto' }} display="flex" p={1} >
          <Link className="links" to="/szolgaltatasok">
            {"Szolgáltatások"}
          </Link>
        </Box>

        <Box justifyContent="center" style={{ margin: 'auto' }} display="flex" p={1} >
          <Link className="links" to="/arak">
            {"Árak"}
          </Link>
        </Box>

        <Box justifyContent="center" style={{ margin: 'auto' }} display="flex" p={1} >
          <Link className="links" to="/hirek">
            {"Hírek"}
          </Link>
        </Box>

        <Box justifyContent="center" style={{ margin: 'auto' }} display="flex" p={1} >
          <Link className="links" to="/vendeglatas">
            {"Vendéglátás"}
          </Link>
        </Box>

        <Box justifyContent="center" style={{ margin: 'auto' }} display="flex" p={1} >
          <Link className="links" to="/rolunk">
            {"Rólunk"}
          </Link>
        </Box>

        <Box justifyContent="center" style={{ margin: 'auto' }} display="flex" p={1} >
          <Link className="links" to="/belepes">
            {"Belépés/Regisztráció"}
          </Link>
        </Box>

      </Box>
    </div>
  )
}

export default Navigation