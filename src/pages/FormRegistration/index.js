import React, { useState } from 'react';
import FormRegistrationContext from './context';
import { Container } from './styles';
import InitialDataInputs from '../../sections/InitialDataInputs';

import api from '../../api';

function FormRegistration() {
  const [formData, setFormData] = useState({});
  const [hasRGCandidate, setHasRGCandidate] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault(); 
    console.log(`VERIFICAR NO BANCO SE JÁ EXISTE O RG ${formData.rg} CADASTRADO`);

    const respGET = await api.get(`/candidate/checkCandidate?rg=${formData.rg}`);
    if (respGET.data.candidateBool) { //existe cadastro com esse rg
      setHasRGCandidate(true);
    } else { //não existe cadastro com esse rg
      setHasRGCandidate(false);
      //POST temporário
      await api.post('/candidate/createCandidate', 
        JSON.stringify(formData), { headers: { 'Content-Type': 'application/json' }}
      );

      console.log('Prosseguir com o preenchimento do formulário');
      console.log('Button libera a próxima section --> PersonalDataForm');
    }
  }

  return (
    <FormRegistrationContext.Provider value={{ setFormData }}>
      <Container>
        <form onSubmit={handleSubmit}>
          <InitialDataInputs />
          <button className="btn" type="submit">Continuar</button>
        </form>
        {hasRGCandidate === true ? <p>Esse RG já foi cadastrado!</p> : null}
      </Container>
    </FormRegistrationContext.Provider>
  );
}
export default FormRegistration;