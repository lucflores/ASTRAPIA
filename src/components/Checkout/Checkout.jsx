import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";


const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [orderId, setOrderId] = useState("");
    const [error, setError] = useState("");

    const manejadorFormulario = (e) => {
        e.preventDefault();
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }
        if (email !== emailConfirmacion) {
            setError("El mail no coincide");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date(),
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                //Por cada producto en la colección productos obtengo una referencia, y a partir de esa referencia obtengo el doc. 
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                //Data es un método que me permite acceder a la información del Documento. 
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
                //Modifico el stock para luego subir la información actualizada. 
            })
        )

            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrderId(docRef.id);
                        vaciarCarrito();

                        Swal.fire({
                            title: "¡Gracias por tu compra!",
                            text: `Tu número de orden es: ${docRef.id}`,
                            icon: "success",
                            confirmButtonText: "Terminar",
                        });
                    })
                    .catch(error => {
                        console.error("error al crear la orden.", error)
                        setError("Se produjo error al cargar la orden");
                    })
            })

            .catch((error) => {
                console.error("Error al actualizar el stock", error)
                setError("Se produjo un error al actualizar el stock de los productos, vuelva más tarde")
            })


        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setEmailConfirmacion("");
    }

    return (
        <div className="container">
            <div className="py-5 text-center">
                <h2>Finalizar compra</h2>
            </div>
            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Resumen de compra</span>
                        <span className="badge badge-secondary badge-pill">3</span>
                    </h4>

                    <ul className="list-group mb-3">
                        {carrito.map(producto => (
                            <li className="list-group-item d-flex justify-content-between lh-condensed" key={producto.item.id}>
                                <div>
                                    <p className="my-0 text-body-secondary">{producto.item.nombre} x {producto.cantidad}</p>
                                    <small className="text-muted">Descripción</small>
                                </div>
                                <span className="text-muted"> c/u ${producto.item.precio}</span>
                            </li>
                        ))}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total compra:</span>
                            <strong>$ {total}</strong>
                        </li>
                    </ul>
                    <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Código de promoción" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary">Validar</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Completa el formilario para finalizar la compra</h4>
                    <form onSubmit={manejadorFormulario}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" maxLength={20} className="form-control" id="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="apellido">Apellido</label>
                                <input type="text" maxLength={20} className="form-control" id="apellido" onChange={(e) => setApellido(e.target.value)} value={apellido} required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono">Telefono</label>
                            <input type="tel" maxLength={20} className="form-control" id="telefono" onChange={(e) => setTelefono(e.target.value)} value={telefono} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" className="form-control" id="email" placeholder="correo@example.com" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailConfirmacion">Confirmar Correo Electrónico</label>
                            <input type="email" className="form-control" id="emailConfirmacion" placeholder="correo@example.com" onChange={(e) => setEmailConfirmacion(e.target.value)} value={emailConfirmacion} />
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-secondary  btn-block" type="submit">Enviar</button>
                        </div>
                        <hr className="mb-4" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout