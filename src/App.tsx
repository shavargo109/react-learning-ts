import React, { useState } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { Button, Box, AppBar, Toolbar, IconButton, Typography, Icon } from '@mui/material';
import { Menu } from "./components/MenuComponent";
import MenuIcon from '@mui/icons-material/Menu';
import { DISHES,TData } from './shared/dishes';

function App() {
  const [state, setState] = useState(
    DISHES
  );
  return (
    <div>
      {/* <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar> */}
      <MenuBar />
      <Menu dishes={state}/>
    </div >
  );
}
function MenuBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
export default App;
