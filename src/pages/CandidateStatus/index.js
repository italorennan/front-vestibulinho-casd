import React, { useState } from 'react';
import CandidateStatusContext from './context';
import Login from '../../sections/Status/Login';
import Dashboard from '../../sections/Status/Dashboard';

function CandidateStatus() {
  const [actualSection, setActualSection] = useState(0);

  const sections = [
    <Login />,
    <Dashboard />
  ];
  
  function handleLogin() {
    //VERIFICAR OS DADOS DO INPUT  - get no banco
    
    //se liberar realiza:
    setActualSection(actualSection+1);

  }

  return (
    <CandidateStatusContext.Provider value={{ handleLogin }}>
      <div>CandidateStatus</div>
      {sections[actualSection]}
    </CandidateStatusContext.Provider>
  );
}
export default CandidateStatus;