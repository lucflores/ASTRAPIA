

const Carousel = () => {
  return (<>
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={10000}>
          <img src="https://ooiio.com/wp-content/uploads/2021/10/Reforma-Integral-Apartamento-OOIIO-Arquitectura-1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <p className="text-body-secondary">Bienvenido a nuestra tienda, donde el diseño se encuentra con la funcionalidad y la belleza se encuentra con la calidad. Esperamos que encuentres el mueble perfecto que refleje tu estilo y personalidad.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval={2000}>
          <img src="https://www.casa.cat/wp-content/uploads/cocinas-de-lujo.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <p className="text-body-secondary">Bienvenido a nuestra tienda, donde el diseño se encuentra con la funcionalidad y la belleza se encuentra con la calidad. Esperamos que encuentres el mueble perfecto que refleje tu estilo y personalidad.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://www.nelson-mobilier.com/images/1679496158-banner-nelson-2-copia-slide.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <p className="text-body-secondary">Estas opciones de muebles de madera añaden calidez y un toque natural a cualquier ambiente. Son duraderos, resistentes y ofrecen una estética atemporal que combina con una variedad de estilos de decoración.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
    <h3 className='text-center text-body-secondary mx-15'>Bienvenidos</h3>
    <p className="mx-4 my-4 px-4 py-2 text-center text-body-secondary text-muted">En nuestra tienda de muebles de madera, llevamos más de dos décadas creando piezas únicas y duraderas que transforman los espacios en hogares acogedores y llenos de estilo. 
      Nuestra historia comenzó con la pasión por la belleza natural de la madera y el deseo de ofrecer muebles de alta calidad que perduren en el tiempo.
      Desde nuestros modestos inicios en un pequeño taller, nos hemos convertido en un referente en el mundo del diseño y la fabricación de muebles de madera. 
      Nuestro compromiso con la artesanía tradicional y la atención al detalle se refleja en cada pieza que sale de nuestras manos expertas.
      Seleccionamos cuidadosamente las mejores maderas, respetando su origen y asegurando la sostenibilidad de nuestros productos. Cada mueble es diseñado y 
      fabricado por hábiles artesanos que combinan técnicas tradicionales con innovación y creatividad.
      Nuestro catálogo abarca una amplia variedad de estilos, desde clásicos atemporales hasta diseños contemporáneos y vanguardistas. Ya sea que busques una mesa de comedor
      elegante, una cómoda funcional o una cama acogedora, encontrarás la pieza perfecta para complementar tu estilo y decoración.
      Nos enorgullece ofrecer una experiencia de compra excepcional a nuestros clientes. Nuestro equipo de expertos en diseño de interiores y asesores de ventas está aquí
      para ayudarte a encontrar el mueble ideal que se adapte a tus necesidades y gustos personales.
      En cada etapa del proceso, desde la selección de la madera hasta la entrega en tu hogar, nos esforzamos por garantizar la máxima calidad y satisfacción del cliente.
      Tu satisfacción es nuestra mayor recompensa y nos impulsa a seguir creando muebles de madera excepcionales.
      Te invitamos a explorar nuestra colección y descubrir la belleza y calidez de los muebles de madera. Déjanos ser parte de tu historia, 
      creando espacios únicos que reflejen tu personalidad y estilo de vida.</p>
  </>
  )
}

export default Carousel