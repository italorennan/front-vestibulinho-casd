import React, { useState, useContext, useEffect } from 'react';
import { Container } from './styles';
import FormRegistrationContext from '../../pages/FormRegistration/context';

function PrivateSpacesInputs() {
  const [privateSpaceData, setPrivateSpaceData] = useState({ privateSpace: '' });
  const { formData, setFormData } = useContext(FormRegistrationContext);

  useEffect(() => setFormData({...formData, ...privateSpaceData}), [privateSpaceData, setFormData, setPrivateSpaceData]);

  return (
    <Container>
      <h3>Vagas privativas</h3>
      <span>Conforme previsto no Item VII, "Das Ações Afirmativas" do Edital do Processo Seletivo de Alunos do CASDvest 2020, com o objetivo de aproximar o corpo discente do curso da real distribuição étnica da cidade de São José dos Campos, 130 vagas durante a convocação para a matrícula serão destinadas a candidatos pretos, pardos e indígenas (PPI) aprovados no Processo Seletivo.</span>
      <span>Para isso, você pode optar por realizar autodeclaração como branco, preto, pardo, amarelo ou indígena.</span>
      <span>Além disso, no ato da Entrevista Socioeconômica haverá uma formalização da autodeclaração, assinada pelo candidato ou pelo responsável em caso de candidato menor de idade.</span>
   
      <label htmlFor="privateSpace">Como você se autodeclara? *</label>
      <select id="privateSpace" value={privateSpaceData} onChange={e => setPrivateSpaceData(e.target.value)}>
        <option value="Amarelo(a)">Amarelo(a)</option>
        <option value="Branco(a)">Branco(a)</option>
        <option value="Indígena">Indígena</option>
        <option value="Pardo(a)">Pardo(a)</option>
        <option value="Preto(a)">Preto(a)</option>
      </select>
    </Container>
  );
}
export default PrivateSpacesInputs;