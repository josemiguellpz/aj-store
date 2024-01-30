// import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
// import { useThemeContext } from '../Components/ThemeProvider';
import logo from 'C:\\Users\\josemiguel\\Desktop\\images\\logo.jpg'
import iPhones from 'C:\\Users\\josemiguel\\Desktop\\images\\AppleShopMtz1.webp'
import Cases from 'C:\\Users\\josemiguel\\Desktop\\images\\Cases-Airpods.webp'
import Accesories from 'C:\\Users\\josemiguel\\Desktop\\images\\Accesories.webp'

function Index() {

  return (
    <div  style={{paddingTop: '15vh' }}>
      <NavBar/>
      <Container>
        <Box sx={{ border:'solid', width:'100%'}}>
          {/* <button  style={{border: 'solid' }}>jajak</button> */}
          <img style={{border: 'solid', objectFit: 'cover' }} src={logo} className='logo' alt="Apple Shop Mtz Logo" />
          <Typography>Apple Shop Mtz</Typography>
          <Typography>Productos originales</Typography>
          <Typography>Conoce nuestra gama de productos</Typography>
          <Typography></Typography>
        </Box>

        <Box sx={{ border:'solid', width:'100%'}}>

          <Typography variant='h2' sx={{pt: '1.6rem', pb: '1.6rem'}}>
            Nuestros productos
          </Typography>

          <Box sx={{display: { xs: 'flex-wrap', md: 'flex' }, justifyContent: 'space-around', width:'100%'}}>
            <Card sx={{ maxWidth: 350 }}>
              <CardMedia
                sx={{ height: 200, objectFit: 'cover' }}
                image={iPhones}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  iPhones
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Consulta cualquier modelo de tu preferencia
                </Typography>
              </CardContent>
              <CardActions>
                <Button color='inherit' size="small">Ver más</Button>
              </CardActions>
            </Card>
            
            <Card sx={{ maxWidth: 350 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={Cases}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cases
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Para que tu iPhone esté a salvo del agua, polvo y golpes.
                </Typography>
              </CardContent>
              <CardActions>
                <Button color='inherit' size="small">Ver más</Button>
              </CardActions>
            </Card>
            
            <Card sx={{ maxWidth: 350 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={Accesories}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Accesorios
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  MagSafe, Cargadores, Airpods, entre otros.
                </Typography>
              </CardContent>
              <CardActions>
                <Button color='inherit' size="small">Ver más</Button>
              </CardActions>
            </Card>
          </Box>
        </Box>

        <Box sx={{ border:'solid', width:'100%'}}>
          <Typography variant='h2'>Nosotros</Typography>
        </Box>
      </Container>
      <Footer/>
    </div>
  )
}

export default Index