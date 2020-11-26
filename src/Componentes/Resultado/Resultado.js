import React from 'react';

import PropTypes from 'prop-types';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Mensaje, ContenedorCotización, Cotizacion } from './Resultado.styles';

const Resultado = ({ cotizacion }) => {
  return cotizacion === '' ? (
    <Mensaje>
      Elige la marca, el año y tipo de .... para cotizar tu seguro
    </Mensaje>
  ) : (
    <ContenedorCotización>
      <TransitionGroup component='span' className='resultado'>
        <CSSTransition
          classNames='resultado'
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}>
          <Cotizacion>
            Costo del seguro: $ <span>{cotizacion}</span>
          </Cotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ContenedorCotización>
  );
};

Resultado.propTypes = {
  cotizacion: PropTypes.string.isRequired,
};

export default Resultado;
