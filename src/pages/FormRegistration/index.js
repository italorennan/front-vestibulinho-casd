import React, { useState, useEffect } from 'react';
import FormRegistrationContext from './context';
import { Container, Button, Box } from '../../pages/FormRegistration/styles';
import InfoForm from '../../sections/infoForm';
import InitialDataInputs from '../../sections/initalDataInputs';
import PersonalDataInputs from '../../sections/personalDataInputs';
import PrivateSpacesInputs from '../../sections/privateSpacesInputs';
import RegistrationFeeInputs from '../../sections/registrationFeeInputs';
import Confirmation from '../../sections/confirmation';

import api from '../../services/api';
import { act } from 'react-dom/test-utils';

const infosCourse = [
  {
    "casdvest": {
      infoTitle: "Inscrições Vestibulinho CASDvest 2021"
    },
    "casdinho": {
      infoTitle: "Inscrições Vestibulinho CASDinho 2021"
    }
  }
];

function FormRegistration({ idCourse }) {
  const [actualSection, setActualSection] = useState(0);
  const [formData, setFormData] = useState({disabledButton: false, tryNext: false});
  const [address, setAddress] = useState({});
  const [hasRGCandidate, setHasRGCandidate] = useState(false);
  const sizes=["0%", "16.7%", "33.3%", "50%", "66.7%", "83.3%", "100%"];

  const sections = [
                    <InfoForm idCourse={idCourse} />, 
                    <InitialDataInputs idCourse={idCourse}/>,
                    <PersonalDataInputs idCourse={idCourse}/>, 
                    <PrivateSpacesInputs idCourse={idCourse}/>, 
                    <RegistrationFeeInputs idCourse={idCourse}/>,
                    <Confirmation/>
                  ];

  useEffect(() => {
    if (formData.disabledButton && formData.disabledButton === true) {
      if (actualSection === 0)
          setFormData({...formData, disabledButton: false});

      if (actualSection === 1
          && !(!formData.cpf && idCourse == "casdvest") && formData.cpf !== "inval" // CPF obrigatório apenas para CASDvest
          && formData.email && formData.email !== "error"
          && formData.name
          && formData.rg) {
            setFormData({...formData, disabledButton: false });
          }
      
      if (actualSection === 2 // Validações de campos normais obrigatórios
          && formData.address
          && formData.birthDate && formData.birthDate !== "inval"
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
                if (!((formData.school === "Outra" && (!formData.otherSchool || formData.otherSchool === ""))
                    || (formData.wayPS === "Outro" && (!formData.otherWay || formData.otherWay === ""))
                    || (formData.kinship === "Outro" && (!formData.otherKinship || formData.otherKinship === ""))
                    || (formData.ifSpecialNecessity === "Sim" && (!formData.whichNecessity || formData.whichNecessity === "")))) {
                      setFormData({...formData, disabledButton: false }); 
                    }
            }
      } 

      if (actualSection === 3 && formData.privateSpace && formData.privateSpace !== "") {
        setFormData({...formData, disabledButton: false });
      }

      if (actualSection === 4 && formData.exemptionRequest) {
        if ((formData.exemptionRequest === "nao") 
            || (formData.exemptionRequest === "sim" && formData.justification && formData.justification !== "")) {
                setFormData({...formData, disabledButton: false });
            }
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
          || !formData.birthDate || formData.birthDate === "inval"
          || !formData.gender
          || !formData.ifSpecialNecessity
          || !formData.kindSchool
          || !formData.kinship
          || !formData.phone1
          || !formData.relativeName
          || !formData.school
          || !formData.schooling
          || !formData.wayPS
          || (formData.school === "Outra" && (!formData.otherSchool || formData.otherSchool === ""))
          || (formData.wayPS === "Outro" && (!formData.otherWay || formData.otherWay === ""))
          || (formData.kinship === "Outro" && (!formData.otherKinship || formData.otherKinship === ""))
          || (formData.ifSpecialNecessity === "Sim" && (!formData.whichNecessity || formData.whichNecessity === ""))) {
            setFormData({...formData, disabledButton: true });
        }
        else if(!formData.address.cep
          || !formData.address.city
          || !formData.address.neighborhood
          || !formData.address.numberStreet
          || !formData.address.state
          || !formData.address.street) {
            setFormData({...formData, disabledButton: true });
        }
      } 
      if (actualSection === 3 && (!formData.privateSpace || formData.privateSpace === "")) {
        setFormData({...formData, disabledButton: true });
      }
      if (actualSection === 4 && 
        (!formData.exemptionRequest || formData.exemptionRequest === ""
        || (formData.exemptionRequest === "sim" && !formData.justification))) {
            setFormData({...formData, disabledButton: true });
      }
    }
  }, [formData]);

  function handlePreviousButton() {
    setActualSection(actualSection-1);
    setFormData({...formData, disabledButton: false, tryNext: false});
  }

  function handleNextButton() {
    if (!formData.disabledButton && formData.disabledButton === false) {
      if (actualSection < sections.length-1) {
        setActualSection(actualSection+1);
      }
      setFormData({...formData, tryNext: false});
    }
    else setFormData({...formData, tryNext: true});
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
    <FormRegistrationContext.Provider value={{ formData, setFormData, address, setAddress }}>
      <Container>
        <h1>{infosCourse[0][idCourse].infoTitle}</h1>
        <Box size={sizes[actualSection]}></Box>
        <form onSubmit={handleSubmit}>
          {sections[actualSection]}
          {actualSection !== 0 && <Button className="btn" onClick={handlePreviousButton} id="previousButton">Anterior</Button>}
          {actualSection !== 5 && <Button className="btn" onClick={handleNextButton} checkDisabled={formData.disabledButton} id="nextButton">Próximo</Button>}
          {actualSection == 5 && <Button className="btn" id="sendButton">Enviar</Button>}
        </form>
        {hasRGCandidate === true ? <p>Esse RG já foi cadastrado!</p> : null}

        {console.log(formData)}
      </Container>
    </FormRegistrationContext.Provider>
  );
}
export default FormRegistration;