import AppSeguros from "./components/AppSeguros";
import { SegurosProvider } from "./context/SegurosContext";
function App() {
  return (
    <>
      <SegurosProvider>
        <AppSeguros />
      </SegurosProvider>
    </>
  )
}

export default App
