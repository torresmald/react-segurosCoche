import { createContext, useState } from "react";

const SegurosContext = createContext();

const SegurosProvider = ({ children }) => {
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const handleChangeDatos = (event) => {
        setDatos({...datos, [event.target.name]: event.target.value})
    }
    return (
        <SegurosContext.Provider value={{
            handleChangeDatos
        }}>
            {children}
        </SegurosContext.Provider>
    )
}

export {SegurosProvider}

export default SegurosContext;