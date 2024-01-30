import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import AppleIcon from '@mui/icons-material/Apple';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useThemeContext } from './ThemeProvider';
import { styled } from '@mui/system';

// Remove border on click component
const IconButtonX = styled(IconButton)(({theme}) =>({
  '&:focus': { outline: 'none', },
}));
const ButtonX = styled(Button)(({theme}) =>({
  '&:focus': { outline: 'none', },
}));

export default function ResponsiveAppBar() {
  
  const pages = ['Productos', 'Nosotros', 'Login'];
  const { darkMode, toggleDarkMode } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState(null);

  // Event anchorEl
  const handleClick = (event) => setAnchorEl(event.currentTarget);

  // Close menu
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          
          {/* Desktop : Logo */}
          <AppleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            AppleShopMtz
          </Typography>
          
          {/* Desktop : Buttons */}
          <Box sx={{ flexGrow: 1, justifyContent: 'end', paddingRight:'3rem', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <ButtonX
                key={page}
                onClick={null}
                sx={{ my: 2, color: 'inherit', display: 'block',  paddingRight:'3rem'}}
              >
                {page}
              </ButtonX>
            ))}
            <IconButtonX onClick={toggleDarkMode} color='inherit' >
              { darkMode ? <DarkModeIcon/> : <LightModeIcon/>}
            </IconButtonX>
          </Box>

          {/* Responsive: Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButtonX
              size="large"
              onClick={handleClick}
              color="inherit"
            >
              <MenuIcon/>
            </IconButtonX>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={null}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Responsive: Logo */}
          <AppleIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            AppleShopMtz
          </Typography>

          {/* Responsive: Dark Mode */}
          <IconButtonX 
            onClick={toggleDarkMode} 
            color='inherit' 
            sx={{display: { xs: 'flex', md: 'none', }}}
          >
            { darkMode ? <DarkModeIcon/> : <LightModeIcon/>}
          </IconButtonX>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
