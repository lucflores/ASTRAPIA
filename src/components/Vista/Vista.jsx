import './Vista.css';
import { useState } from 'react';

const Vista = () => {
    const [modOscuro, setModOscuro] = useState(false);

    const cabiarModo = () => {
        setModOscuro(!modOscuro)
    }

    const estilo = modOscuro ? "oscuro" : "claro";
  return (
    <div className={estilo}>
            <button onClick={ cabiarModo }> Cambiar</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam repellendus pariatur sapiente quidem officiis at illo eum, eos commodi, quasi, 
        cumque porro tempora nostrum temporibus cupiditate dicta? Reiciendis, qui.</p>
    </div>
  )
}

export default Vista