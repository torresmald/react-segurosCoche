import { useContext } from "react";
import SegurosContext from "../context/SegurosContext";

const useSeguros = () => {
    return useContext(SegurosContext)
}

export default useSeguros;