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

  /* 
    TODO:
      1. Verify password: regular expression
      2. Verify email: regular expression
      3. Send Data Login / Register to Backend
      4. Show password
  */

  const [rotation, setRotation] = useState(0);
  const [changeForm, setChangeForm] = useState(true);
  const handleChangeForm = () => {
    setRotation(rotation + 180);
    setChangeForm(!changeForm);
  };
  
  // Data Login
  // const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState({email: '', password: ''});
  const handleLogin=(e) => setLogin({ ...login, [e.target.name]: e.target.value });
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    console.log('Formulario enviado:', login);
  };
  
  // Data Register
  const [register, setRegister] = useState({name: '', lastname: '', email: '', password: ''});
  const handleRegister=(e) => setRegister({ ...register, [e.target.name]: e.target.value });
  const handleSubmitRegister = (event) => {
    event.preventDefault();
    console.log('Formulario enviado:', register);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose} sx={{color: 'inherit'}}>
        <Box color='inherit' sx={{ ...style, width: '60vh', height: '70vh', maxHeight: '80vh' }}>
          
          <Grid container justifyContent='center' sx={{pt: 2, }} >
            <FormGroup>
              <div style={{display: 'flex', alignItems: 'center', justifyContent:'stretch', width: '40vh', gap: 10}}>
                {changeForm ? 
                  <Grid>
                    <Typography variant='h5'> Iniciar Sesión</Typography> 
                  </Grid>
                : 
                  <Grid>
                    <Typography variant='h5'> Nueva Cuenta </Typography> 
                  </Grid>
                }
              </div>
              <Typography variant='body'>¡Bienvenido! Ingresa los siguientes datos.</Typography> 
            </FormGroup>
          </Grid>
          
          <Grid container justifyContent='center'>
            {changeForm ?
            <> 
              {/* Login */}
              <Grid container direction='column' alignContent='center' sx={{pt: 5, pb: 3, gap: 3, }}>
                <TextField 
                  type='email' 
                  label='Email' 
                  name='email' 
                  value={login.email} 
                  onChange={handleLogin}
                  size='small'
                  sx={{width: '50vh'}}
                />
                <TextField 
                  type='password'
                  label='Contraseña' 
                  name='password' 
                  value={login.password} 
                  onChange={handleLogin}
                  size='small'
                  sx={{width: '50vh'}}
                />
                <Typography variant='caption' textAlign={'right'} sx={{textDecoration: 'underline', cursor: 'pointer'}}> 
                  Restablecer contraseña 
                </Typography>
              </Grid>           

              <Grid container direction='column' alignItems='center'  sx={{ gap: 2  }}>
                <Button type='submit' title='Ingresar' onClick={handleSubmitLogin} sx={{width: '50vh'}}/>
                <Button type='submit' title='Registrarse' onClick={handleChangeForm} sx={{width: '50vh'}}/>
              </Grid>
            </> 
            : 
            <> {/* New Account */}
              <Grid container direction='column'  alignContent='center' sx={{pt: 3, pb: 3, gap: 2, }}>
                <TextField 
                  type='text' 
                  label='Nombre' 
                  name='name' 
                  value={register.name} 
                  onChange={handleRegister}
                  size='small'
                  sx={{width: '50vh'}}
                />
                <TextField 
                  type='text' 
                  label='Apellidos' 
                  name='lastname' 
                  value={register.lastname} 
                  onChange={handleRegister}
                  size='small'
                  sx={{width: '50vh'}}
                />
                <TextField 
                  type='email' 
                  label='Email' 
                  name='email' 
                  value={register.email} 
                  onChange={handleRegister}
                  size='small'
                  sx={{width: '50vh'}}
                />
                <TextField 
                  type='password' 
                  label='Contraseña' 
                  name='password' 
                  value={register.password} 
                  onChange={handleRegister}
                  size='small'
                  sx={{width: '50vh'}}
                />
              </Grid>

              <Grid container direction='column' alignContent='center' alignItems='center' sx={{width: 200, gap: 2}}>  
                <Button 
                  type='submit' 
                  title='Registrarse' 
                  onClick={handleSubmitRegister} 
                  sx={{width: '50vh'}}
                />
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
