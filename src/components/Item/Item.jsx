import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, imagen }) => {
    return (
        <div className='card-contenido'>
            <img className="card-img" src={imagen} alt={nombre} />
            <h2 className="card-nombre"> {nombre} </h2>
            <p className="card-descripcion">Precio: {precio} </p>
            <p>ID: {id} </p>
            {/* <button className="btn btn-secondary">Ver detalles</button> */}
            <Link to={`/item/${id}`}> Ver detalle </Link>
        </div>
    )
}

export default Item