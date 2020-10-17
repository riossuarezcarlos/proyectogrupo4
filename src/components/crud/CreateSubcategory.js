import React, { useState, useEffect } from 'react' 
import { getCategories } from '../../services/category';  
import { createSubcategory } from '../../services/subcategory';
import Swal from 'sweetalert2';
import { useHistory } from  'react-router-dom';
 
import { useForm } from "react-hook-form";
 

export default function CreateSubcategory(){

    const history = useHistory();
    let { register, handleSubmit, errors} = useForm();
 
    const [categories, setCategories] = useState([]); 

    const manejarSubmit = async (data) => {     

        //Ahora simplemente le pasamos data a firebase
        let subcategoryC = await createSubcategory(data);  
         
        Swal.fire({
            icon: "success",
            title: "Producto creado exitosamente",
            showConfirmButton: false,
            timer: 1000
        })
      
        return history.push('/subcategory');

    }
  
    const getCategory = async () => {
        let data = await getCategories(); 
        setCategories(data);
    } 
  
    //* Validar Select **/
    
    let validateSelect = (value) => {
        console.log("value", value);
        if(value === "0"){
            return false;
        }else{
            return true;
        }
    }

  
    useEffect(() => {
        getCategory(); 
    },[])

    return (

        <div className="d-flex justify-content-center">
              <form
                onSubmit={handleSubmit(manejarSubmit)}
                >

                    <div style={{width: '600px', marginTop: '5rem', marginBottom: '1rem'}}>
                        <div className="card mt-3">
                            <div className="card-body" style={{paddingTop:'10px', paddingBottom: '0px'}}>

                                <h1 className="align-self-center">Agregar una nueva sub categoria</h1>  

                                <div className="form-group">
                                    <label>Categoria de Producto</label>
                                    <select name="categoryId" className="form-control" 
                                        ref={register({validate:validateSelect})
                                    }>
                                        <option value="0">Seleccionar Categoria</option> 
                                        {
                                            categories.map((elm,i) => (
                                                <option key={i} value={elm.id}>{elm.categoryName}</option>
                                            ))
                                        }
                                    </select>
                                    {
                                        errors.categoryId && errors.categoryId.type ==="validate" && (
                                            <small className="text-danger font-weight-bold">Debe seleccionar una categoria de producto</small>
                                        )
                                    }
                                </div>
                            
                                <div className="form-group">
                                    <label htmlFor="subcategoryName">Nombre Subcategoria:</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="subcategoryName"
                                    name="subcategoryName"
                                    ref={register({required:true, minLength:2, maxLength:20})}
                                    />
                                    {errors.subcategoryName && errors.subcategoryName.type === 'required' && (
                                    <small className="text-danger font-weight-bold">Debe ingresar el nombre de la subcategoria</small>
                                    )}
                                    {
                                        errors.subcategoryName && errors.subcategoryName.type === "minLength" && (
                                            <small className="text-danger font-weight-bold">El nombre no puede ser menor a 2 digitos</small>
                                        )
                                    }
                                    {
                                        errors.subcategoryName && errors.subcategoryName.type === "maxLength" && (
                                            <small className="text-danger font-weight-bold">El nombre no puede ser mayor a 20 digitos</small>
                                        )
                                    }
                                </div>
                       
                            <button type="submit" className="btn btn-primary btn-lg btn-block">
                                Agregar nueva subcategoria
                            </button>

                            </div>
                        </div> 
                    </div>

                </form>

            </div>
 
    )
}
 