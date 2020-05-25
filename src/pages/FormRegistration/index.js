import React, { useState, useEffect } from 'react';
import FormRegistrationContext from './context';
import { Container } from './styles';
import InfoForm from '../../sections/InfoForm';
import InitialDataInputs from '../../sections/InitialDataInputs';
import PersonalDataInputs from '../../sections/PersonalDataInputs';
import PrivateSpacesInputs from '../../sections/PrivateSpacesInputs';
import RegistrationFeeInputs from '../../sections/RegistrationFeeInputs';

import api from '../../services/api';

function FormRegistration({ idCourse }) {
  const [actualSection, setActualSection] = useState(0);
  const [formData, setFormData] = useState({});
  const [hasRGCandidate, setHasRGCandidate] = useState(false);

  const sections = [
                    <InfoForm idCourse={idCourse} />, 
                    <InitialDataInputs idCourse={idCourse}/>,
                    <PersonalDataInputs idCourse={idCourse}/>, 
                    <PrivateSpacesInputs />, 
                    <RegistrationFeeInputs />
                  ];

  useEffect(() => {
    if (actualSection === 0) formData.disabledButton = true;
    if (formData.disabledButton && formData.disabledButton === true) {
      if (actualSection === 1
          && !(!formData.cpf && idCourse == "casdvest") && formData.cpf !== "inval" // CPF obrigatório apenas para CASDvest
          && formData.email && formData.email !== "error"
          && formData.name
          && formData.rg) {
            setFormData({...formData, disabledButton: false });
          }
      
      if (actualSection === 2 // Validações de campos normais obrigatórios
          && formData.address
          && formData.birthDate
          && formData.gender
          && formData.ifSpecialNecessity
          && formData.kindSchool
          && formData.kinship
          && formData.phone1
          // phone2 --> dado não obrigatório
          && formData.relativeName
          && formData.school
          && formData.schooling
          && formData.wayPS) {
            if (formData.address.cep
              // address.additionalAddress --> dado não obrigatório
              && formData.address.city
              && formData.address.neighborhood
              && formData.address.numberStreet
              && formData.address.state
              && formData.address.street) {
                // Validações de campos condicionais obrigatórios
                if (!((formData.school === "Outra" && !formData.otherSchool)
                    || (formData.wayPS === "outro" && !formData.otherWay)
                    || (formData.kinship === "Outro" && !formData.otherKinship)
                    || (formData.ifSpecialNecessity === "Sim" && !formData.whichNecessity))) {
                      setFormData({...formData, disabledButton: false }); 
                    }
            }
      } 

      if (actualSection === 3 && formData.privateSpace && formData.privateSpace !== "") {
        setFormData({...formData, disabledButton: false });
      }
      if (actualSection === 4 && formData.registrationFee && formData.registrationFe !== "") {
        setFormData({...formData, disabledButton: false });
      }
    } else {
      if (actualSection === 1
        && ((!formData.cpf && idCourse == "casdvest") || formData.cpf === "inval"
        || !formData.email || formData.email === "error"
        || !formData.name
        || !formData.rg)
      ) {
        setFormData({...formData, disabledButton: true });
      }
      if (actualSection === 2) {
        if (!formData.address
          || !formData.gender
          || !formData.ifSpecialNecessity
          || !formData.kindSchool
          || !formData.kinship
          || !formData.phone1
          || !formData.relativeName
          || !formData.school
          || !formData.schooling
          || !formData.wayPS
          || (formData.school === "Outra" && !formData.otherSchool)
          || (formData.wayPS === "outro" && !formData.otherWay)
          || (formData.kinship === "Outro" && !formData.otherKinship)
          || (formData.ifSpecialNecessity === "Sim" && !formData.whichNecessity)) {
            setFormData({...formData, disabledButton: true });
        }
        else if(!formData.address.cep
          || !formData.address.city
          || !formData.address.neighborhood
          || !formData.address.numberStreet
          || !formData.address.state
          || !formData.address.street
          || !formData.birthDate) {
            setFormData({...formData, disabledButton: true });
        }
      } 
      if (actualSection === 3 && formData.privateSpace === "") {
        setFormData({...formData, disabledButton: true });
      }
      if (actualSection === 4 && formData.registrationFee === "") {
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