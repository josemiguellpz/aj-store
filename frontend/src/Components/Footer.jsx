import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Button from "./Button";
import TikTokIcon from "./Tiktok";

// TO DO: Boton para Modal en Compartir ideas

export default function Footer() {
  return (
    <Box
      component="footer"
      bgcolor="primary.main" color="primary.contrastText"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[300]
            : null,
        p: 4,
      }}
      >
      <Container maxWidth="xl">
        <Grid container spacing={5}>

          <Grid item xs={12} sm={4} sx ={{ justifyContent:"center"}}>
            <Typography variant="h6" color="text.primary" gutterBottom sx={{ textTransform: 'uppercase' }}>
              Compartenos tus ideas
            </Typography>
            <Button title={"Envíanos tus ideas"} onClick={null} variant={"contained"} size={"small"} endIcon={<SendIcon/>}/>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom sx={{ textTransform: 'uppercase' }}>
              Contacto
            </Typography>
            <Typography variant="body2" color="text.secondary">
              C. Adolfo López Mateos 478, Ejidal, 93606 <br/> Martínez de la Torre, Ver.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: appleshopmtz@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tel: 232 125 4233
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom sx={{ textTransform: 'uppercase' }} >
              Gracias por tu visita <br /> ¡Hasta pronto!
            </Typography>
            <Typography variant="h6" color="text.primary" gutterBottom sx={{ textTransform: 'uppercase' }}>
              Siguenos en
            </Typography>
            <Link href="https://www.facebook.com/profile.php?id=61550820530934" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/appleshopmtz/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <TikTokIcon />
            </Link>
          </Grid>
        </Grid>
        
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © / Terminos y condiciones"}
            {" "} México. {" "}
            {new Date().getFullYear()}
            {""}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}