import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/authContext';
import COrder from '../components/COrder';
import { getUserbyId } from '../services/user';
import {getOrderByUser} from '../services/order';

let userIdFire = '';
export default function OrderView() {
    const { user } = useContext(AuthContext);

    const [orders, setOrders] = useState([]);
    
    const obtenerUserId = () => {
        user !== null ? 
         userIdFire= user.uid
        :  
         userIdFire = 0;
  
        return userIdFire;
      } 

      const getData = async () => {
        obtenerUserId();
        let dataUser = await getUserbyId(userIdFire);
        let userId = '';

        dataUser.map((item) => {
            userId = item.id;
        });  

        let dataOrder = await getOrderByUser(userId);
        setOrders(dataOrder);
 
      }


      useEffect(() => {
          getData();
      }, [])

    return (
        <div className="d-flex justify-content-center">
            <div style={{width: '800px', marginTop: '5rem', marginBottom: '1rem'}}>
                <h2>Mis Pedidos</h2>
                {
                    orders.map((order, i) => (
                        <COrder key={i} order={order}/>
                    ))
                }
                
            </div>
        </div>
    )
}
