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
                <i className="fas fa-caret-right fa-2x" />
                <span style={{ color: 'gray', fontSize: '26px', paddingLeft: '20px', fontWeight: 'bolder' }}>{label.labelName}</span>
            </div>
            <div className="d-flex justify-content-center">
            {
                productos.map((prod, i) => (
                    <CProduct product={prod} key={i} />
                ))
            }
            </div>
        </div>
    )
}
