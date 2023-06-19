
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react';


const ItemDetail = ({ id, nombre, precio, imagen, descripcion, stock }) => {
  //Estado con cantidad de prod agregados
  const [addCantidad, setAddCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  //Función para manejar cantidad
  const manejadorCantidad = (cantidad) => {
    setAddCantidad(cantidad);

    //Crear objeto con ítem y cantidad
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-img-top" style={{ width: "100%", height: "400px" }}>
              <img src={imagen} alt={nombre} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>

            <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
              <p className="text-body-secondary">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-body-secondary">${precio}</small>
                {
                  addCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail