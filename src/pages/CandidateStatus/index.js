import React, { useState } from 'react';
import CandidateStatusContext from './context';
import { Container } from './styles';
import Login from '../../sections/Status/Login';
import Dashboard from '../../sections/Status/Dashboard';

const infosCourse = [
  {
    "casdvest": {
      infoTitle: "Vestibulinho CASDvest 2021"
    },
    "casdinho": {
      infoTitle: "Vestibulinho CASDinho 2021"
    }
  }
];

function CandidateStatus({ idCourse }) {
  const [actualSection, setActualSection] = useState(0);

  const sections = [
    <Login />,
    <Dashboard idCourse={idCourse}/>
  ];
  
  function handleLogin() {
    //VERIFICAR OS DADOS DO INPUT  - get no banco
    
    //se liberar realiza:
    setActualSection(actualSection+1);

  }

  return (
    <CandidateStatusContext.Provider value={{ handleLogin }}>
      <Container>
        <h1>{infosCourse[0][idCourse].infoTitle}</h1>
        <h3>Área do candidato</h3>
        <text>Nesta página, você pode consultar a situação atual da sua participação no Processo Seletivo.</text>
        {sections[actualSection]}
      </Container>
    </CandidateStatusContext.Provider>
  );
}
export default CandidateStatus;