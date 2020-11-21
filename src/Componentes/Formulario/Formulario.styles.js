import styled from '@emotion/styled';

export const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

export const Label = styled.label`
  flex: 0 0 100px;
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  --webkit-appearance: none;
`;

export const InputRadio = styled.input`
  margin: 0 1rem;
`;

export const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3 ease;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;
