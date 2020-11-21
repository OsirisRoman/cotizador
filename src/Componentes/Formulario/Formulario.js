import React from 'react';

import { Campo, Label, Select, InputRadio } from './Formulario.styles';

const Formulario = () => {
  return (
    <form>
      <Campo>
        <Label>Marca</Label>
        <Select>
          <option value=''>-- Seleccione --</option>
          <option value='americano'>Americano</option>
          <option value='europeo'>Europeo</option>
          <option value='asiatico'>Asiático</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select>
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
        <InputRadio type='radio' name='plan' value='basico' /> Básico
        <InputRadio type='radio' name='plan' value='completo' /> Completo
      </Campo>
      <button type='button'>Cotizar</button>
    </form>
  );
};

export default Formulario;
