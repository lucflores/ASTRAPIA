

const Form = () => {
    return (
        <div>
            <section className="container">
  <div className="row my-5">
    <div className="col-sm-10 col-md-10 col-lg-12">
      <form action method="POST" className="formulario">
        <h1 className="display-5 mb-5 text-dark text-center">Pedí tu presupuesto</h1>
        <div className="form-group">
          <input type="text" placeholder="Nombre" maxLength={20} id="nombre" className="form-control" />
          <label />
        </div>
        <div className="form-group">
          <input type="email" name="txtCorreo" id="txtCorreo" required className="form-control" placeholder="example@correo.com" />
          <label />
        </div>
        <div className="form-group">
          <input type="tel" name="txtTelefono" id="txtTelefono" required placeholder="(011) 9999-9999" className="form-control" />
          <label />
        </div>
        <div className="form-group">
          <select name="lstAsunto" id="lstAsunto" className="form-control">
            <option value disabled selected>
              Asunto &gt;&gt; seleccionar
            </option>
            <option value="Presupuesto">Presupuesto</option>
            <option value="Webmaster">Webmaster</option>
            <option value="Otros">Otros</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="txtMensaje">Mensaje:</label>
          <textarea name="txtMensaje" id="txtMensaje" cols={30} rows={10} className="form-control" defaultValue={""} />
        </div>
        <div className="form-group">
          <input type="checkbox" name="chkNewsletter" id="chkNewsletter" defaultChecked />
          <label htmlFor="chkNewsletter text-bg-light">Deseo recibir novedades</label>
        </div>
        <div className="form-group">
          <input type="checkbox" name="chkCondiciones" id="chkCondiciones" />
          <label htmlFor="chkCondiciones text-bg-light">Acepto terminos y condiciones</label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-light btn-lg">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</section>

        </div>
    )
}

export default Form