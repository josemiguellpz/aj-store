import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import AppleIcon from '@mui/icons-material/Apple';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import DrawerBag from './DrawerBag';
import IconButton from '@mui/material/IconButton';
import Login from './Login';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCarIcon from '@mui/icons-material/ShoppingCart';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

/* TODO: Change Button */

/**
 * Custom styles for the IconButton and Button component.
 * Removes the border when the button is clicked.
 */
const IconButtonX = styled(IconButton)(({theme}) =>({
  '&:focus': { 
    outline: 'none', 
  },
}));

const ButtonX = styled(Button)(({theme}) =>({
  my: 2, 
  color: 'inherit', 
  display: 'block',  
  marginRight:'3rem',
  '&:focus': { 
    outline: 'none', 
  },
}));

export default function ResponsiveAppBar() {
  
  // Responsive Menu: Event anchorEl
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClickMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  // Navigate
  const [page, setPage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Modal
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => setModal(true);
  const handleCloseModal = () => setModal(false);

  // Drawer Bag: Right
  const [drawer, setDrawer] = useState(false);
  const handleOpenDrawer = () => setDrawer(true);
  const handleCloseDrawer = () => setDrawer(false);

  /**
   * useEffect to handle navigation when the 'page' state changes.
   * Navigates to the specified page and resets the 'page' state.
   */
  useEffect(()=>{
    if(page){
      navigate(page);
      setPage('');
    }
  }, [page, navigate]);

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
            <ButtonX key='home' onClick={() => setPage("/")} > Inicio </ButtonX>
            <ButtonX key='products' onClick={() => setPage("products")} > Productos </ButtonX>
            <ButtonX key='about-us' onClick={() => setPage("about-us")} > Conocenos </ButtonX>
            <ButtonX key='login' onClick={handleOpenModal} > Ingresar </ButtonX>
            <IconButtonX onClick={handleOpenDrawer} sx={{mr: 3}}>
              <ShoppingCarIcon/>
            </IconButtonX>
          </Box>

          {/* Responsive: Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButtonX
              size="large"
              onClick={handleClickMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButtonX>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <ButtonX key='home' onClick={() => setPage("/")} > Inicio </ButtonX>
              <ButtonX key='products' onClick={() => setPage("products")} > Productos </ButtonX>
              <ButtonX key='about-us' onClick={() => setPage("about-us")} > Conocenos </ButtonX>
              <ButtonX key='login' onClick={handleOpenModal} > Ingresar </ButtonX>
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

          <Box sx={{display: {xs: 'flex', md: 'none '}}}>
            <IconButtonX onClick={handleOpenDrawer} >
              <ShoppingCarIcon/>
            </IconButtonX>
          </Box>
          
          <Login open={modal} handleClose={handleCloseModal} />
          <DrawerBag open={drawer} onClose={handleCloseDrawer}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
