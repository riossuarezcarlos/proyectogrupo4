import React from 'react'
import Table from 'react-bootstrap/Table'

export default function ListProduct(props) {
    return (
        <div>
  
            <Table>
                <thead>
                    <tr>
                        <th>Nro</th>
                        <th>Marca</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
 
                { 
                    props.productos.map(
                        (
                            { 
                                productMark,
                                productName,
                                productPrice
                            }, 
                            i
                        ) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{productMark}</td>
                            <td>{productName}</td>
                            <td>{productPrice}</td>
                        </tr> 
                        )
                    )                        
                } 
                </tbody>
            </Table>
        </div> 
    )
}
