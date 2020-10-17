import React, { useState, useEffect } from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron';  
import { getLabels } from '../../services/label';
import { createLabel } from '../../services/label';
import Swal from 'sweetalert2';
import { useHistory } from  'react-router-dom';
 
import { useForm } from "react-hook-form";

let imagenProducto;

export default function CreateCategory(){

    const history = useHistory();
    let { register, handleSubmit, errors} = useForm();
  
    const manejarSubmit = async (data) => {    

        console.log("data", data);

        //Ahora simplemente le pasamos data a firebase
        let categoryC = await createLabel(data);  

        //Mostramos el alert
        Swal.fire({
            icon: "success",
            title: "Producto creado exitosamente",
            showConfirmButton: false,
            timer: 1000
        })

        let validateSelect = (value) => {
            console.log("value", value);
            if(value === "0"){
                return false;
            }else{
                return true;
            }
        }

        // regresamos a la pagina principal
        return history.push('/label');
        
    }
   
    return (

        <div className="d-flex justify-content-center">
              <form
                onSubmit={handleSubmit(manejarSubmit)}
                >

                    <div style={{width: '600px', marginTop: '5rem', marginBottom: '1rem'}}>
                        <div className="card mt-3">
                            <div className="card-body" style={{paddingTop:'10px', paddingBottom: '0px'}}>

                                <h1 className="align-self-center">Agregar una nueva Etiqueta</h1>  
                            
                                <div className="form-group">
                                    <label htmlFor="categoryName">Nombre de Etiqueta:</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="labelName"
                                    name="labelName"
                                    ref={register({required:true, minLength:2, maxLength:20})}
                                    />
                                    {errors.labelName && errors.labelName.type === 'required' && (
                                    <small className="text-danger font-weight-bold">Debe ingresar el nombre de la etiqueta</small>
                                    )}
                                    {
                                        errors.labelName && errors.labelName.type === "minLength" && (
                                            <small className="text-danger font-weight-bold">El nombre de la etiqueta no puede ser menor a 2 digitos</small>
                                        )
                                    }
                                    {
                                        errors.labelName && errors.labelName.type === "maxLength" && (
                                            <small className="text-danger font-weight-bold">El nombre de la etiqueta no puede ser mayor a 20 digitos</small>
                                        )
                                    }
                                </div>
                       
                            <button type="submit" className="btn btn-primary btn-lg btn-block">
                                Agregar nueva Etiqueta
                            </button>

                            </div>
                        </div> 
                    </div>

                </form>

            </div>
 
    )
}
 