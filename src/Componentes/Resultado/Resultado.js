import React from 'react';

import { Mensaje, ContenedorCotización, Cotizacion } from './Resultado.styles';

const Resultado = ({ cotizacion }) => {
  return cotizacion === '' ? (
    <Mensaje>
      Elige la marca, el año y tipo de .... para cotizar tu seguro
    </Mensaje>
  ) : (
    <ContenedorCotización>
      <Cotizacion>Costo del seguro: $ {cotizacion}</Cotizacion>
    </ContenedorCotización>
  );
};

export default Resultado;
