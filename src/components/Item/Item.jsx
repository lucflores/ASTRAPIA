import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, imagen, stock, descripcion }) => {
    return (
        <div className="card card-contenido">
            <div className="card-img-top" style={{ width: "110%", height: "300px" }}>
                <img src={imagen} alt={nombre} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
            <div className="card-body">
                <h2 className="card-nombre">{nombre}</h2>
                <p className="card-descripcion"> {descripcion} </p>
                <small className="text-body-secondary text-muted">Stock actual {stock}</small>
                <p className="card-descripcion">Precio: ${precio}</p>
                <div className="d-flex justify-content-end">
                    <Link to={`/item/${id}`} className="mb-2 text-secondary" style={{ fontSize: "small" }}>ver detalle</Link>
                </div>
            </div>
        </div>


    )
}

export default Item