import React, { useState, useEffect } from 'react';
import FormRegistrationContext from './context';
import { Container } from './styles';
import InitialDataInputs from '../../sections/InitialDataInputs';

import api from '../../services/api';

function FormRegistration() {
  const [formData, setFormData] = useState({});
  const [hasRGCandidate, setHasRGCandidate] = useState(false);

  useEffect(() => {
    if (formData.disabledButton && formData.disabledButton === true) {
      if (formData.name && formData.name.length > 5
          && formData.rg //rg já validado
          && formData.cpf //cpf já validado
          && formData.emailVerified
      ) {
        setFormData({...formData, disabledButton: false });
      } 
    } else {
      if (!formData.name
        || !formData.rg //rg já validado
        || !formData.cpf //cpf já validado
        || !formData.emailVerified
      ) {
        setFormData({...formData, disabledButton: true });
      } 
    }
  }, [formData]);

  async function handleSubmit(e) {
    e.preventDefault(); 
    console.log(`VERIFICAR NO BANCO SE JÁ EXISTE O RG ${formData.rg} CADASTRADO`);

    const { name, rg, cpf, email } = formData;
    const dataToSave = { name, rg, cpf, email };

    console.log('DADOS A SEREM SALVOS NO BANCO', dataToSave);

    // const respGET = await api.get(`/candidate/checkCandidate?rg=${dataToSave.rg}`);
    // if (respGET.data.candidateBool) { //existe cadastro com esse rg
    //   setHasRGCandidate(true);
    // } else { //não existe cadastro com esse rg
    //   setHasRGCandidate(false);
    //   //POST temporário
    //   await api.post('/candidate/createCandidate', 
    //     JSON.stringify(dataToSave), { headers: { 'Content-Type': 'application/json' }}
    //   );

    //   console.log('Prosseguir com o preenchimento do formulário');
    //   console.log('Button libera a próxima section --> PersonalDataForm');
    // }
  }

  return (
    <FormRegistrationContext.Provider value={{ setFormData }}>
      <Container>
        <form onSubmit={handleSubmit}>
          <InitialDataInputs />
          <button disabled={formData.disabledButton} className="btn" type="submit">Continuar</button>
        </form>
        {hasRGCandidate === true ? <p>Esse RG já foi cadastrado!</p> : null}
      </Container>
    </FormRegistrationContext.Provider>
  );
}
export default FormRegistration;