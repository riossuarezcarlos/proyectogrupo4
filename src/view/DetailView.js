import React, { useState, useEffect, useContext,  Fragment} from 'react' 
import { getProductbyId } from '../services/product' 
import { CarritoContext } from '../context/carritoContext'
import Count from '../components/CCount'
import Swal from 'sweetalert2'

export default function DetailView(props) {
    //recuperar el Id
    const productoId = props.match.params.id;  
    //context
    const {carrito, anadirProducto} = useContext(CarritoContext); 

     //Estados Local 
    const [miProducto, setMiProducto] = useState([])
    const [cantidad, setCantidad] = useState(1)
 
    //Obtener productos
    const getProduct = async () => {
        let productoObtenido = await getProductbyId(productoId);
        setMiProducto(productoObtenido[0]);
        
                  
    }

    const anadirAlCarrito = () => {
        let productoAnadir = {
            productId: miProducto.id,
            productName: miProducto.productName, 
            productPrice: miProducto.productPrice, 
            productMark: miProducto.productMark, 
            productImg: miProducto.productImg, 
            productCant: cantidad, 
        }
        anadirProducto(productoAnadir);

        Swal.fire({
            icon: "success",
            title: "Se añadio el producto",
            showConfirmButton: false,
            timer: 2000
        })
    } 

    useEffect(() => {
        getProduct();
    }, []);

    return ( 
        <div className="mt-3">
        <div className="row">
            <div className="col-12 col-lg-6">
                <img src={miProducto.productImg} alt="..." className="img-fluid"/>
            </div>
            <div className="col-12 col-lg-6">
                <h1>{miProducto.productMark}</h1>
                <h1>{miProducto.productName}</h1>
                <h2>Precio: {miProducto.productPrice}</h2> 
                <Count cantidadProductos={cantidad} actualizarCantidad={setCantidad}/>
                <button className="btn btn-primary btn-sm" onClick={() => {anadirAlCarrito()}}>Agregar al carrito</button>
            </div>
        </div>
    </div> 
    )
}
