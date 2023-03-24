

const ProductsList = ({productsData, deleteProductAction, selectProduct}) => {

    const confirmDelete = (id) => {
        const resultConfirm = confirm("Deseas Eliminar al producto?")
        if( resultConfirm )deleteProductAction(id)
    }

    return (
        <ul className="card-info">
            {
                productsData?.map( product => (
                <li key={ product.id }>
                    <p><span>Nombre producto: </span>{ product.name } </p>
                    <p><span>Categoria: </span>{ product.category }</p>
                    <p><span>Precio: </span> {product.price} </p>
                    <p><span>Disponibilidad: </span> {(product.isAvailable) ? "Disponible": "No Disponible" } </p>
                    <div className="button-list">
                        <button className="delete" onClick={ () => confirmDelete(product.id) }>Eliminar</button>
                        <button className="update" onClick={ () => selectProduct(product) }>Editar</button>
                    </div>
                </li>
                ))
            }

        </ul>
    );
};

export default ProductsList;