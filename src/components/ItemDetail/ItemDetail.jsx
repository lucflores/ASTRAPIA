import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState} from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react';


const ItemDetail = ({id, nombre, precio, imagen, descripcion, stock}) => {
  //Estado con cantidad de prod agregados
  const [addCantidad, setAddCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

  //Función para manejar cantidad
  const manejadorCantidad = (cantidad) => {
    setAddCantidad(cantidad);
    
    //Crear objeto con ítem y cantidad
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedor-item'>
        <h2>Nombre: {nombre}</h2>
        <img className='img-contenedor-item' src={imagen} alt={nombre} />
        <h3>Precio: ${precio}</h3>
        <h3>ID: {id}</h3>
        <p>{descripcion}</p>
        
        {
          addCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
        
    </div>
  )
}

export default ItemDetail