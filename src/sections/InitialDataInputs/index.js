import React, { useState, useContext, useEffect } from 'react';
import { Container } from './styles';
import FormRegistrationContext from '../../pages/FormRegistration/context';

function InitialDataInputs() {
  const [initialData, setInitialData] = useState({});
  const { setFormData } = useContext(FormRegistrationContext);

  useEffect(() => setFormData(initialData), [initialData, setFormData, setInitialData]);

  return (
    <Container>
      <label htmlFor="name">Nome completo *</label>
      <input 
        type="text" 
        id="name" 
        onChange={e => {
          const newData = {...initialData, name: e.target.value };
          setInitialData(newData);
        }}
      />
      <label htmlFor="rg">RG *</label>
      <input 
        type="text" //implementar validação/padronização de rg
        id="rg" 
        onChange={e => {
          const newData = {...initialData, rg: e.target.value };
          setInitialData(newData);
        }}
      />
      <label htmlFor="cpf">CPF</label>
      <input 
        type="number" //implementar validação de cpf
        id="cpf" 
        onChange={e => {
          const newData = {...initialData, cpf: e.target.value };
          setInitialData(newData);
        }}
      />
      <label htmlFor="email">E-mail *</label>
      <input 
        type="email"
        id="email" 
        onChange={e => {
          const newData = {...initialData, email: e.target.value };
          setInitialData(newData);
        }}
      />
    </Container>
  );
}
export default InitialDataInputs;