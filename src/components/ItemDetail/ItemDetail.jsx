import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, nombre, precio, imagen, descripcion}) => {
  return (
    <div className='contenedor-item'>
        <h2>Nombre: {nombre}</h2>
        <img className='img-contenedor-item' src={imagen} alt={nombre} />
        <h3>Precio: ${precio}</h3>
        <h3>ID: ${id}</h3>
        <p>{descripcion}</p>
        <ItemCount />
    </div>
  )
}

export default ItemDetail