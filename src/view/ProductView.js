import React, {useState, useEffect} from 'react'
import CreateProduct from '../components/crud/CreateProduct';
import ListProduct from '../components/crud/ListProduct';
import { getProducts } from '../services/product';
import {Link} from "react-router-dom";

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
        <div style={{marginTop: '5rem', marginBottom: '1rem'}}>
            <h1 className="align-self-center">Listado de productos</h1>  
            <div className="ml-auto mb-3 mt-2">
                <Link className="btn btn-primary btn-sm ml-auto" to={`/createproduct`}>Agregar Producto</Link>
            </div>
            <ListProduct  productos={productos}/> 
        </div>
    )
}
 