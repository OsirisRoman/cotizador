import Header from './Componentes/Header/Header';

import Formulario from './Componentes/Formulario/Formulario';

import { Contenedor, ContenedorFormulario } from './App.styles';

function App() {
  return (
    <Contenedor>
      <Header titulo='Cotizador de Seguros' />

      <ContenedorFormulario>
        <Formulario></Formulario>
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
