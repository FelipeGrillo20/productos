import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductsForm from './components/ProductsForm'
import ProductsList from './components/ProductsList'

function App() {

  const [products, setProducts] = useState([])
  const [productUpdate, setProductUpdate] = useState(null)

  useEffect( () => {
    getProduct()
  }, [])


  const getProduct = () => {
    axios
    .get("https://products-crud.academlo.tech/products/")
    .then(resp => setProducts(resp.data))
    .catch(error => console.log(error))
  }



  const addProduct = productData => {
    axios
      .post("https://products-crud.academlo.tech/products/", productData )
      .then( () => getProduct() ) 
      .catch( error => console.log(error) )
  }

  //DELETE
  const deleteProduct = idProduct => {
    axios
      .delete(`https://products-crud.academlo.tech/products/${idProduct}/`)
      .then(() => getProduct() )
      .catch(error=> console.log(error))
  }


//UPDATE

const selectProduct = productData => {
  setProductUpdate(productData)
}

const productActualizacion = productData => {
  
  axios
    .put(`https://products-crud.academlo.tech/products/${productData.id}/`, productData)
    .then(() =>{ 
    getProduct() 
    setProductUpdate( null )
    })  
    .catch(error => console.error(error))

}
  


  return (
    <div className="container">
      <ProductsForm
      createProduct={data => addProduct(data)}
      seletedProduct={ productUpdate }
      updateProduct={data=> productActualizacion(data) }
      />
      <div className='productlist'>
      <ProductsList
      productsData={ products }
      deleteProductAction={id => deleteProduct(id) }
      selectProduct={data=> selectProduct(data)}
      />
      </div>

    </div>
  )
}

export default App
