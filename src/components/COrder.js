import React, {useState, useEffect} from 'react';
import {getOrderDetailByOrder } from '../services/orderdetail';
import OrderDetailView from '../view/OrderDetailView';
import './css/COrder.css'

export default function COrder({order}) {

    const [orderId, setOrderId] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const [orderTotal, setOrderTotal] = useState('');

    const [products, setProducts] = useState([]);


    const getProducts = async () =>{ 
        let data = await getOrderDetailByOrder(orderId);
        setProducts(data);
        
    }

    const showData = () => { 
        setOrderId(order.id);
        let fecha = new Date(order.orderDate); 
        let fechaletra = fecha.toString().replace(' GMT-0500 (hora estándar de Perú)','');
        setOrderDate(fechaletra);
        setOrderTotal(order.orderTotal)
    }

    useEffect(() => {
        showData();
    }, [])

    useEffect(() =>{
        getProducts();
    }, [orderId])


    const showDetail = (order) =>{
        return(
            <OrderDetailView order={order}/>
        )
    }



    return (

    <div className="mt-4">
            <div  className="card cabecera">
                <div className="m-2 general">
                    Pedido N° {orderId}    |   Fecha de pedido {orderDate}| Total {orderTotal}
                </div>
                <div className="m-2">
                    <button className="btn btn-outline-primary mr-4" onClick={() => {showDetail(order)}}>Ver Pedido</button>
                </div>
             </div>
            <div  className="card mb-4"> 
                {
                    products.map((prod,i) => (
                        
                        <div className="d-flex justify-content-center flex-row m-4" style={{ marginTop: '4px'}} key={i}> 
                            <div className="d-flex align-items-center">
                                <img src={prod.productImg} alt="..." className="imgpopover" />
                            </div>
                            <div className="card-body pt-1 pb-1 pl-2 pr-2">
                                <h5 className="marca">{prod.productMark}</h5> 
                                <h5 className="texto">{prod.productName}</h5>
                                <h5 className="texto">Precio: {prod.productPrice}</h5>
                                <h5 className="texto">Cantidad:{prod.productCant}</h5>                    
                            </div>
                        </div> 
                        
                    ))
                }   
            </div>
    </div>
    )
}
