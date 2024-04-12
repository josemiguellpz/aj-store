import { useState, useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import { Button as Btn } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import StyleIcon from '@mui/icons-material/Style';
import Typography from '@mui/material/Typography';
import UndoIcon from '@mui/icons-material/Undo';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '../Components/Button';
import ChipButton from '../Components/ChipButton';
import WhatsAppButton from '../Components/WhatsApp';
import iPhones from 'C:\\Users\\josemiguel\\Desktop\\images\\AppleShopMtz1.webp';
import iPhone15Pro from 'C:\\Users\\josemiguel\\Desktop\\images\\iPhones\\iphone-15.jpg';
import { styled } from '@mui/material/styles';

/* Max and Min Price Component Slider */
const MINPRICE = 0
const MAXPRICE = 20000

/* Component Select */
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

/* Array Iphone Models */

const dataIphones = [
  {
    value: 10,
    model: 'iPhone X'
  },
  {
    value: 20,
    model: 'iPhone 11'
  },
  {
    value: 30,
    model: 'iPhone 12'
  },
  {
    value: 40,
    model: 'iPhone 12 Pro'
  },
  {
    value: 50,
    model: 'iPhone 13 Pro Max'
  },
  {
    value: 60,
    model: 'iPhone 14 Pro Max'
  },
  {
    value: 70,
    model: 'iPhone 15'
  },
  {
    value: 80,
    model: 'iPhone 15 Plus'
  },
  {
    value: 90,
    model: 'iPhone 15 Pro Max'
  },
]

function Products(params) {
  
  /* Form to Show in 'Búsqueda Rápida' */
  const [formToShow, setFormToShow] = useState('all');
  
  /* iPhone Data Search */
  const [iphoneDataForSearch, setIphoneDataForSearch] = useState({model: '', storage: '', price: ''});
  const handleIphoneDataForSearch = (e) => setIphoneDataForSearch({ ...iphoneDataForSearch, [e.target.name]: e.target.value });

  /* Price for Search iPhone*/
  const [price, setPrice] = useState(MINPRICE);
  const handleChangePrice = (_, currentPrice) => {
    setPrice(currentPrice);
    setIphoneDataForSearch({...iphoneDataForSearch, price: currentPrice});
  };
  
  /* Cases Data Search */
  const [casesDataForSearch, setCasesDataForSearch] = useState({caseModel: '', casePrice: ''});
  const handleCasesDataForSearch = (e) => setCasesDataForSearch({...casesDataForSearch, [e.target.name]: e.target.value});

  /* Submit */
  const handleSearchIphones = (event) => {
    event.preventDefault();
    console.log(iphoneDataForSearch);
  }
  
  const handleSearchCases = (event) => {
    event.preventDefault();
    console.log(casesDataForSearch);
  }

  return (
    <div style={{paddingTop: '14vh', paddingBottom: '14vh' }}>
      <Grid container spacing={2} >
        <Grid item xs={3}>
          <Paper sx={{ position: 'sticky', top: 0, left: 0, bottom: 0, width: '35vh', padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Búsqueda rápida
            </Typography>
            <Divider />
            <List>
              <ButtonGroup orientation="vertical" size="small" color="warning">
                <Btn onClick={() => setFormToShow('all')}>Todo</Btn>
                <Btn onClick={() => setFormToShow('iphones')}>iPhones</Btn>
                <Btn onClick={() => setFormToShow('cases')}>Cases</Btn>
                <Btn onClick={() => setFormToShow('accesories')}>Accesorios</Btn>
              </ButtonGroup>

                { formToShow === 'all' ? (
                  <> </>
                ) : formToShow === 'iphones' ? (
                  <form onSubmit={handleSearchIphones}>
                    <FormControl sx={{ minWidth: 200, mt: 5, mb: 2 }}>
                      <InputLabel color='warning'>Modelo</InputLabel>
                      <Select
                        name='model'
                        label="Modelo"
                        value={iphoneDataForSearch.model}
                        onChange={handleIphoneDataForSearch}
                        MenuProps={MenuProps}
                        size='small'
                        color='warning'
                      >
                        {dataIphones.map(({ value, model }) => (
                          <MenuItem key={value} value={value}> 
                            {model} 
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 200, mb: 2 }}>
                      <InputLabel color='warning'>Almacenamiento</InputLabel>
                      <Select
                        name='storage'
                        label="Almacenamiento"
                        value={iphoneDataForSearch.storage}
                        onChange={handleIphoneDataForSearch}
                        size='small'
                        color='warning'
                      >
                        <MenuItem value="" sx={{width: 200}}>
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>128 GB</MenuItem>
                        <MenuItem value={20}>256 GB</MenuItem>
                        <MenuItem value={30}>512 GB</MenuItem>
                        <MenuItem value={40}>1 TB</MenuItem>
                      </Select>
                    </FormControl>
                    
                    <ListItem>
                      <Box sx={{ width: 200 }}>
                        <ListItemText primary="Rango de Precio" />
                        <Slider
                          step={500}
                          value={price}
                          valueLabelDisplay="auto"
                          min={MINPRICE}
                          max={MAXPRICE}
                          onChange={handleChangePrice}
                          color='warning'
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2" onClick={() => setPrice(MINPRICE)} sx={{ cursor: 'pointer' }}>
                            ${MINPRICE.toLocaleString()}
                          </Typography>
                          <Typography variant="body2" onClick={() => setPrice(MAXPRICE)} sx={{ cursor: 'pointer' }}>
                            ${MAXPRICE.toLocaleString()}
                          </Typography>
                        </Box>
                      </Box>
                    </ListItem>

                    <Divider />
                    <ListItem>
                      <ListItemButton onClick={handleSearchIphones}>
                        <ListItemIcon sx={{alignItems: 'center'}}>
                          <SearchIcon fontSize='small'/>
                          <ListItemText primary="Buscar" sx={{ pl: 2}} />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton onClick={() => { /* Lógica para filtrar */ }}>
                        <ListItemIcon sx={{alignItems: 'center'}}>
                          <UndoIcon fontSize='small'/>
                          <ListItemText primary="Descartar" sx={{ pl: 2}}/>
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  </form>
                ) : formToShow === 'cases' ? (
                  <form onSubmit={handleSearchCases}>
                    <FormControl sx={{ minWidth: 200, mt: 5, mb: 2 }}>
                      <InputLabel color='warning'>Modelo de Case</InputLabel>
                      <Select
                        name='caseModel'
                        label="Modelo de Case"
                        value={casesDataForSearch.caseModel}
                        onChange={handleCasesDataForSearch}
                        size='small'
                        color='warning'
                      >
                        <MenuItem value="" sx={{width: 200}}>
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>iPhone 11</MenuItem>
                        <MenuItem value={20}>iPhone 12 Pro</MenuItem>
                        <MenuItem value={30}>iPhone 14 Plus</MenuItem>
                        <MenuItem value={40}>iPhone 15 Pro Max</MenuItem>
                      </Select>
                    </FormControl>
                    <ListItem>
                      <ListItemButton onClick={handleSearchCases}>
                        <ListItemIcon>
                          <SearchIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary="Buscar" />
                      </ListItemButton>
                    </ListItem>
                  </form>
                ) : (
                  <form>
                    <FormControl sx={{ minWidth: 200, mt: 2, mb: 2 }}>
                      <InputLabel>Accesorio</InputLabel>
                      <Select
                        name='accesories'
                        label="Accesorio"
                        /* value={dataFilter.model} */
                        /* onChange={handleDataFilter} */
                        size='small'
                        color='warning'
                      >
                        <MenuItem value="" sx={{width: 200}}>
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>MagSafe</MenuItem>
                        <MenuItem value={20}>Adaptador de Corriente</MenuItem>
                        <MenuItem value={30}>Cables</MenuItem>
                      </Select>
                    </FormControl>
                    <ListItem>
                      <ListItemButton /* onClick={handleSearchIphones} */>
                        <ListItemIcon>
                          <SearchIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary="Buscar" />
                      </ListItemButton>
                    </ListItem>
                  </form>
                )}

            </List>
          </Paper>
        </Grid>

        <Grid item xs={8} style={{ overflowY: 'auto', display: 'flex', flexWrap: 'wrap'}}>
          <Card sx={{ width: 250, marginRight: 5, marginBottom: 5 }}>
            <CardMedia image={iPhone15Pro} sx={{ height: 200, objectFit: 'cover' }} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                iPhone 15 Pro Max
              </Typography>
              <Grid container justifyContent='space-around'>
                <Chip size='small' label='$25,000'/>
                <Chip size='small' label='256 GB'/>
                <Chip size='small' label='Seminuevo'/>
              </Grid>
            </CardContent>
            <CardActions sx={{ marginBottom: 1}}>
              <Grid container justifyContent='space-around'>
                <ChipButton label={'Mostrar'} onClick={()=>{}} icon={<MoreVertIcon/>} />
                <ChipButton label={'Añadir'} onClick={()=>{}} icon={<AddShoppingCartIcon/>} />
              </Grid>
            </CardActions>
          </Card>
          <Card sx={{ width: 250, marginRight: 5, marginBottom: 5 }}>
            <CardMedia image={iPhones} sx={{ height: 200, objectFit: 'cover' }} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                iPhone 12
              </Typography>
              <Grid container justifyContent='space-around'>
                <Chip size='small' label='$35,000'/>
                <Chip size='small' label='1 TB'/>
                <Chip size='small' label='Nuevo'/>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container justifyContent='space-around'>
                <ChipButton label={'Mostrar'} onClick={()=>{}} icon={<MoreVertIcon/>} />
                <ChipButton label={'Añadir'} onClick={()=>{}} icon={<AddShoppingCartIcon/>} />
              </Grid>
            </CardActions>
          </Card>
          <Card sx={{ width: 250, marginRight: 5, marginBottom: 5 }}>
            <CardMedia image={iPhones} sx={{ height: 200, objectFit: 'cover' }} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                iPhone 13 Pro
              </Typography>
              <Grid container justifyContent='space-around'>
                <Chip size='small' label='$20,000'/>
                <Chip size='small' label='128 GB'/>
                <Chip size='small' label='Nuevo'/>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container justifyContent='space-around'>
                <ChipButton label={'Mostrar'} onClick={()=>{}} icon={<MoreVertIcon/>} />
                <ChipButton label={'Añadir'} onClick={()=>{}} icon={<AddShoppingCartIcon/>} />
              </Grid>
            </CardActions>
          </Card>
          <Card sx={{ width: 250, marginRight: 5, marginBottom: 5 }}>
            <CardMedia image={iPhones} sx={{ height: 200, objectFit: 'cover' }} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MagSafe
              </Typography>
              <Chip label='$5,000'/>
            </CardContent>
            <CardActions>
              <Grid container justifyContent='space-around'>
                <ChipButton label={'Mostrar'} onClick={()=>{}} icon={<MoreVertIcon/>} />
                <ChipButton label={'Añadir'} onClick={()=>{}} icon={<AddShoppingCartIcon/>} />
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <WhatsAppButton/>
    </div>
  );  
}

export default Products;