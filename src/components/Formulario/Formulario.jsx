import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Formulario = () => {
  const form = useRef();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_24kljpc', 'template_hm84o3b', form.current, 'qNE0MocXeePvLQ8z6')
      .then((result) => {
        console.log(result.text);
        // Reiniciar los campos después de enviar el formulario
        setNombre('');
        setApellido('');
        setTelefono('');
        setEmail('');
        setMensaje('');

        Swal.fire({
          title: 'Gracias por enviarnos tu sugerencia, te vamos a contestar a la brevedad',
          width: 600,
          padding: '3em',
          color: '#716add',
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>Sugerencias</h2>
      </div>
        <div className="col-md-12 order-md-1">
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="nombre"></label>
                <input type="text" placeholder="Nombre" maxLength={20} className="form-control" id="nombre" name="user_name" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="apellido"></label>
                <input type="text" placeholder="Apellido" maxLength={20} className="form-control" id="apellido" name="user_name" value={apellido} onChange={(e) => setApellido(e.target.value)}required/>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="telefono"></label>
              <input type="tel" placeholder="Telefono" maxLength={20} className="form-control" id="telefono" name="user_number" value={telefono} onChange={(e) => setTelefono(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="email"></label>
              <input type="email" className="form-control" id="email" placeholder="correo@example.com" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="textarea"></label>
              <textarea rows={10} type="textarea" className="form-control" id="textarea" placeholder="Deje aquí su comentario" name="user_message" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
            </div>
            <hr className="mb-4" />
            <button className="btn btn-secondary btn-lg btn-block" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    
  )
}

export default Formulario