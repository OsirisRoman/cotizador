import React from 'react';

import PropTypes from 'prop-types';

import { ContenedorResumen } from './Resumen.styles';

const Resumen = ({ variablesCotizacion }) => {
  const { marca, año, plan } = variablesCotizacion;

  if (marca === '' || año === '' || plan === '') return null;

  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {marca} </li>
        <li>Año: {año}</li>
        <li>Plan: {plan}</li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.propTypes = {
  variablesCotizacion: PropTypes.object.isRequired,
};

export default Resumen;
