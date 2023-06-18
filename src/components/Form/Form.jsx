import { useState } from "react";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";


const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  const manejadorFormulario = (e) => {
    e.preventDefault();

    addDoc(collection(db, "formulario"), {
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      email: email,
    })
    setNombre("");
    setApellido("");
    setTelefono("");
    setEmail("");
  }

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>Formulario</h2>
      </div>
        <div className="col-md-12 order-md-1">
          <form onSubmit={ manejadorFormulario }>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="nombre"></label>
                <input type="text" placeholder="Nombre" maxLength={20} className="form-control" id="nombre" onChange={(e)=>setNombre(e.target.value)} value={nombre} required/>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="apellido"></label>
                <input type="text" placeholder="Apellido" maxLength={20} className="form-control" id="apellido" onChange={(e)=>setApellido(e.target.value)} value={apellido} required/>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="telefono"></label>
              <input type="tel" placeholder="Telefono" maxLength={20} className="form-control" id="telefono" onChange={(e)=>setTelefono(e.target.value)} value={telefono} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="email"></label>
              <input type="email" className="form-control" id="email" placeholder="correo@example.com" onChange={(e)=>setEmail(e.target.value)} value={email} />
            </div>
            <div className="mb-3">
              <label htmlFor="emailConfirmacion"></label>
              <input type="email" className="form-control" id="emailConfirmacion" placeholder="correo@example.com" onChange={(e)=>setEmailConfirmacion(e.target.value)} value={emailConfirmacion} />
            </div>
            <hr className="mb-4" />
              {error && <p style={{color:"red"}}>{error}</p>}
            <button className="btn btn-primary btn-lg btn-block" type="submit">Enviar</button>
          </form>
          {
            orderId && (
              <strong>¡Gracias por tu compra! Tu numero de orden es {orderId}</strong>
            )
          }
        </div>
      </div>
    
  )
}

export default Form