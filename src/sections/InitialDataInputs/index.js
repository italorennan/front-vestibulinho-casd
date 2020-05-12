import React, { useState, useContext, useEffect } from 'react';
import { Container } from './styles';
import FormRegistrationContext from '../../pages/FormRegistration/context';

function InitialDataInputs() {
  const [initialData, setInitialData] = useState({});
  const { setFormData } = useContext(FormRegistrationContext);

  useEffect(() => setFormData(initialData), [initialData, setFormData, setInitialData]);

  function handleValidateRG(rgValue) {
    // FAZER A VERIFICAÇÃO DO RG -- salvar no estado só depois de verificado
    // -- SE PASSOU NA VERIFICAÇÃO
    setInitialData({...initialData, rg: rgValue });
    // - SE NAO PASSOU NA VERIFICACAO !!!
    // ------ apagar o valor salvo em rg: delete initialData.rg
  }

  function handleValidateCPF(cpfValue) {
    // FAZER A VERIFICAÇÃO DO CPF -- salvar no estado só depois de verificado
    // -- SE PASSOU NA VERIFICAÇÃO
    setInitialData({...initialData, cpf: cpfValue });
    // - SE NAO PASSOU NA VERIFICACAO !!!
    // ------ apagar o valor salvo em cpf: delete initialData.cpf
  }

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
        type="text"
        id="rg" 
        onChange={e => handleValidateRG(e.target.value)}
      />
      <label htmlFor="cpf">CPF</label>
      <input
        type="number"
        id="cpf" 
        onChange={e => handleValidateCPF(e.target.value)}
      />
      <label htmlFor="email">E-mail *</label>
      <input 
        type="email"
        id="email" 
        onChange={e => {
          const email = e.target.value;
          const emailVerified = initialData.emailConfirmed ? email === initialData.emailConfirmed : false;
          setInitialData({...initialData, email, emailVerified })
        }}
      />
      <label htmlFor="email">Confirmar e-mail *</label>
      <input 
        type="email"
        id="emailToConfirm" 
        onChange={e => {
          const emailConfirmed = e.target.value;
          const emailVerified = initialData.email ? emailConfirmed === initialData.email : false;
          setInitialData({...initialData, emailConfirmed, emailVerified });
        }}
      />
    </Container>
  );
}
export default InitialDataInputs;