import { Avatar, IconButton } from '@mui/material';
import ImgLocation from 'C:\\Users\\josemiguel\\Desktop\\images\\Location.png';

const Location = () => {

  const url = 'https://www.google.com.mx/maps/place/C.+Adolfo+L%C3%B3pez+Mateos+478,+Ejidal,+93606+Mart%C3%ADnez+de+la+Torre,+Ver./@20.068934,-97.0465094,19.76z/data=!4m6!3m5!1s0x85db03b5baa02311:0x36e0f199cf45d1cf!8m2!3d20.0691015!4d-97.0464685!16s%2Fg%2F11mtdkhwmd?entry=ttu';

  const handleClick = () => window.open(url, '_blank'); 

  return(
    <IconButton 
      onClick={handleClick} 
      sx={{'&:focus': { outline: 'none', }, }}
      disableRipple 
    >
      <Avatar src={ImgLocation} alt="Nuestra ubicación" variant='rounded' sx={{height: '100%', width: '100%',}}/>
    </IconButton>    
  );
}

export default Location;