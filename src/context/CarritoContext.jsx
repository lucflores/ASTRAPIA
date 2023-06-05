import { useState, createContext } from "react";

export const CarritoContext = createContext({ carrito: [], agregarProducto: () =>{} });


export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState ([]);

    console.log(carrito);

    const agregarProducto = (item, cantidad) => {
        const productExistente = carrito.find(prod => prod.item.id === item.id);
        if(!productExistente) {
            setCarrito(prev => [...prev, {item, cantidad}]);
        } else {
            const carritoActualizado = carrito.map(prod => {
                if(prod.item.id === item.id){
                    return {...prod, cantidad: prod.cantidad + cantidad};
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
        }
    }
    //Función para eliminar productos del carrito
    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(prod => prod.id !== id);
        setCarrito(carritoActualizado);
    }
    //Función para vaciar carrito de compras
    const vaciarCarrito = () => {
        setCarrito([])
    }
    //Componente CarritoContext.Provider envia el valor actual del carrito y los métodos a los componentes de la app que lo necesiten.
    return (
        <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito}}>
        {children}
        </CarritoContext.Provider>
    );
}
