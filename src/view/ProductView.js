import React, {useState, useEffect} from 'react'
import CreateProduct from '../components/crud/CreateProduct';
import ListProduct from '../components/crud/ListProduct';
import { getProducts, createProduct } from '../services/product';


export default function ProductView() {

    let [productos, setProductos] = useState([]);

    const getProduct = async () => {
        let data = await getProducts();
        setProductos(data);
    }  

    const addProduct = async (product) => {
        console.log("addProduct", product)
       let data = await createProduct(product);
       getProduct();
    }

    useEffect(() => {
        getProduct();
    }, [])
        
    return (
        <div>
            <h1>Listado de productos</h1>
            <CreateProduct agregarProducto={addProduct} />
            
            <ListProduct  productos={productos} />
            
        </div>
    )
}
 