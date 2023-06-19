import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal, imagen, nombre } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2> No hay productos en el carrito </h2>
                <Link to='/'>Ver productos</Link>
            </>
        )
    }
    return (
        <div className="container marketing">
            <div className="row">
                <div className="col-lg-4">
                    {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
                    <div className="card-img-top" style={{ width: "100%", height: "400px" }}>
                        <img src={imagen} alt={nombre} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                    </div>
                    <h3>Total: ${total}</h3>
                    <h3>Cantidad total: {cantidadTotal}</h3>
                    <button onClick={() => vaciarCarrito()}> Vaciar carrito </button>
                    <Link to='/checkout'> Finalizar compra </Link>
                </div>
            </div>
        </div>

    )
}

export default Cart