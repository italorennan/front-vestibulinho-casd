import React, { useState } from 'react';
import FormRegistrationContext from './context';
import { Container } from './styles';
import InitialDataInputs from '../../sections/InitialDataInputs';

function FormRegistration() {
  const [formData, setFormData] = useState({});
  // IDEIA: sectionId 'state' que define qual section (pedaço de form) a ser exibido em tela
  // se não existir RG cadastrado no banco, altera o conteúdo do state sectionId

  function handleSubmit(e) {
    e.preventDefault(); 
    console.log('VERIFICAR NO BANCO SE JÁ EXISTE O RG CADASTRADO');
    console.log('Se sim, aviso: "Esse RG já foi cadastrado!"');
    console.log('Se não, button libera a próxima section --> PersonalDataForm');
    console.log('formData', formData);
  }

  return (
    <FormRegistrationContext.Provider value={{ setFormData }}>
      <Container>
        <form onSubmit={handleSubmit}>
          <InitialDataInputs />
          <button className="btn" type="submit">Continuar</button>
        </form>
      </Container>
    </FormRegistrationContext.Provider>
  );
}
export default FormRegistration;