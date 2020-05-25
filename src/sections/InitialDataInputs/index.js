import React, { useState, useContext, useEffect } from 'react';
import { Container } from './styles';
import FormRegistrationContext from '../../pages/FormRegistration/context';

// Adaptar diferenças entre CASDvest e CASDinho
/// CPF obrigatório apenas no CASDvest
const difCourse = [
  {
    "casdvest": {
      CPFTitle: "CPF *"
    },
    "casdinho": {
      CPFTitle: "CPF"
    }
  }
]

function InitialDataInputs({ idCourse }) {
  const [initialData, setInitialData] = useState({});
  const { formData, setFormData } = useContext(FormRegistrationContext);
  const [verEmail, setVerEmail] = useState({email1: "erro", email2:"erro"});

  useEffect(() => setFormData(initialData), [initialData, setFormData, setInitialData]);

  // Estrutura de perguntas com validação por padrão:
  /// const ... = RegExp(...); --> expressão regular que define o padrão
  /// function handle...(e) --> função que lida com a validação
  /// Se o input obedece padrão, salva no banco de dados
  /// Se não obedece, salva string vazia

  // Função para tratar strings: torna tudo maiúsculo, remove acentos e espaços extras
  function handleStrings(string) {
    string = string.toUpperCase();

    var oldChar = [/Á/g, /É/g, /Í/g, /Ó/g, /Ú/g, /Ã/g, /Õ/g, /Ç/g, /[ ]+/g];
    var newChar = ["A", "E", "I", "O", "U", "A", "O", "C", " "];

    for (var i = 0; i < oldChar.length; i++) {
      string = string.replace(oldChar[i], newChar[i]);
    }

    string = string.trim();

    return string;
  }

  // Validação do nome
  const NomeRegEx = RegExp(/[A-ZÁÉÍÓÚa-záéíóúç]+[ ]+([A-ZÁÉÍÓÚa-záéíóúç]+[ ]*)+/);
  function handleName(e) {
      if(NomeRegEx.test(e.target.value)) {
          var handledName = handleStrings(e.target.value);
          setInitialData({...initialData, name: handledName});
      }
      else
          setInitialData({...initialData, name: ""});
  }

  // Validação do RG
  const RGRegEx = RegExp(/^[0-9]*([0-9Xx]){1}$/);
  function handleRG(e) {
      if(RGRegEx.test(e.target.value))
          setInitialData({...initialData, rg: e.target.value});
      else
          setInitialData({...initialData, rg: ""});
  }

  // Validação do CPF
  const CPFRegEx = RegExp(/^[0-9]{11}$/);
  function handleCPF(e) {
      if (CPFRegEx.test(e.target.value)) {
        // Critério oficial dos dígitos verificadores
        var validity = true;
        var n = e.target.value;

        var v1 = 0; // 1º dígito verificador
        for (var i = 0; i < 9; i++) {
          v1 += (10-i) * parseInt(n[i]);
        }
        var r1 = v1 % 11;
        if (r1 == 0 || r1 == 1) {
          if (n[9] != 0) validity = false;
        }
        else if (n[9] != 11 - r1) validity = false;

        var v2 = 0; // 2º dígito verificador
        for (var i = 0; i < 10; i++) {
          v2 += (11-i) * parseInt(n[i]);
        }
        var r2 = v2 % 11;
        if (r2 == 0 || r2 == 1) {
          if (n[10] != 0) validity = false;
        }
        else if (n[10] != 11 - r2) validity = false;
        
        if (validity) setInitialData({...initialData, cpf: n});
        else setInitialData({...initialData, cpf: "inval"});
      }
      else {
        if (e.target.value == "") setInitialData({...initialData, cpf: ""});
        else setInitialData({...initialData, cpf: "inval"});
      }
  }

  // Salvar e-mail apenas se os dois digitados forem iguais
  function handleEmail(e) {
      var aux = e.target.value;

      if (aux === verEmail.email2) {
          setInitialData({...initialData, email: aux});
          setVerEmail({...verEmail, email1: aux});
      }
      else {
          setInitialData({...initialData, email: "error"});
          setVerEmail({...verEmail, email1: aux});
      }
  }
  function handleConfirmEmail(e) {
      var aux = e.target.value;

      if (aux === verEmail.email1) {
          setInitialData({...initialData, email: aux});
          setVerEmail({...verEmail, email2: aux});
      }
      else {
          setInitialData({...initialData, email: "error"});
          setVerEmail({...verEmail, email2:aux});
      }
  }
  
  return (
    <Container>
      <h3>Dados iniciais</h3>
      
      <label htmlFor="name">Nome completo *</label>
      <p>Conforme consta no documento de identidade.</p>
      <input 
          type="text" id="name" required
          onChange={handleName}
      />

      <label htmlFor="rg">RG *</label>
      <p>Escreva apenas os números.</p>
      <input 
          type="text" id="rg" required
          onChange={handleRG}
      />
      
      { /* CPF obrigatório apenas para o CASDvest */ }
      <label htmlFor="cpf" id="labelCpf">{difCourse[0][idCourse].CPFTitle}</label>
      <p>Escreva apenas os números.</p>
      <input 
          type="number" id="cpf"
          onChange={handleCPF}
      />

      <label htmlFor="email">E-mail *</label>
      <input 
          type="email" id="email" required
          onChange={handleEmail}
      />

      <label htmlFor="confirmEmail">Confirmar e-mail *</label>
      <input 
          type="email" id="confirmEmail" required
          onChange={handleConfirmEmail}
      />

      { console.log(formData) }
    </Container>
  );
}
export default InitialDataInputs;