import PropTypes from 'prop-types';
import { useState } from "react";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Modal from "@mui/material/Modal";
import Switch from '@mui/material/Switch';
import SyncIcon from '@mui/icons-material/Sync';
import TextField from './TextField';
import Typography from "@mui/material/Typography";
import Button from "./Button";
import { styled } from '@mui/system';

/* const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} /> ))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#efb810',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
})); 

<FormControlLabel
  control={<IOSSwitch sx={{ m: 1, }}  defaultChecked />}
  onClick={handleChange}
/> 

*/

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #efb810',
  borderRadius: '5%',
  boxShadow: 24,
  pt: 2, px: 4, pb: 3,
};

export default function Login({ 
  open,
  handleClose,
}) {

  const [rotation, setRotation] = useState(0);
  // const [showPassword, setShowPassword] = useState(false);
  const [changeForm, setChangeForm] = useState(true);
  const handleChangeForm = () => {
    setRotation(rotation + 180);
    setChangeForm(!changeForm);
  };

  // Data Login
  const [login, setLogin] = useState({email: '', password: ''});
  const handleLogin=(e) => setLogin({ ...login, [e.target.name]: e.target.value });
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    console.log('Formulario enviado:', login);
  };
  
  //Data Register
  const [register, setRegister] = useState({name: '', lastname: '', email: '', password: ''});
  const handleRegister=(e) => setRegister({ ...register, [e.target.name]: e.target.value });
  const handleSubmitRegister = (event) => {
    event.preventDefault();
    console.log('Formulario enviado:', register);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose} sx={{color: 'inherit'}}>
        <Box color='inherit' sx={{ ...style, width: '50vh', height: '70vh', maxHeight: '70vh' }}>
          
          <Grid container justifyContent='center' sx={{pt: 2, }} >
            <FormGroup>
              <div style={{display: 'flex', alignItems: 'center', justifyContent:'stretch', width: '40vh', gap: 10}}>
                <IconButton onClick={handleChangeForm} sx={{'&:focus': { outline: 'none', }, transition: 'transform 0.5s', transform: `rotate(${rotation}deg)`,}} >
                  <SyncIcon sx={{color: '#efb810' }}/>
                </IconButton>
                {changeForm ? 
                  <Typography variant='h5'> Iniciar Sesión</Typography> 
                : 
                  <Typography variant='h5'> Nueva Cuenta </Typography> 
                }
              </div>
            </FormGroup>
          </Grid>
          
          <Grid container justifyContent='center'>
            {changeForm ?
            <>
              <Grid container direction='column' alignContent='center' sx={{pt: 5, pb: 3, gap: 3, }}>
                <TextField 
                  type='email' 
                  label='Email' 
                  name='email' 
                  value={login.email} 
                  onChange={handleLogin}
                  size='small'
                  sx={{width: '40vh'}}/>
                <TextField 
                  type='password' 
                  label='Contraseña' 
                  name='password' 
                  value={login.password} 
                  onChange={handleLogin}
                  size='small'
                  sx={{width: '40vh'}}/>
              </Grid>

              <Grid container direction='column' alignItems='center'  sx={{ gap: 2  }}>
                <Button type='submit' title='Iniciar Sesión' onClick={handleSubmitLogin} sx={{width: '25vh'}}/>
                <Typography variant='body' sx={{textDecoration: 'underline', cursor: 'pointer'}}> Olvide mi contraseña </Typography>
                <a onClick={handleChangeForm}> 
                  <Typography variant='body' sx={{textDecoration: 'underline', cursor: 'pointer'}}> 
                    Crear nueva cuenta 
                  </Typography> 
                </a> 
              </Grid>
            </> 
            : 
            <>
              <Grid container direction='column'  alignContent='center' sx={{pt: 3, pb: 3, gap: 2, }}>
                <TextField 
                  type='text' 
                  label='Nombre' 
                  name='name' 
                  value={register.name} 
                  onChange={handleRegister}
                  size='small'
                  sx={{width: '40vh'}}/>
                <TextField 
                  type='text' 
                  label='Apellidos' 
                  name='lastname' 
                  value={register.lastname} 
                  onChange={handleRegister}
                  size='small'
                  sx={{width: '40vh'}}/>
                <TextField 
                  type='email' 
                  label='Email' 
                  name='email' 
                  value={register.email} 
                  onChange={handleRegister}
                  size='small'
                  sx={{width: '40vh'}}/>
                <TextField 
                  type='password' 
                  label='Contraseña' 
                  name='password' 
                  value={register.password} 
                  onChange={handleRegister}
                  size='small'
                  sx={{width: '40vh'}}/>
              </Grid>
              <Grid container direction='column' alignContent='center' alignItems='center' sx={{width: 200, gap: 2}}>  
                <Button type='submit' title='Registrarse' onClick={handleSubmitRegister} sx={{width: '25vh'}}/>
                <a onClick={handleChangeForm}> 
                  <Typography variant='body' sx={{textDecoration: 'underline', cursor: 'pointer'}}> 
                    ¿Ya tienes cuenta? 
                  </Typography>
                </a> 
              </Grid> 
            </>
            }
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

Login.defaultProps ={
  open: false,
  handleClose: () => null,
}

Login.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
