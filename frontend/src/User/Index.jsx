import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Instagram from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Paper from '@mui/material/Paper';
import StyleIcon from '@mui/icons-material/Style';
import Typography from '@mui/material/Typography';
import Button from '../Components/Button';
import WhatsAppButton from '../Components/WhatsApp';
import logo from 'C:\\Users\\josemiguel\\Desktop\\images\\logo.jpg';
import ImgLocation from 'C:\\Users\\josemiguel\\Desktop\\images\\Location.jpeg';
import iPhones from 'C:\\Users\\josemiguel\\Desktop\\images\\AppleShopMtz1.webp';
import Cases from 'C:\\Users\\josemiguel\\Desktop\\images\\Cases-Airpods.webp';
import Accesories from 'C:\\Users\\josemiguel\\Desktop\\images\\Accesories.webp';
import Staff from 'C:\\Users\\josemiguel\\Desktop\\images\\Staff.jpeg';
import Location from '../Components/Location';
import ChipButton from '../Components/ChipButton';
import { styled } from '@mui/material/styles';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%', width: 300, height: 300, border:'solid #efb810', borderRadius: '50%', overflow: 'hidden',
});

const styleChipButton = {
  '&:hover': {
    background: '#efb810',
    color: '#000',
    fontWeight: 'bold'
  }
}

const url = 'https://www.google.com.mx/maps/place/C.+Adolfo+L%C3%B3pez+Mateos+478,+Ejidal,+93606+Mart%C3%ADnez+de+la+Torre,+Ver./@20.068934,-97.0465094,19.76z/data=!4m6!3m5!1s0x85db03b5baa02311:0x36e0f199cf45d1cf!8m2!3d20.0691015!4d-97.0464685!16s%2Fg%2F11mtdkhwmd?entry=ttu';

function Index() {

  const navigate = useNavigate();
  const [page, setPage] = useState('');
  const handleGoTo = (path) => setPage(path);
  const handleShowLocation = () => window.open(url, '_blank'); 

  useEffect(()=>{
    if (page){
      navigate(page);
      setPage('');
    }
  }, [page, navigate]);

  return (
    <div id='home' style={{paddingTop: '14vh' }}>
      <Container>
          {/* sx={{ border:'solid blue',  }} */}
          {/* sx={{ border:'solid red',   }} */}
          {/* sx={{ border:'solid yellow',}} */}
          {/* sx={{ border:'solid green', }} */}
          {/* TODO: Change Images, Move to Page section */}

        {/* Responsive Design */}
        <Box sx={{ width:'100%', pt: '1.6rem', pb: '1.6rem', display: {xs: 'block', md: 'none', lg: 'none'}}}>
          <Paper elevation={3} sx={{p: 2, maxWidth: '100%', flexGrow: 1,}}>
            <Grid container justifyContent={'center'} padding='2.5rem'>
              <Grid item sm={12}>
                <Typography variant='h2' gutterBottom  component="div" sx={{textShadow: '0px 0px 9px #efb810'}}>
                  APPLESHOPMTZ
                </Typography>
              </Grid>
              <Grid item sm={5}>
                <Img alt="logo" src={logo}/>
              </Grid>
              <Grid item sm={7} sx={{ alignContent: 'center',}}>
                <Grid item sm={12}>
                  <Typography variant="h4" gutterBottom >
                    Productos originales
                  </Typography>
                  <Typography variant="h4" color="text.secondary" >
                    Conoce nuestra amplia gama de productos
                  </Typography>
                </Grid>
                <Grid item sm={12} sx={{ pt:5, }}>
                  <Button title={'Catálogo'} onClick={() => handleGoTo('/products')} variant={"contained"} size={"large"} endIcon={<StyleIcon fontSize='large'/>}/>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Desktop Design */}
        <Box sx={{ width:'100%', pt: '1.6rem', pb: '1.6rem', display: {xs: 'none', md: 'block', lg: 'block'}}}>
          <Paper elevation={3} sx={{p: 2, maxWidth: '100%', flexGrow: 1, pt: '1.5rem', pb: '1.5rem',}}>
            <Grid container justifyContent={'center'} padding='2.5rem'>
              <Grid item xs={3} md={4.5} lg={4.5}>
                <Img alt="logo" src={logo}/>
              </Grid>
              <Grid item xs={6} md={7.5} lg={7.5}>
                <Grid item lg={12}>
                  <Typography variant='h2' gutterBottom  component="div" sx={{textShadow: '0px 0px 9px #efb810'}}>
                    APPLESHOPMTZ
                  </Typography>
                  <Typography variant="h4" gutterBottom >
                    Productos originales
                  </Typography>
                  <Typography variant="h4" color="text.secondary" >
                    Conoce nuestra amplia gama de productos
                  </Typography>
                </Grid>
                <Grid item sx={{ pt: 5}}>
                  <Button title={'Catálogo'} onClick={() => handleGoTo('/products')} variant={"contained"} size={"large"} endIcon={<StyleIcon fontSize='large'/>}/>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
          
        <Box id='products' sx={{ width:'100%', pt: '1.6rem', pb: '1.6rem'}}>
          <Paper elevation={4} sx={{ pb:6 }}>
            <Grid container justifyContent={'center'}>
              <Grid item xs={12} sx={{pt:5, pb: 5}}>
                <Typography variant='h2' sx={{textShadow: '0px 0px 9px #efb810'}}>COLECCIÓN</Typography>
                <Divider sx={{pt: 2}}/>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Card sx={{ maxWidth: 350, background: '#000' }}>
                  <CardMedia image={iPhones} sx={{ height: 200, objectFit: 'cover' }} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      iPhones
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Consulta cualquier modelo de tu preferencia.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button title={'Ver más'} variant={"contained"} size={"small"} endIcon={<NavigateNextIcon/>}/>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {xs: 5, md: 0, lg: 0}, mb: {xs: 5, md: 0, lg: 0}}}>
                <Card sx={{ maxWidth: 350, background: '#000' }}>
                  <CardMedia image={Cases} sx={{ height: 200, objectFit: 'cover' }} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Cases
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Protege tu iPhone del agua, polvo y golpes.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button title={'Ver más'} variant={"contained"} size={"small"} endIcon={<NavigateNextIcon/>}/>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Card sx={{ maxWidth: 350, background: '#000' }}>
                  <CardMedia image={Accesories} sx={{ height: 200, objectFit: 'cover' }} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Accesorios
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      MagSafe, Cargadores, Airpods, entre otros.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button title={'Ver más'} variant={"contained"} size={"small"} endIcon={<NavigateNextIcon/>}/>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        <Box id='about-us' sx={{width:'100%', height: '100%', pt: '1.6rem', pb: '3.6rem', }}>
          <Paper elevation={4} sx={{pb: 6}}>
            <Grid container justifyContent={'space-around'}>
              <Grid item xs={12} sx={{pt:5, pb: 5}}>
                <Typography variant='h2' sx={{textShadow: '0px 0px 9px #efb810'}}>CONOCENOS</Typography>
                <Divider sx={{pt: 2}}/>
              </Grid>
              <Grid item xs={8} md={5} lg={5}>
                <Card sx={{ maxWidth: 900, background: '#000', pb: 2 }}  >
                  <CardMedia image={Staff} sx={{ height: 500, width: 500, objectFit: 'contain' }} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Amai Aguilera & Jafet Uriostigue
                    </Typography>
                    <Typography color='text.secondary' >
                      Emprendedores e ingenieros
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button title={'amaiaguileraa'}  variant={"contained"} size={"small"} startIcon={<Instagram/>}/>
                    <Button title={'jafettudm_'}  variant={"contained"} size={"small"} startIcon={<Instagram/>}/>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={9} md={6} lg={6} sx={{mt: {xs: 5, md: 0, lg: 0}}}>
                <Card sx={{  background: '#000', pb: 2 }}  >
                  <CardContent>
                    <Typography color='text.primary' >
                      En AppleShopMtz estamos comprometidos con ofrecer la mejor atención y calidad en nuestros productos. 
                      Con nosotros encontrarás el equipo ideal y los accesorios más en tendencia para tu equipo.
                    </Typography>
                    <Typography color='text.secondary' >
                      Puedes encontrarnos en:  
                    </Typography>
                  </CardContent>
                  <CardMedia image={ImgLocation} sx={{ height: 300, objectFit: 'contain' }} />
                  <CardActions>
                    {/* Click on Picture or Button */}
                    <ChipButton label={'Mostrar Ubicación'} onClick={handleShowLocation} icon={<LocationOnIcon/>}/>
                    <ChipButton label={'Ubicación'} onClick={handleShowLocation} icon={<LocationOnIcon/>} sx={styleChipButton}/>
                    <Button title={'Ubicación'}  variant={"contained"} onClick={handleShowLocation} size={"small"} startIcon={<LocationOnIcon/>}/>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Paper>          
        </Box>

        <WhatsAppButton/>
      </Container>
    </div>
  )
}

export default Index;