const productos = [
  {
      "id": "1",
      "idCat": "2",
      "nombre": "Desayunador",
      "descripcion": "Madera laqueada, reforzada con hierros color negro",
      "precio": 19000,
      "cantidad": 10,
      "imagen": "../img1.jpg"
    },
    {
      "id": "2",
      "idCat": "2",
      "nombre": "Mesa ratona",
      "descripcion": "Madera maceza laqueada, de color natural",
      "precio": 15500,
      "stock": 10,
      "imagen": "../img2.jpg"
    },
    {
      "id": "3",
      "idCat": "2",
      "nombre": "Mesa de Luz",
      "descripcion": "Color blanco con detalles en color madera",
      "precio": 15000,
      "stock": 10,
      "imagen": "../img3.jpg"
    },
    {
      "id": "4",
      "idCat": "3",
      "nombre": "Mesa de trabajo",
      "descripcion": "Ideal para trabajar desde casa, reforzada con terminados en negro",
      "precio": 35800,
      "stock": 3,
      "imagen": "../img4.jpg"
    },
    {
      "id": "5",
      "idCat": "3",
      "nombre": "Juego de comedor",
      "descripcion": "Con madera maciza, laqueada, incluye 6 sillas",
      "precio": 82000,
      "stock": 10,
      "imagen": "../img5.jpg"
    },
    {
      "id": "6",
      "idCat": "3",
      "nombre": "Silla",
      "descripcion": "Silla para redecorar esos espacios de la casa, de madera",
      "precio": 12800,
      "stock": 5,
      "imagen": "../img6.jpg"
    }
]

export const getProductos = () => {
  return new Promise((resolve) =>{
    setTimeout ( () => {
      resolve(productos)
    }, 2000)
  })
}

export const getUnProducto = (id) => {
  return new Promise(resolve => {
    setTimeout ( () => {
      const producto = productos.find(prod => prod.id === id);
        resolve(producto);
    }, 2000)
  })
}

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise(resolve => {
    setTimeout ( () => {
      const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
        resolve(productosCategoria);
    }, 100)
  })
}
