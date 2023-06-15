import { useState, createContext } from "react";


export const CarritoContext = createContext({ 
    carrito: [],
    Total: 0,
    cantidadTotal: 0,
    //agregarProducto: () =>{} 
});


export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState ([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);


    const agregarProducto = (item, cantidad) => {
        const productExistente = carrito.find(prod => prod.item.id === item.id);
        if(!productExistente) {
            setCarrito(prev => [...prev, {item, cantidad}]);
            setCantidadTotal( prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        } else {
            const carritoActualizado = carrito.map(prod => {
                if(prod.item.id === item.id){
                    return {...prod, cantidad: prod.cantidad + cantidad};
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setCantidadTotal( prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }
    }
    //Función para eliminar productos del carrito
    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }
    //Función para vaciar carrito de compras
    const vaciarCarrito = () => {
        setCarrito([])
        setCantidadTotal(0);
        setTotal(0);
    }
    //Componente CarritoContext.Provider envia el valor actual del carrito y los métodos a los componentes de la app que lo necesiten.
    return (
        <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito, total, cantidadTotal}}>
        {children}
        </CarritoContext.Provider>
    );
}
