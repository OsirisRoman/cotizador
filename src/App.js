import { useState } from 'react';
import Header from './Componentes/Header/Header';

import Formulario from './Componentes/Formulario/Formulario';
import Resumen from './Componentes/Resumen/Resumen';
import Resultado from './Componentes/Resultado/Resultado';

import { Contenedor, ContenedorFormulario } from './App.styles';

function App() {
  //Estado que guardará el resumen de la cotización
  const [resumen, setResumen] = useState({
    cotizacion: '',
    variablesCotizacion: {
      marca: '',
      año: '',
      plan: '',
    },
  });

  return (
    <Contenedor>
      <Header titulo='Cotizador de Seguros' />

      <ContenedorFormulario>
        <Formulario setResumen={setResumen} />
        <Resumen variablesCotizacion={resumen.variablesCotizacion} />
        <Resultado cotizacion={resumen.cotizacion} />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
