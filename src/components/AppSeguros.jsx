import Form from "./Form";
import useSeguros from "../hooks/useSeguros";
import Loading from "./Loading";
import Resultado from "./Resultado";
function AppSeguros() {
    const { cargando} = useSeguros();
    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl">Calcula tu Seguro de Coche</h1>
            </header>
            <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
                <Form />
                {cargando ? <Loading/> : <Resultado />}
            </main>
        
        </>
    );
}

export default AppSeguros;