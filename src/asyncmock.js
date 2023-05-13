const productos = [
  {
      "id": 1,
      "nombre": "Desayunador",
      "descripcion": "Madera laqueada, reforzada con hierros color negro",
      "precio": 19000,
      "cantidad": 1,
      "imagen": "./img1.jpg"
    },
    {
      "id": 2,
      "nombre": "Meza ratona",
      "descripcion": "Madera maceza laqueada, de color natural",
      "precio": 15500,
      "cantidad": 1,
      "imagen": "./img2.jpg"
    },
    {
      "id": 3,
      "nombre": "Meza de Luz",
      "descripcion": "Color blanco con detalles en color madera",
      "precio": 15000,
      "cantidad": 1,
      "imagen": "./img3.jpg"
    },
    {
      "id": 4,
      "nombre": "Meza de trabajo",
      "descripcion": "Ideal para trabajar desde casa, reforzada con terminados en negro",
      "precio": 35800,
      "cantidad": 1,
      "imagen": "./img4.jpg"
    },
    {
      "id": 5,
      "nombre": "Juego de comedor",
      "descripcion": "Con madera maciza, laqueada, incluye 6 sillas",
      "precio": 82000,
      "cantidad": 1,
      "imagen": "./img5.jpg"
    },
    {
      "id": 6,
      "nombre": "Silla",
      "descripcion": "Silla para redecorar esos espacios de la casa, de madera",
      "precio": 12800,
      "cantidad": 1,
      "imagen": "./img6.jpg"
    }
]

export const getProductos = () => {
  return new Promise((resolve) =>{
    setTimeout ( () => {
      resolve(productos)
    }, 2000)
  })
}