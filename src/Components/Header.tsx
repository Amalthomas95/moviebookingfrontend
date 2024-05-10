import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Tabs, Tab } from '@mui/material';
import TheatersIcon from '@mui/icons-material/Theaters';
import { Link } from 'react-router-dom';

function Header() {
  const [hoveredTab, setHoveredTab] = useState(-1);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    setHoveredTab(selectedTab);
  }, [selectedTab]);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333333' }}>
      <Toolbar>
        <Box width={'20%'}>
          <TheatersIcon /> 
          My Ticket
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Tabs 
          textColor='inherit' 
          indicatorColor="secondary" 
          value={selectedTab} 
          onChange={(event, newValue) => setSelectedTab(newValue)}
        >
          <Tab 
            label="Home" 
            component={Link} 
            to="/" 
            sx={{ color: 'white', '&:hover': { color: 'red' } }}
            onMouseEnter={() => setHoveredTab(0)}
            onMouseLeave={() => setHoveredTab(-1)}
          />
          <Tab 
            label="User" 
            component={Link} 
            to="/Login" 
            sx={{ color: 'white', '&:hover': { color: 'blue' } }}
            onMouseEnter={() => setHoveredTab(1)}
            onMouseLeave={() => setHoveredTab(-1)}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
