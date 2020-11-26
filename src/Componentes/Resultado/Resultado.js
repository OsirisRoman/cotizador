import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Mensaje, ContenedorCotización, Cotizacion } from './Resultado.styles';

const Resultado = ({ cotizacion }) => {
  return cotizacion === '' ? (
    <Mensaje>
      Elige la marca, el año y tipo de .... para cotizar tu seguro
    </Mensaje>
  ) : (
    <ContenedorCotización>
      <TransitionGroup component='p' className='resultado'>
        <CSSTransition
          classNames='resultado'
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}>
          <Cotizacion>Costo del seguro: $ {cotizacion}</Cotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ContenedorCotización>
  );
};

export default Resultado;
