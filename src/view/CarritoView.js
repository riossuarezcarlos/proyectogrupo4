import React, { useState, useEffect, useContext } from 'react';

import { CarritoContext } from '../context/carritoContext';
import Count from '../components/CProduct';

export default function CarritoView() {

    const { carrito } = useContext(CarritoContext); 
    const [miCarrito, setMiCarrito] = useState([]); 

    const configurarCarrito = () => {
        setMiCarrito(carrito);
    } 

    useEffect(() => {
        configurarCarrito();
        console.log("carrito",carrito);
    }, [])

    return (
        <div>
            <h1>Mi Carrito</h1>
            <table className = "table">
            <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio Unitario</th>
                        <th>Cantidad</th>
                        <th>Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        miCarrito.map(
                            (
                                {
                                    productId,
                                    productName,
                                    productPrice,
                                    productCant
                                },
                                i
                            ) => (
                                <tr key={i}>
                                    <td>{productName}</td>
                                    <td>{productPrice}</td>
                                    <td>{productCant}</td>
                                    <td>{productPrice * productCant}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
