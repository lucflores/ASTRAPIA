import { useState } from "react";

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);


    const incrementar = () =>{
        if (contador < stock){
        setContador(contador + 1);
        }
    }
    const decrementar = () =>{
        if (contador > inicial) {
        setContador(contador - 1);
        }
    }

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={ incrementar }> + </button>
            <strong> {contador} </strong>
            <button type="button" className="btn btn-primary" onClick={ decrementar }> - </button>
            <br /> <br />

            <button type="button" className="btn btn-primary" onClick={()=> funcionAgregar(contador)}> Agregar </button>
        </div>
    )
}

export default ItemCount