import { useState, useEffect } from "react";

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    const [color, setColor] = useState("black")
    let maximoStock = 10;

    useEffect ( () => {
        if(contador > 5){
            setColor("red")
        } else {
            setColor("black")
        }
    }, [contador])

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
            <strong> {contador} </strong>
            <button type="button" className="btn btn-primary" onClick={ decrementar }> - </button>
            <br /> <br />

            <button type="button" className="btn btn-primary" onClick={addCarrito} style={{color:color}}>Agregar</button>
        </div>
    )
}

export default ItemCount