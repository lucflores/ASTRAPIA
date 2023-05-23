import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, imagen, descripcion}) => {
  return (
    <div className='contenedor-item'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: ${precio}</h3>
        <h3>ID: ${id}</h3>
        <p>{descripcion}</p>
        <img className='img-contenedor-item' src={imagen} alt={nombre} />
    </div>
  )
}

export default ItemDetail