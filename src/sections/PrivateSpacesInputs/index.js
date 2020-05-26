import React, { useState, useContext, useEffect } from 'react';
import { Container } from '../../pages/FormRegistration/styles';
import FormRegistrationContext from '../../pages/FormRegistration/context';

function PrivateSpacesInputs() {
  const [privateSpace, setPrivateSpace] = useState('');
  const { formData, setFormData } = useContext(FormRegistrationContext);

  useEffect(() => setFormData({...formData, privateSpace}), [privateSpace, setFormData, setPrivateSpace]);

  function handleSelect(e) {
    setPrivateSpace(e.target.value);
  }

  return (
    <Container>
      <h3>Vagas privativas</h3>
      <text>Conforme previsto no Item VII, "Das Ações Afirmativas" do Edital do Processo Seletivo de Alunos do CASDvest 2021, com o objetivo de aproximar o corpo discente do curso da real distribuição étnica da cidade de São José dos Campos, 130 vagas durante a convocação para a matrícula serão destinadas a candidatos pretos, pardos e indígenas (PPI) aprovados no Processo Seletivo.</text>
      <text>Para isso, você pode optar por realizar autodeclaração como branco, preto, pardo, amarelo ou indígena.</text>
      <text>Além disso, no ato da Entrevista Socioeconômica haverá uma formalização da autodeclaração, assinada pelo candidato ou pelo responsável em caso de candidato menor de idade.</text>
   
      <label htmlFor="privateSpace">Como você se autodeclara? <ast>*</ast></label>
      <select id="privateSpace" value={privateSpace} onChange={handleSelect}>
        <option value=""></option>
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