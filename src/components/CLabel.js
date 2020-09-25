import React, { useState, useEffect, useContext } from 'react'
import CProduct from './CProduct'
import { getProductsByLabel } from '../services/product' 

export default function CCLabel({label}) {
 

    const [productos, setProductos] = useState([]);

    const getProducts = async () => {
        let data = await getProductsByLabel(label.id);
        setProductos(data);
    }

    useEffect(() => {
        getProducts();
    }, []) 

    return (
        <div>
            <div>
                <h3>{label.labelName}</h3>
            </div>
            <div className="row">
            {
                productos.map((prod, i) => (
                    <CProduct product={prod} key={i} />
                ))
            }
            </div>
        </div>
    )
}
