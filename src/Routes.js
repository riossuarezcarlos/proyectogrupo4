import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'
import HomeView from './view/HomeView'
import ProductView from './view/ProductView'

export default function Routes() {
    return (
        <Fragment>
            <Route exac path="/home" component={HomeView} />
            <Route exac path="/product" component={ProductView} />
        </Fragment>
    )
}
