import { createContext, useState } from "react";
import { diferenciaYears, calculaMarcas, calculaPlan, formateoMoneda } from '../helpers/index.js';
const SegurosContext = createContext();

const SegurosProvider = ({ children }) => {
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const [error, setError] = useState('');
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);

    const handleChangeDatos = (event) => {
        setDatos({ ...datos, [event.target.name]: event.target.value })
    }
    const handleForm = (event) => {
        event.preventDefault();
        if (Object.values(datos).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }
        setError('');
        let resultado = 2000;
        const diferencia = diferenciaYears(datos.year);
        resultado -= ((diferencia * 3) * resultado) / 100;
        resultado *= calculaMarcas(datos.marca);
        resultado *= calculaPlan(datos.plan);
        resultado = formateoMoneda(resultado);
        setCargando(true);
        setTimeout(() => {
            setResultado(resultado);
            setCargando(false)
        }, 3000)
    }
    return (
        <SegurosContext.Provider value={{
            handleChangeDatos, error, setError, datos, handleForm, resultado, cargando
        }}>
            {children}
        </SegurosContext.Provider>
    )
}

export { SegurosProvider }

export default SegurosContext;