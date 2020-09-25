import React, {useState, useEffect} from 'react'
import CreateProduct from '../components/crud/CreateProduct';
import ListProduct from '../components/crud/ListProduct';
import { getProducts } from '../services/product';
import {Link} from "react-router-dom"



export default function ProductView() {

    let [productos, setProductos] = useState([]);

    const getProduct = async () => {
        let data = await getProducts();
        setProductos(data);
    }  
 
    useEffect(() => {
        getProduct();
    }, [])
        
    return (
        <div>
            <h1>Listado de productos</h1>  
            <Link className="btn btn-primary btn-sm" to={`/createproduct`}>Agregar Producto</Link>
            <ListProduct  productos={productos}/> 
        </div>
    )
}
 