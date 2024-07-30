import { useState, useEffect, useRef } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
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
import StorageIcon from '@mui/icons-material/Storage';
import StyleIcon from '@mui/icons-material/Style';
import Typography from '@mui/material/Typography';
import UndoIcon from '@mui/icons-material/Undo';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '../Components/Button';
import ChipButton from '../Components/ChipButton';
import ViewProduct from '../Components/ViewProduct';
import WhatsAppButton from '../Components/WhatsApp';
import iPhones from 'C:\\Users\\josemiguel\\Desktop\\images\\AppleShopMtz1.webp';
import iPhone15Pro from 'C:\\Users\\josemiguel\\Desktop\\images\\iPhones\\iphone-15.jpg';
import { styled } from '@mui/material/styles';
import dataIphones from './dataIphones.json';

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

const dataIphonesk = [
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

  const [selectColor, setSelectColor] = useState("");
  const handleSelectColor = (event) => {
    setSelectColor(event.target.value);
  }

  /* View Product (MODAL)*/
  //const [selectColor, setSelectColor] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectProduct, setSelectProduct] = useState({});
  const [viewProduct, setViewProduct] = useState(false);
  const modalRef = useRef(null);
  const handleOpenViewProduct = (product) => {
    setSelectProduct(product);
    setScrollPosition(window.scrollY); // Save scroll position
    setViewProduct(true);
  }
  const handleCloseViewProduct = () => {
    setViewProduct(false);
    window.scrollTo(0, scrollPosition); // Restore scroll position
  }

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };
  
  /**
   * Handles the form submission for searching iPhones.
   * Prevents the default form submission and logs the search data.
   */
  const handleSearchIphones = (event) => {
    event.preventDefault();
    console.log(iphoneDataForSearch);
  }
  
  const handleSearchCases = (event) => {
    event.preventDefault();
    console.log(casesDataForSearch);
  }

  return (
    <Grid style={{paddingTop: '14vh', paddingBottom: '14vh' }}>
      <Grid container spacing={2} >
        
        {/* Responsive Design */}
        <Grid item xs={12} md={3} lg={2.5} justifyContent={'center'} sx={{display : {xs: 'flex', md: 'none', lg: 'none'}}}>
          <Paper sx={{ width: '80vh', padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Búsqueda rápida
            </Typography>
            <ButtonGroup size="small" color="warning">
              <Btn onClick={() => setFormToShow('all')}>Ver Todo</Btn>
              <Btn onClick={() => setFormToShow('iphones')}>iPhones</Btn>
              <Btn onClick={() => setFormToShow('cases')}>Cases</Btn>
              <Btn onClick={() => setFormToShow('accesories')}>Accesorios</Btn>
            </ButtonGroup>
            <Divider sx={{pb: 1, pt: 1}} />
            <List>

                { formToShow === 'all' ? (
                  <> </>
                ) : formToShow === 'iphones' ? (
                  <form onSubmit={handleSearchIphones}>
                    <Grid container justifyContent={'center'} sx={{/* border:'solid red' */}}>
                      <Grid item xs={6} sx={{pb:1, pt: 1,/*  boder: 'solid yellow' */}}>
                        <FormControl sx={{ minWidth: 200, pt: 1}}>
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
                            {dataIphonesk.map(({ value, model }) => (
                              <MenuItem key={value} value={value}> 
                                {model} 
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6} sx={{/* border:'solid yellow', */ pb:1, pt: 1}}>
                        <FormControl sx={{ minWidth: 200, pt: 1 }}>
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
                      </Grid>
                      <Grid xs={12} sx={{/* border: 'solid green' */}}>
                        <ListItem sx={{justifyContent: 'center'}}>
                          <Box sx={{ width: 300 }}>
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
                      </Grid>
                      
                      <Grid container sx={{/* border: 'solid blue' */}}>
                        <Grid item xs={6}>
                        <Divider sx={{pb: 1, pt: 1}} />
                          <ListItem>
                            <ListItemButton onClick={handleSearchIphones}>
                              <ListItemIcon sx={{alignItems: 'center'}}>
                                <SearchIcon fontSize='small'/>
                                <ListItemText primary="Buscar" sx={{ pl: 2}} />
                              </ListItemIcon>
                            </ListItemButton>
                          </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                        <Divider sx={{pb: 1, pt: 1}} />
                          <ListItem>
                            <ListItemButton onClick={() => { /* Lógica para filtrar */ }}>
                              <ListItemIcon sx={{alignItems: 'center'}}>
                                <UndoIcon fontSize='small'/>
                                <ListItemText primary="Descartar" sx={{ pl: 2}}/>
                              </ListItemIcon>
                            </ListItemButton>
                          </ListItem>
                        </Grid>
                      </Grid>
                    </Grid>
                  </form>
                ) : formToShow === 'cases' ? (
                  <form onSubmit={handleSearchCases}>
                    <Grid container justifyContent={'center'} sx={{pt:1}}>
                      <FormControl sx={{ minWidth: 200, pt: 1 }}>
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
                    </Grid>
                  </form>
                ) : (
                  <form>
                    <Grid container justifyContent={'center'} sx={{pt:1}}>
                      <FormControl sx={{ minWidth: 200, pt: 1}}>
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
                    </Grid>
                  </form>
                )}

            </List>
          </Paper>
        </Grid>

        {/* Desktop Design */}
        <Grid item xs={12} md={3} lg={2.5} sx={{display : {xs: 'none', md: 'block', lg: 'block'}}}>
          <Paper sx={{ position: 'sticky', top: 0, left: 0, bottom: 0, width: '35vh', padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Búsqueda rápida
            </Typography>
            <Divider />
            <List>
              <ButtonGroup orientation="vertical" size="small" color="warning">
                <Btn onClick={() => setFormToShow('all')}>Ver Todo</Btn>
                <Btn onClick={() => setFormToShow('iphones')}>iPhones</Btn>
                <Btn onClick={() => setFormToShow('cases')}>Cases</Btn>
                <Btn onClick={() => setFormToShow('accesories')}>Accesorios</Btn>
              </ButtonGroup>

                { formToShow === 'all' ? (
                  <> </>
                ) : formToShow === 'iphones' ? (
                  <form onSubmit={handleSearchIphones}>
                    <FormControl sx={{ minWidth: 200, mt: 3, mb: 2, pt: 1 }}>
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
                        {dataIphonesk.map(({ value, model }) => (
                          <MenuItem key={value} value={value}> 
                            {model} 
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 200, m: 1, mb: 2, pt: 1 }}>
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
                    <FormControl sx={{ minWidth: 200, mt: 3, mb: 2, pt: 1 }}>
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

        <Grid item xs={12} md={9} lg={9.5} style={{width: "100", overflowY: 'auto', display: 'flex', flexWrap: 'wrap', /* border:'solid blue', */}}>
          {
            dataIphones.map(({id, product, model, storage, price, colors, condition, description}) => {
              return (
                <Grid key={id} item justifyContent={'center'} xs={6} md={6} lg={4} sx={{/* border: 'solid yellow', */ display: 'flex', alignContent: 'center'}}>
                  <Card sx={{/* border:'solid red', */ width: "18rem", height: "30rem", marginBottom: 3 }}>
                    <CardMedia component="img" image={iPhone15Pro} sx={{height: 350, objectFit: 'contain'}} />
                    <CardContent sx={{/* border: 'solid green' */}}>
                      <Typography gutterBottom variant="h6" component="div">
                        {product} {model}
                      </Typography>
                      <Grid container justifyContent='space-around'>
                        <Chip size='small' label={`${price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}`}/>
                        <Chip size='small' icon={<StorageIcon/>} label={`${storage}`}/>
                        <Chip size='small' icon={<AutoAwesomeIcon/>} label={`${condition}`}/>
                      </Grid>
                    </CardContent>
                    <CardActions sx={{ marginBottom: 1}}>
                      <Grid container gap={1}>
                        {/* <ChipButton label={'Mostrar'} onClick={()=>handleOpenViewProduct({id, product, model, storage, price, condition, description})} icon={<MoreVertIcon/>} /> */}
                        <FormControl sx={{ minWidth: 100}}>
                          <Select
                            name='color'
                            label="Color"
                            variant="standard" 
                            value={selectColor}
                            onChange={handleSelectColor}
                            size='small'
                            color='warning'
                            sx={{height: 35}}
                          >
                            <MenuItem disabled value="">
                              <em>Color</em>
                            </MenuItem>
                            {colors.map(({label, color}) => (
                              <MenuItem key={color} value={label}> 
                                {label} 
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <ChipButton 
                          icon={<VisibilityIcon/>} 
                          label='Ver producto' 
                          onClick={()=>{}} 
                          sx={{
                            backgroundColor: 'blue',
                            color: 'inherit',
                            '&:hover': {background: 'blue', color: '#fff', }
                          }}
                        />
                        <ChipButton 
                          label={'Añadir al carrito'} 
                          onClick={()=>{}} 
                          icon={<AddShoppingCartIcon color='inherit'/>} 
                          sx={{
                            backgroundColor: "#efb810", 
                            color: "black", 
                            '&:hover': {background: '#efb810', color: '#000', }
                          }} 
                        />
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          }
          <ViewProduct 
            open={viewProduct} 
            handleClose={handleCloseViewProduct}
            id={selectProduct.id}
            product={selectProduct.product}
            model={selectProduct.model}
            storage={selectProduct.storage}
            price={selectProduct.price}
            condition={selectProduct.condition}
            description={selectProduct.description}
            onRendered={() => modalRef.current.focus()}
          />
        </Grid>
      </Grid>
      <WhatsAppButton/>
    </Grid>
  );  
}

export default Products;