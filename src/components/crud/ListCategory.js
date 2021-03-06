import React from 'react'
import Table from 'react-bootstrap/Table'

export default function ListCategory({categorias, deleteCategory}) {
    console.log("ListCategory", categorias)
    return (
        <div>
  
            <Table>
                <thead>
                    <tr>
                        <th>Nro</th>
                        <th>Nombre de Categoría</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
 
                { 
                    categorias.map(
                        (
                            { 
                                id,
                                categoryName
                            }, 
                            i
                        ) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{categoryName}</td>
                            <td>
                                <button className="btn btn-outline-info btn-sm mr-2">
                                    <i className="fas fa-pen-alt"></i>
                                </button>
                                <button className="btn btn-outline-danger btn-sm" onClick={()=>{deleteCategory({id})}}>
                                <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr> 
                        )
                    )                        
                } 
                </tbody>
            </Table>
        </div> 
    )
}
