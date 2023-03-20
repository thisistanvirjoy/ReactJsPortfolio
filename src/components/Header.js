import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button component={RouterLink} to="/" color="inherit">
          Home
        </Button>
        <Button component={RouterLink} to="/portfolio" color="inherit">
          Portfolio
        </Button>
        <Button component={RouterLink} to="/about" color="inherit">
          About
        </Button>
        <Button component={RouterLink} to="/resume" color="inherit">
          Resume
        </Button>
        <Button component={RouterLink} to="/contact" color="inherit">
          Contact
        </Button>
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
