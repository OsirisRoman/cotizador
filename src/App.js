import { useState } from 'react';
import Header from './Componentes/Header/Header';

import Formulario from './Componentes/Formulario/Formulario';
import Resumen from './Componentes/Resumen/Resumen';
import Resultado from './Componentes/Resultado/Resultado';
import Spinner from './Componentes/Spinner/Spinner';

import {
  Contenedor,
  ContenedorFormulario,
  ContenedorDescripcion,
} from './App.styles';

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

  const [cargando, setCargando] = useState(false);

  return (
    <Contenedor>
      <Header titulo='Cotizador de Seguros' />
      <div className='container'>
        <ContenedorDescripcion>
          Esta app simula una cotización de seguros de acuerdo a las opciones
          que el usuario escoja. Hace uso de styled components, react hooks y
          animaciones 🎉
        </ContenedorDescripcion>
      </div>

      <ContenedorFormulario>
        <Formulario setResumen={setResumen} setCargando={setCargando} />
        <Resumen variablesCotizacion={resumen.variablesCotizacion} />
        {cargando ? <Spinner /> : null}
        {!cargando ? <Resultado cotizacion={resumen.cotizacion} /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
