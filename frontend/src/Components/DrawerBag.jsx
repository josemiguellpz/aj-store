import PropTypes from 'prop-types';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

const DrawerBag = ({
  open,
  onClose
}) => {

  return (
    <>
      <Drawer anchor='right' open={open} onClose={onClose} elevation={16}>
        <Box sx={{ml: 5, mr: 5, mt: 2}}>
          Bolsa vacia
          
        </Box>
      </Drawer>
    </>
  );
};

DrawerBag.defaultProps = {
  open: false,
  onClose: null,
};

DrawerBag.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
}

export default DrawerBag;