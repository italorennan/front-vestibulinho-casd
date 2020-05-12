import React, { useState, useEffect } from 'react';
import FormRegistrationContext from './context';
import { Container } from './styles';
import InitialDataInputs from '../../sections/InitialDataInputs';
import PrivateSpacesInputs from '../../sections/PrivateSpacesInputs';

import api from '../../services/api';

function FormRegistration() {
  const [actualSection, setActualSection] = useState(0);
  const [formData, setFormData] = useState({});
  const [hasRGCandidate, setHasRGCandidate] = useState(false);

  const sections = [<InitialDataInputs />, <PrivateSpacesInputs />];

  useEffect(() => {
    if (formData.disabledButton && formData.disabledButton === true) {
      if (actualSection === 0 
          && formData.name && formData.name.length > 5
          && formData.rg //rg já validado
          && formData.cpf //cpf já validado
          && formData.emailVerified
      ) {
        setFormData({...formData, disabledButton: false }); 
      } 
      // ALTERAR AQ CASO MUDE A ORDEM DOS SECTIONS
      if (actualSection === 1 && formData.privateSpace && formData.privateSpace !== "") {
        setFormData({...formData, disabledButton: false });
      }
    } else {
      if (actualSection === 0 
        && (!formData.name
        || !formData.rg //rg já validado
        || !formData.cpf //cpf já validado
        || !formData.emailVerified)
      ) {
        setFormData({...formData, disabledButton: true });
      } 
      // ALTERAR AQ CASO MUDE A ORDEM DOS SECTIONS
      if (actualSection === 1 && formData.privateSpace.length === 0) {
        setFormData({...formData, disabledButton: true });
      }
    }
  }, [formData]);

  function handlePreviousButton() {
    setActualSection(actualSection-1);
  }

  function handleNextButton() {
    if (actualSection < sections.length-1) {
      setActualSection(actualSection+1);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault(); 
    setFormData({...formData, disabledButton: true });
    console.log('formData', formData);
    if (actualSection === 0) {
      console.log(`VERIFICAR NO BANCO SE JÁ EXISTE O RG ${formData.rg} CADASTRADO`);
    }
    

    if (actualSection === sections.length-1) {
      const { name, rg, cpf, email } = formData; //IR ADICIONANDO CAMPOS QDE CADA SECTION QUE SERÃO SALVOS
      const dataToSave = { name, rg, cpf, email };
      console.log('DADOS A SEREM SALVOS NO BANCO', dataToSave);
    }


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
    <FormRegistrationContext.Provider value={{ formData, setFormData }}>
      <Container>
        <form onSubmit={handleSubmit}>
          {sections[actualSection]}
          {actualSection !== 0 && <button className="btn" onClick={handlePreviousButton}>Anterior</button>}
          <button disabled={formData.disabledButton} className="btn" onClick={handleNextButton}>Próximo</button>
        </form>
        {hasRGCandidate === true ? <p>Esse RG já foi cadastrado!</p> : null}
      </Container>
    </FormRegistrationContext.Provider>
  );
}
export default FormRegistration;