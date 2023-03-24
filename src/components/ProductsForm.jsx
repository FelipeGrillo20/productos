import { useForm } from "react-hook-form";
import { useEffect } from "react";


const ProductsForm = ({createProduct, seletedProduct, updateProduct}) => {

    const {register, handleSubmit, formState:{errors}, reset} = useForm()

   

    useEffect(()=>{
        if( seletedProduct ){ 
            reset( seletedProduct )
        }else{
            emptyForm()
        }
    }, [ seletedProduct ]);


    const submit = data => {     
        if(seletedProduct){
            updateProduct( data )
        }else{    
            createProduct(data)
            emptyForm()
        }
        
    }


    const emptyForm = () => {
        reset(
            {
                name: "",
                category: "",
                price: "",
                isAvailable: (false)

            }
        )
    }

    

    return (
        <div className="formulario">
            <form onSubmit={ handleSubmit(submit) }>
                <div>
                    <label htmlFor="name">Nombre Producto: </label>
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Escribe el nombre producto..." 
                    { ...register("name", {required:true}) }
                    />
                </div>
                <div>
                    <label htmlFor="category">Categoria: </label>
                    <input 
                    type="text"
                    id="category"
                    name="category"
                    placeholder="Escriba la catergoria..." 
                    { ...register("category", {required:true}) }
                    />
                </div>
                <div>
                    <label htmlFor="price">Precio: </label>
                    <input 
                    type="text" 
                    id="price" 
                    name="price"
                    placeholder="Precio..."
                    { ...register("price", {required:true}) }
                    />
                </div>
                <div>
                    <label htmlFor="”isAvailable">Disponible: </label>
                    <input 
                    className="checkbox"
                    type="checkbox"
                    name="isAvailable"
                    id="isAvailable" 
                    { ...register("isAvailable", {required:false}) }           
                    />
                </div>
                <div className="button-registro">
                    <button type="submit">Completar registro</button>
                </div>
            </form>       
        </div>
    );
};

export default ProductsForm;
