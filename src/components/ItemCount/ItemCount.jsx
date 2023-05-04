import { useState } from "react";

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    let maximoStock = 10;

    const incrementar = () =>{
        if (contador < maximoStock)
        setContador(contador + 1);
    }
    const decrementar = () =>{
        if (contador > 1) {
        setContador(contador - 1);
        }
    }

    const addCarrito = () => {
        console.log(`Agregados ${contador} items`)
    }
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={ incrementar }> + </button>
            <p className="text-dark"> {contador} </p>
            <button onClick={ decrementar }> - </button>
            <br /> <br />

            <button onClick={addCarrito}>Agregar</button>
        </div>
    )
}

export default ItemCount