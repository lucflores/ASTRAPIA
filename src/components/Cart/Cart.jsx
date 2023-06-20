import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="text-center">
                <div className="d-flex flex-column">
                    <h2>No hay productos en el carrito</h2>
                    <Link to='/categoria/2' className="mb-2 text-secondary" style={{ fontSize: "small" }}>Ver productos</Link>
                </div>
            </div>


        )
    }
    return (
        <div className="container marketing text-center">
            <div className="row">
                <div className="position-relative col-lg-7 mx-auto">
                    {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
                    <small className="text-body-secondary">Cantidad total de productos: {cantidadTotal}</small>
                    <h4 className="text-body-secondary">Total a pagar: ${total}</h4>
                    <button className="btn btn-outline-secondary btn-sm mb-2 mx-2" onClick={() => vaciarCarrito()}>Vaciar carrito</button>
                    <Link to='/checkout' className="btn btn-outline-secondary btn-sm custom-button mb-2 mx-2">Finalizar compra</Link>
                    <Link to='/categoria/2' className="btn btn-outline-secondary btn-sm custom-button mb-2 mx-2">Seguir comprando</Link>
                </div>
            </div>
        </div>



    )
}

export default Cart