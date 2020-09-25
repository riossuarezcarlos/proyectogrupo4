import React, {Fragment} from 'react'
import {Route, Redirect} from 'react-router-dom'
import HomeView from './view/HomeView'
import ProductView from './view/ProductView'
import DetailView from './view/DetailView'
import CarritoView from './view/CarritoView'
import CreateProduct from './components/crud/CreateProduct'
import LoginView from './view/LoginView'
import Registerview from './view/RegisterView'

export default function Routes() {
    return (
        <Fragment>
            <Redirect from='/' to='/home' />
            <Route exac path="/home" component={HomeView} />
            <Route exac path="/product" component={ProductView} />
            <Route exac path="/productdetail/:id" component={DetailView} />
            <Route exac path="/car" component={CarritoView} />
            <Route exac path="/createproduct" component={CreateProduct} />
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/register" component={Registerview} />
        </Fragment>
    )
}
