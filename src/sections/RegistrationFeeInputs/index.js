import React, { useState, useContext, useEffect } from 'react';
import { Container } from './styles';
import FormRegistrationContext from '../../pages/FormRegistration/context';

function RegistrationFeeInputs() {
  const [registrationFee, setRegistrationFee] = useState('');
  const { formData, setFormData } = useContext(FormRegistrationContext);

  useEffect(() => setFormData({...formData, registrationFee}), [registrationFee, setFormData, setRegistrationFee]);

  function handleSelect(e) {
    setRegistrationFee(e.target.value);
  }

  return (
    <Container>
      <h3>Taxa de Inscrição</h3>
      <span>Conforme previsto no Item II, "Da Taxa de Inscrição" do Edital do Processo Seletivo de Alunos do CASDinho 2020, será cobrada uma taxa de R$ 10,00 (dez reais) para participar do Processo Seletivo, sendo que tal valor deve ser levado, em espécie, pelo candidato no dia no Exame Teórico.</span>
      <span>Todavia, você pode solicitar isenção do pagamento da taxa de inscrição (ou seja, não ter que pagar a taxa de inscrição), sendo obrigatória a apresentação de uma justificativa no campo correspondente abaixo. As justificativas serão analisadas pela Diretoria do CASDinho e o resultado dessa solicitação será enviado dia 1 de outubro ao e-mail fornecido neste formulário. Os candidatos que tiverem a solicitação de isenção negada devem fazer o pagamento da taxa no dia do Exame Teórico.</span>
      <span>Caso o candidato em situação de não-isenção (não participou do processo de isenção ou teve a sua isenção indeferida pela administração do curso) não levar R$10,00 nessa ocasião, a sua permanência no processo seletivo ficará pendente até que o candidato pague a taxa de inscrição, em dinheiro, diretamente na secretaria da sede educacional da ONG, Rua Tsunessaburo Makiguti, nº 139, Floradas de São José, São José dos Campos – SP, no período das 19h às 21h entre os dias 07/10/2019 e 18/10/2019. O atendimento será efetuado apenas em dias úteis.</span>
   
      <label htmlFor="registrationFee">Solicitação de isenção *</label>
      <select id="registrationFee" value={registrationFee} onChange={handleSelect}>
        <option value=""></option>
        <option value="1">QUERO receber isenção da taxa de inscrição, ou seja, NÃO QUERO fazer o pagamento da taxa</option>
        <option value="0">NÃO QUERO receber isenção da taxa de inscrição, ou seja, QUERO fazer o pagamento da taxa</option>
      </select>

      { console.log(formData) }
    </Container>
  );
}
export default RegistrationFeeInputs;