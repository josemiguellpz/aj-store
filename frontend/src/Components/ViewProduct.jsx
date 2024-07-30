import PropTypes from 'prop-types';
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Modal from "@mui/material/Modal";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ViewProduct({
  open,
  handleClose,
  id, product, model, storage, price, condition, description,
  onRendered
}) {
  


  return (
    <Modal open={open} onClose={handleClose} sx={style} onRendered={onRendered}>
      <Paper elevation={0}>
        <Grid>

        </Grid>
        <Typography>{product} {model}</Typography>
        <Typography>{storage}</Typography>
        <Typography>{price}</Typography>
        <Typography>{condition}</Typography>
        <Typography>{description}</Typography>
      </Paper>
    </Modal>
  );
}

ViewProduct.defaultProps ={
  open: false,
  handleClose: () => null,
}

ViewProduct.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};