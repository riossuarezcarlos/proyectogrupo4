import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'
import HomeView from './view/HomeView'
import ProductView from './view/ProductView'
import CarritoView from './view/CarritoView'
import CreateProduct from './components/crud/CreateProduct'



export default function Routes() {
    return (
        <Fragment>
            <Route exac path="/home" component={HomeView} />
            <Route exac path="/product" component={ProductView} />
            <Route exac path="/carrito" component={CarritoView} />
            <Route exac path="/createproduct" component={CreateProduct} />
        </Fragment>
    )
}
