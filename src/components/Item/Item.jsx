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
                <p className="card-descripcion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis laudantium laboriosam repellendus tenetur aliquid necessitatibus fugit. Expedita sit tempora laborum at assumenda possimus quam eaque. Possimus laborum recusandae exercitationem excepturi.</p>
                <small className="text-body-secondary text-muted">Stock actual {stock}</small>
                <p className="card-descripcion">Precio: ${precio}</p>
                <Link to={`/item/${id}`}>ver detalle</Link>
            </div>
        </div>

    )
}

export default Item