import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);


    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex m-1">
                <button type="button" className="btnItemCount" onClick={incrementar}>+</button>
                <strong>{contador}</strong>
                <button type="button" className="btnItemCount" onClick={decrementar}>-</button>
            </div>
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => funcionAgregar(contador)}>Agregar</button>
        </div>


    )
}

export default ItemCount