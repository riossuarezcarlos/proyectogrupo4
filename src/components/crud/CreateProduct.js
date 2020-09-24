import React, { useState, useEffect } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Form, Button } from 'react-bootstrap'
import { getCategories } from '../../services/category';
import { getSubCategories } from '../../services/subcategory';
import { getProductTypes } from '../../services/producttype';
import { getLabels } from '../../services/label';

export default function CreateProduct({agregarProducto}) {   

    const [nombreProducto, setNombreProducto] = useState("");
    const [marcaProducto, setMarcaProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState("");
    const [labelProducto, setLabelProducto] = useState("");
    const [categoriaProducto, setCategoriaProducto] = useState("");
    const [subCategoriaProducto, setSubCategoriaProducto] = useState("");



    const [labels, setLabels] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [productTypes, setProductTypes] = useState([]);
  
    const AnadirProducto = () => {    
        let productoAnadir = {
            productName: nombreProducto,
            productMark: marcaProducto,
            productPrice: precioProducto,
            productLabel: labelProducto
        } 
        agregarProducto(productoAnadir); 
        limpiarControles();
    }

    const limpiarControles = () =>{
        setNombreProducto("");
        setMarcaProducto("");
        setPrecioProducto("");
        setLabelProducto("");
    }

    const getCategory = async () => {
        let data = await getCategories(); 
        setCategories(data);
    } 

    const getSubCategory = async (categoryId) => { 
        let data = await getSubCategories(categoryId); 
        setSubCategories(data);
    } 

    const getProductType = async (subCategoryId) => { 
        let data = await getProductTypes(subCategoryId); 
        setProductTypes(data);
    } 

    const getLabel = async () => {
        let data = await getLabels(); 
        setLabels(data);
    } 


    const asignarCategoria = (categoria) =>{
        getSubCategory(categoria);
        setCategoriaProducto(categoria);
    }

    const asignarSubCategoria = (subcategoria) =>{
        getProductType(subcategoria);
        setSubCategoriaProducto(subcategoria);
    }

    useEffect(() => {
        getCategory();
        getLabel();
    },[])

    return (

        <Jumbotron className="mt-4"> 
            <Form> 
                    <Form.Group>
                    <Form.Control as="select" onChange={(ev) => {asignarCategoria(ev.target.value)}}>
                            <option key={0} value={0}>Seleccionar Categoria</option>
                            {
                                categories.map((elm,i) => (
                                    <option key={i} value={elm.id}>{elm.categoryName}</option>
                                ))
                            }
                    </Form.Control> 

                    <Form.Control as="select" onChange={(ev) => {asignarSubCategoria(ev.target.value)}}>
                            <option key={0} value={0}>Seleccionar Subcategoria</option>
                            {
                                subCategories.map((elm,i) => (
                                    <option key={i} value={elm.id}>{elm.subcategoryName}</option>
                                ))
                            }
                    </Form.Control> 

                    <Form.Control as="select" onChange={(ev) => {setSubCategoriaProducto(ev.target.value)}}>
                            <option key={0} value={0}>Seleccionar Tipo de Producto</option>
                            {
                                productTypes.map((elm,i) => (
                                    <option key={i} value={elm.id}>{elm.producttypeName}</option>
                                ))
                            }
                    </Form.Control> 

                    <Form.Control as="select" onChange={(ev) => {setLabelProducto(ev.target.value)}}>
                            <option key={0} value={0}>Seleccionar Etiqueta</option>
                            {
                                labels.map((elm,i) => (
                                    <option key={i} value={elm.id}>{elm.labelName}</option>
                                ))
                            }
                    </Form.Control> 


                    <Form.Control type="text" placeholder="Nombre del producto" value={nombreProducto} onChange={(ev) => {setNombreProducto(ev.target.value)}}/>
                    <Form.Control type="text" placeholder="Marca del producto" required value={marcaProducto} onChange={(ev) => {setMarcaProducto(ev.target.value)}}/>
                    <Form.Control type="number" placeholder="###.00" value={precioProducto} onChange={(ev) => {setPrecioProducto(ev.target.value)}}/>
                </Form.Group>

                <Button block variant="primary" onClick={() => {AnadirProducto();}}>Agregar nuevo producto</Button> 

            </Form> 
        </Jumbotron>
 
    )
}
