import React, { useState } from 'react';

import { Campo, Label, Select, InputRadio, Boton } from './Formulario.styles';

const Formulario = () => {
  //Estado del componente
  const [variablesCotizacion, setVariablesCotizacion] = useState({
    marca: '',
    año: '',
    plan: '',
  });

  //extraer los valores del state
  const { marca, año, plan } = variablesCotizacion;

  //Leer los datos ingresados por el usuario y guardarlos en el state
  const guardarDatos = (e) => {
    setVariablesCotizacion({
      ...variablesCotizacion,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <Campo>
        <Label>Marca</Label>
        <Select name='marca' value={marca} onChange={guardarDatos}>
          <option value=''>-- Seleccione --</option>
          <option value='americano'>Americano</option>
          <option value='europeo'>Europeo</option>
          <option value='asiatico'>Asiático</option>
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
          value='basico'
          checked={plan === 'basico'}
          onChange={guardarDatos}
        />
        Básico
        <InputRadio
          type='radio'
          name='plan'
          value='completo'
          checked={plan === 'completo'}
          onChange={guardarDatos}
        />
        Completo
      </Campo>
      <Boton type='button'>Cotizar</Boton>
    </form>
  );
};

export default Formulario;
