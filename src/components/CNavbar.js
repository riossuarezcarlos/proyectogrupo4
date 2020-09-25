import React, {useState, useContext, useEffect} from 'react'; 
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';

import {CarritoContext} from '../context/carritoContext';
import {Link} from "react-router-dom";
 
import './css/CCarousel.css';

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

export default function CNavbar(){

 const classes = useStyles();
 const [anchorEl, setAnchorEl] = useState(null);

 const [cantProductos, setCantidadProductos] = useState("")
 const { carrito } = useContext(CarritoContext); 

 const ConfigurarCantidadProdCarrito = () =>{
     if (carrito.length === 0) {
        setCantidadProductos("");     
     }else{
        setCantidadProductos(carrito.length);
     } 
 }

 useEffect(() => {
    ConfigurarCantidadProdCarrito();
 })

 const handleClick = (event) => {
   setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
   setAnchorEl(null);
 };

 const open = Boolean(anchorEl);
 const id = open ? 'simple-popover' : undefined;

 return(
     <div>
        <Navbar bg="light" variant="light" expand="lg" fixed="top">
        <Navbar.Brand href="/home">
            <img src="" alt="..." />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
            <Form inline className="mr-auto">
                    <FormControl type="text" placeholder="¿Qué estás buscando?" className="mr-sm-2" />
                    <Button variant="outline-info">Buscar</Button>
            </Form>
            <Nav> 
                <Link to="/user" className="icon">
                    <i className="fas fa-user fa-2x"></i>
                </Link>
                <Link onClick={handleClick}>
                    <i className="fas fa-shopping-cart fa-2x" size="10px" ><span>{cantProductos}</span></i>
                </Link>  
            </Nav>
        </Navbar.Collapse>
        </Navbar>

                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography className={classes.typography}>
                        <Link to="/carrito" className="icon" onClick={handleClose}>
                            Procesar Compra
                        </Link>
                    </Typography>
                </Popover>
     </div>
 )   
}