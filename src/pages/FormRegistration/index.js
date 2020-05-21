import React, { useState, useEffect } from 'react';
import FormRegistrationContext from './context';
import { Container } from './styles';
import InfoForm from '../../sections/InfoForm';
import PersonalDataInputs from '../../sections/PersonalData';
import PrivateSpacesInputs from '../../sections/PrivateSpacesInputs';
import RegistrationFeeInputs from '../../sections/RegistrationFeeInputs';

import api from '../../services/api';

function FormRegistration({ idCourse }) {
  const [actualSection, setActualSection] = useState(0);
  const [formData, setFormData] = useState({});
  const [hasRGCandidate, setHasRGCandidate] = useState(false);

  const sections = [
                    <InfoForm idCourse={idCourse} />, 
                    <PersonalDataInputs />, 
                    <PrivateSpacesInputs />, 
                    <RegistrationFeeInputs />
                  ];

  useEffect(() => {
    if (actualSection === 0) formData.disabledButton = true;
    if (formData.disabledButton && formData.disabledButton === true) {
      if (actualSection === 1 // Validações de campos normais obrigatórios
          && formData.bairro
          && formData.cep
          && formData.cidade
          && formData.cpf
          && formData.dataNascimento
          && formData.email && formData.email !== "erro"
          && formData.endereco
          && formData.escola
          && formData.escolaridade
          && formData.estado
          && formData.formaPS
          && formData.nome
          && formData.nomeResponsavel
          && formData.parentesco
          && formData.rg
          && formData.seNecessidadeEspecial
          && formData.sexo
          && formData.telefone1
          // telefone2 --> dado não obrigatório
          && formData.tipoEscola
      ) {
        // Validações de campos condicionais obrigatórios
          if (!((formData.escola === "Outra" && !formData.outraEscola)
              || (formData.formaPS === "outro" && !formData.outraForma)
              || (formData.parentesco === "Outro" && !formData.outroParentesco)
              || (formData.seNecessidadeEspecial === "Sim" && !formData.qualNecessidade))) {
                setFormData({...formData, disabledButton: false }); 
          }
      } 
      if (actualSection === 2 && formData.privateSpace && formData.privateSpace !== "") {
        setFormData({...formData, disabledButton: false });
      }
      if (actualSection === 3 && formData.registrationFee && formData.registrationFe !== "") {
        setFormData({...formData, disabledButton: false });
      }
    } else {
      if (actualSection === 1 
        && (!formData.bairro
        || !formData.cep
        || !formData.cidade
        || !formData.cpf
        || !formData.dataNascimento
        || !formData.email || formData.email === "erro"
        || !formData.endereco
        || !formData.escola
        || !formData.escolaridade
        || !formData.estado
        || !formData.formaPS
        || !formData.nome
        || !formData.nomeResponsavel
        || !formData.parentesco
        || !formData.rg
        || !formData.seNecessidadeEspecial
        || !formData.sexo
        || !formData.telefone1
        || !formData.tipoEscola
        || (formData.escola === "Outra" && !formData.outraEscola)
        || (formData.formaPS === "outro" && !formData.outraForma)
        || (formData.parentesco === "Outro" && !formData.outroParentesco)
        || (formData.seNecessidadeEspecial === "Sim" && !formData.qualNecessidade))
      ) {
        setFormData({...formData, disabledButton: true });
      } 
      if (actualSection === 2 && formData.privateSpace === "") {
        setFormData({...formData, disabledButton: true });
      }
      if (actualSection === 3 && formData.registrationFee === "") {
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
      const { name, rg, cpf, email, privateSpace, registrationFee } = formData; // ------- [TODO] IR ADICIONANDO CAMPOS QDE CADA SECTION QUE SERÃO SALVOS
      const dataToSave = { name, rg, cpf, email, privateSpace, registrationFee };
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