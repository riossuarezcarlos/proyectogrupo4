import React from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import './css/CProduct.css'

export default function CProduct(product) {
    return (  
        <Card style={{ width: '18rem', margin: '4px' }}>
            
            <Card.Img variant="top" src={product.product.productImg} className="img" />
            <div className="card-body">
                <Card.Title>{product.product.productMark}</Card.Title>
                <Card.Text>{product.product.productName}</Card.Text>
                <Card.Text className="price">Precio: {product.product.productPrice}</Card.Text>
                <Button variant="primary" className="m-2">Ver Detalle</Button>
                <Button variant="primary">Añadir</Button>
            </div>
            </Card> 
    )
}
