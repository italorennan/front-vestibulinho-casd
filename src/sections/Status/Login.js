import React, { useContext } from 'react';
import CandidateStatusContext from '../../pages/CandidateStatus/context';

function Login() {
  //TODO - pesquisar sobre localStorage - guardar a sessão caso o candidato consiga fazer login (checkbox de "mantenha-me conectado")
  
  //TODO - sobre o "esqueci o código de acesso" (já alinhado com o back)
  // se a pessoa clica em "esqueci o código de acesso", abre um input p ela inserir o rg já cadastrado
  //gera uma requisição pro back end q vai mandar um novo código pro email cadastrado
  //a resposta dessa requisição - se for sucesso - retorna o email pra ql o código foi enviado
  //colocar em tela como feedback pro usuário
  const { handleLogin } = useContext(CandidateStatusContext);

  return (
    <>
      <div>Login</div>
      <p>--- Input: RG</p>
      <p>--- Input: Código de acesso (recebido por email)</p>
      <p>--- Esqueci meu código de acesso</p>
      <button onClick={() => handleLogin()}>ENTRAR</button>
    </>
  );
}
export default Login;