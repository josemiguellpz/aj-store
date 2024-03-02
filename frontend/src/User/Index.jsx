import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Instagram from '@mui/icons-material/Instagram';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Paper from '@mui/material/Paper';
import StyleIcon from '@mui/icons-material/Style';
import Typography from '@mui/material/Typography';
import Button from '../Components/Button';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import WhatsAppButton from '../Components/WhatsApp';
import logo from 'C:\\Users\\josemiguel\\Desktop\\images\\logo.jpg';
import iPhones from 'C:\\Users\\josemiguel\\Desktop\\images\\AppleShopMtz1.webp';
import Cases from 'C:\\Users\\josemiguel\\Desktop\\images\\Cases-Airpods.webp';
import Accesories from 'C:\\Users\\josemiguel\\Desktop\\images\\Accesories.webp';
import Staff from 'C:\\Users\\josemiguel\\Desktop\\images\\Staff.jpeg';
import Location from '../Components/Location';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function Index() {

  return (
    <div id='home' style={{paddingTop: '14vh' }}>
      <Container>
          {/* sx={{ border:'solid blue',  }} */}
          {/* sx={{ border:'solid red',   }} */}
          {/* sx={{ border:'solid yellow',}} */}
          {/* sx={{ border:'solid green', }} */}
          {/* TODO: Change Images, Move to Page section */}
        <Box  sx={{ width:'100%', pt: '1.6rem', pb: '1.6rem' }}>
          <Paper elevation={3} sx={{p: 2, maxWidth: '100%', flexGrow: 1, pt: '2.5rem', pb: '2.5rem',}}>
            <Grid container sx={{ gap: {xs: 1, md: 0} }} padding='2.5rem'>
              <Grid item >
                <Box sx={{ width: 300, height: 300, border:'solid #efb810', borderRadius: '50%', overflow: 'hidden', }}>
                  <Img alt="complex" src={logo}  />
                </Box>
              </Grid>
              
              <Grid item xs={12} sm container >
                <Grid item xs container direction="column" >
                  <Grid item xs container direction="column" sx={{ justifyContent: {xs: 'center', md: ''} }}>
                    <Typography variant='h2' gutterBottom  component="div" sx={{display: {xs: 'none', md: 'block'}}}>
                      APPLESHOPMTZ
                    </Typography>
                    <Typography variant="h4" gutterBottom >
                      Productos originales
                    </Typography>
                    <Typography variant="h4" color="text.secondary" >
                      Conoce nuestra amplia gama de productos
                    </Typography>
                  </Grid>
                  <Grid item >
                    <Button title={'Catálogo'}onClick={null} variant={"contained"} size={"large"} endIcon={<StyleIcon fontSize='large'/>}/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
          
        <Box id='products' sx={{ width:'100%', pt: '1.6rem', pb: '1.6rem'}}>
          <Typography variant='h2' sx={{pb: '3.2rem', color: '#efb810', textShadow: '0px 0px 9px #efb810'}}>
            NUESTROS PRODUCTOS
          </Typography>
          <Container spacing={2} >
            <Grid container justifyContent="center" spacing={2} sx={{gap: {xs:3, sm:0, md:0}}}>
              <Grid item xs={8} sm={6} md={4}>
                <Card sx={{ maxWidth: 350 }}>
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
                    <Button title={'Ver más'}onClick={null} variant={"contained"} size={"small"} endIcon={<NavigateNextIcon/>}/>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={8} sm={6} md={4}>
                <Card sx={{ maxWidth: 350 }}>
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
                    <Button title={'Ver más'}onClick={null} variant={"contained"} size={"small"} endIcon={<NavigateNextIcon/>}/>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={8} sm={6} md={4}>
                <Card sx={{ maxWidth: 350 }}>
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
                    <Button title={'Ver más'}onClick={null} variant={"contained"} size={"small"} endIcon={<NavigateNextIcon/>}/>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box id='about-us' sx={{width:'100%', height: '100%', pt: '1.6rem', pb: '3.6rem', }}>
          <Typography variant='h2' sx={{pt: '1.6rem', pb: '3.2rem', color: '#efb810', textShadow: '0px 0px 9px #efb810'}}>
            CONOCENOS
          </Typography>

          <Container sx={{maxHeight: '100rem', }}>
            <Grid container xs={12} justifyContent='space-around' sx={{gap: {xs: 4, md: 0}, }}>
              <Grid item  >
                <Card sx={{ maxWidth: 900, height: '110vh' }}  >
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
                    <Button title={'amaiaguileraa'}onClick={null} variant={"contained"} size={"small"} startIcon={<Instagram/>}/>
                    <Button title={'jafettudm_'}onClick={null} variant={"contained"} size={"small"} startIcon={<Instagram/>}/>
                  </CardActions>
                </Card>
              </Grid>
              
              <Grid item container justifyContent="center" alignItems="center"  sx={{ maxWidth: {xs: '40rem', md: '30rem'},  gap: {xs: 4, md: 0}, }}>
                <Grid item sx={{ background: '#000', borderRadius: '10px', }}>
                  <Typography variant='h6'  sx={{ padding: '2rem', }}>
                    En AppleShopMtz estamos comprometidos con ofrecer la mejor atención y calidad en nuestros productos. 
                    Con nosotros encontrarás el equipo ideal y los accesorios más en tendencia para tu equipo.
                    <br /> <br />
                    Puedes encontrarnos en:
                    <Location />
                  </Typography>
                </Grid>
              </Grid> 
            </Grid>
          </Container>

        </Box>

        <WhatsAppButton/>
      </Container>
    </div>
  )
}

export default Index