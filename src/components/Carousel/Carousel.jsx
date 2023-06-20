

const Carousel = () => {
  return (
<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src="https://www.lolahome.es/media/catalog/category/N3_DESTACADO_MUEBLESJARDIN_SILLASSILLONES_cuDaKQA82O7LMSCT.jpg" className="d-block w-100" alt="..." />
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

  )
}

export default Carousel