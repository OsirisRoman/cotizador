import React, { useState } from 'react';

import PropTypes from 'prop-types';

import {
  obtenerDiferenciaDeAño,
  incrementoMarca,
  incrementoPlan,
} from '../../helper';

import {
  Campo,
  Label,
  Select,
  InputRadio,
  Boton,
  Error,
} from './Formulario.styles';

const Formulario = ({ setResumen, setCargando }) => {
  //Estado del componente
  const [variablesCotizacion, setVariablesCotizacion] = useState({
    marca: '',
    año: '',
    plan: '',
  });

  const [error, setError] = useState(false);

  //extraer los valores del state
  const { marca, año, plan } = variablesCotizacion;

  //Leer los datos ingresados por el usuario y guardarlos en el state
  const guardarDatos = (e) => {
    setVariablesCotizacion({
      ...variablesCotizacion,
      [e.target.name]: e.target.value,
    });
  };

  //Cotizar seguro cuando el usuario presione el botón Cotizar
  const cotizarSeguro = (e) => {
    e.preventDefault();

    if (marca === '' || año === '' || plan === '') {
      setError(true);
      return;
    }
    setError(false);

    //Costo base para cálculo del seguro será de 2000
    const costoBase = 2000;

    //Obtener la diferencia de año al año actual
    const diferencia = obtenerDiferenciaDeAño(año);

    //Por cada año hay que restar el 3% del costo base
    let cotizacion = costoBase - (diferencia * 3 * costoBase) / 100;

    //Americano 15%
    //Europeo 30%
    //Asiático 5%
    cotizacion *= incrementoMarca(marca);

    //Básico
    //Completo
    cotizacion = parseFloat(cotizacion * incrementoPlan(plan)).toFixed(2);

    //Muestro el spinner de cargando
    setCargando(true);

    setTimeout(() => {
      //Quito el spinner de cargando
      setCargando(false);

      //Paso la información de la cotización al componente Principal
      setResumen({
        cotizacion,
        variablesCotizacion,
      });
    }, 2000);
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {error ? <Error> Todos los campos son obligatorios </Error> : null}
      <Campo>
        <Label>Marca</Label>
        <Select name='marca' value={marca} onChange={guardarDatos}>
          <option value=''>-- Seleccione --</option>
          <option value='Americano'>Americano</option>
          <option value='Europeo'>Europeo</option>
          <option value='Asiatico'>Asiático</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select name='año' value={año} onChange={guardarDatos}>
          <option value=''>-- Seleccione --</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          <option value='2017'>2017</option>
          <option value='2016'>2016</option>
          <option value='2015'>2015</option>
          <option value='2014'>2014</option>
          <option value='2013'>2013</option>
          <option value='2012'>2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type='radio'
          name='plan'
          value='Básico'
          checked={plan === 'Básico'}
          onChange={guardarDatos}
        />
        Básico
        <InputRadio
          type='radio'
          name='plan'
          value='Completo'
          checked={plan === 'Completo'}
          onChange={guardarDatos}
        />
        Completo
      </Campo>
      <Boton type='submit'>Cotizar</Boton>
    </form>
  );
};

Formulario.propTypes = {
  setResumen: PropTypes.func.isRequired,
  setCargando: PropTypes.func.isRequired,
};

export default Formulario;
