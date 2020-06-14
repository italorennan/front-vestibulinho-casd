import React, { useState, useEffect } from 'react';
import { Button, Section } from '../../pages/CandidateStatus/styles';

function Dashboard({ idCourse }) {
  //TODO: antes de montar a estrutura do componente - puxar dados do banco 
  //ver sobre ciclos de vida do react e uso do hook useEffect
  
  //lembrar de inserir um botão de logout - cancelar sessão no localStorage

  // Variavel para indicar momento atual do Processo Seletivo
  // 0 -> Prova ainda vai acontecer
  // 1 -> Prova aconteceu, resultado ainda não foi divulgado
  // 2 -> Resultado da prova já foi divulgado
  // 3 -> Entrevista Socioeconômica já aconteceu
  // 4 -> Convocação para matrícula realizada
  const processSituation = 4;

  // Informações de status do candidato
  // Ajustar para buscar no DB
  const [status, setStatus] = useState({name: "NOME DE TESTE",
                                        registrationStatus: true,
                                        exemptionStatus: "exempted",
                                        roomId: "1G2",
                                        grade: 40,
                                        privateSpace: true,
                                        esStatus: true,
                                        esDate: "11 de novembro de 2020",
                                        esTime: "19:15",
                                        esResult: true,
                                        enrollStatus: false});
  
  const [buttons, setButtons] = useState({bttn1: false, bttn2: false, bttn3: false, bttn4: false, bttn5: false, bttn6: false, bttn7: false, bttn8: false});

  const infosCourse = [
    {
      "casdvest": {
        course: "CASDvest",
        date: "DD de mês",
        time: "14h",
        place: <>na <span>UNIP</span> (Rodovia Presidente Dutra, km 157 - 5 - Pista Sul, São José dos Campos-SP, 12240-420)</>,
        numberQuestions: 60,
        testResultDate: "DD de mês",
        privateSpaces: 130
      },
      "casdinho": {
        course: "CASDinho",
        date: "DD de mês",
        time: "14h",
        place: <>na <span>UNIP</span> (Rodovia Presidente Dutra, km 157 - 5 - Pista Sul, São José dos Campos-SP, 12240-420)</>,
        numberQuestions: 60,
        testResultDate: "DD de mês",
        privateSpaces: 45
      }
    }
  ];
  const infos = infosCourse[0][idCourse];

  // Função para coordenar os botões de explicação
  function handleButton(e) {
    e.preventDefault();
    switch(e.target.className) {
      case "bttn1": setButtons({...buttons, bttn1: !(buttons.bttn1)}); break;
      case "bttn2": setButtons({...buttons, bttn2: !(buttons.bttn2)}); break;
      case "bttn3": setButtons({...buttons, bttn3: !(buttons.bttn3)}); break;
      case "bttn4": setButtons({...buttons, bttn4: !(buttons.bttn4)}); break;
      case "bttn5": setButtons({...buttons, bttn5: !(buttons.bttn5)}); break;
      case "bttn6": setButtons({...buttons, bttn6: !(buttons.bttn6)}); break;
      case "bttn7": setButtons({...buttons, bttn7: !(buttons.bttn7)}); break;
      case "bttn8": setButtons({...buttons, bttn8: !(buttons.bttn8)}); break;
    }
  }

  return (
    <>
      <Section>
        <h4>Nome do candidato:</h4>
        <text>{status.name}</text>
      </Section>

      {processSituation === 0 ? 

      <><Section>
        <h4>Situação da inscrição:</h4>
        {status.registrationStatus === true ?
          <text>Confirmada.</text> :
          <text>Não confirmada.</text>}
        <button className="bttn1" onClick={handleButton}>?</button>
      </Section>

      {buttons.bttn1 ? 
      <explain>O candidato com a inscrição <span>confirmada</span> já está cadastrado no Processo Seletivo.
      Se ocorreu algum problema com a sua inscrição, entre em contato com a administração do curso.</explain>
      : <></>}

      <Section>
        <h4>Solicitação de isenção:</h4>
        {status.exemptionStatus === "exempted" ?
        <text>Isento.</text>
        : (status.exemptionStatus === "notExempted" ?
        <text>Não isento.</text>
        : (status.exemptionStatus === "notRequired" ?
        <text>Isenção não solicitada.</text>
        : (status.exemptionStatus === "analysis" ?
        <text>Em análise.</text>
        : <></>)))}
        <button className="bttn2" onClick={handleButton}>?</button>
      </Section>

      {buttons.bttn2 ?
      <><explain>Para participação no Processo Seletivo, é necessário o pagamento da taxa de inscrição de R$10,00 (dez reais), conforme previsto em edital, no dia da prova teórica.
      Entretanto, no momento da inscrição foi fornecida a opção de pedir <span>isenção</span> do pagamento, ou seja, a não necessidade de pagamento da taxa.</explain>
      <explain>Com isso, os candidatos <span>isentos</span> não precisam fazer o pagamento da taxa de inscrição.</explain>
      <explain>Os candidatos <span>não isentos</span> tiveram seu pedido de isenção negado.</explain>
      <explain>O resultado dos pedidos de isenção será divulgado no site e nas páginas do curso no dia X de x.</explain></>
      : <></>}

      <Section>
        <h4>Informações sobre a prova:</h4>
      </Section>

      <explain>A prova teórica do {infos.course} será realizada no <span>dia {infos.date}</span>, às <span>{infos.time}</span>, {infos.place}.
      Mais informações podem ser encontradas no nosso site e nas redes sociais.</explain>

      <Section>
        <h4>Sala de prova:</h4>
        <text>{status.roomId}</text>
        <button className="bttn3" onClick={handleButton}>?</button>
      </Section>

      {buttons.bttn3 ?
      <explain>A lista de salas de prova será divulgada até 1 (um) dia antes da data do Vestibulinho no site e nas redes sociais.
      A localização das salas estará indicada no local da prova no dia de sua realização.</explain>
      : <></>}

      <Section>
        <h4>Deseja editar sua inscrição?</h4>
      </Section>

      <explain>Ao clicar no botão abaixo, você pode visualizar e mudar os dados que cadastrou no momento da sua inscrição.</explain>

      <Button>Editar</Button>

      </> : <></>}

      {processSituation === 1 ?
      
      <><Section>
        <h4>Nota da prova teórica:</h4>
        <text>Em correção.</text>
      </Section>

      <explain>O resultado da prova teórica será divulgado no dia {infos.testResultDate}.</explain>
      
      </> : <></>}

      {(processSituation === 2 || processSituation === 3 || processSituation === 4) ?
      
      <><Section>
        <h4>Nota da prova teórica:</h4>
        <text>{status.grade}</text>
        <button className="bttn4" onClick={handleButton}>?</button>
      </Section>

      {buttons.bttn4 ?
      <explain>A prova teórica teve um total de {infos.numberQuestions} questões.</explain>
      : <></>}

      <Section>
        <h4>Vaga privativa?</h4>
        {status.privateSpace ? <text>Sim.</text> : <text>Não</text>}
        <button className="bttn5" onClick={handleButton}>?</button>
      </Section>

      {buttons.bttn5 ?
      <explain>Conforme previsto no edital do Processo Seletivo, {infos.privateSpaces} vagas são destinadas a candidatos autodeclarados pretos, pardos ou indígenas no momento da inscrição.</explain>
      : <></>}

      <Section>
        <h4>Resultado de convocação para a Entrevista Socioeconômica:</h4>
        {status.esStatus ? <text>Convocado.</text> : <text>Não convocado.</text>}
        <button className="bttn6" onClick={handleButton}>?</button>
      </Section>

      {buttons.bttn6 ?
      <><explain>A Entrevista Socioeconômica é a segunda etapa do Processo Seletivo e consiste na coleta de documentos para comprovar a situação socioeconômica do candidato, conforme previsto em edital.
      A partir da nota de corte, são definidos os candidatos aprovados para essa etapa. Entretanto, destacamos que a convocação não significa aprovação para entrada no curso.</explain>
      <explain>Os candidatos <span>convocados</span> atingiram a nota necessária na prova teórica.</explain></>
      : <></>}
      
      </> : <></>}

      {(processSituation === 2 && status.esStatus === true)?
      
      <><Section>
        <h4>Informações sobre a Entrevista Socioeconômica:</h4>
      </Section>

      <explain>Os candidatos convocados para a Entrevista Socioeconômica devem comparecer à sede do curso (Rua Tsunessaburo Makiguti, 139, Floradas de São José, São José dos Campos - SP, 12230-084) no dia e horário especificados abaixo para entrega dos documentos.</explain>
      
      <Section>
        <h4>Data:</h4>
        <text>{status.esDate}</text>
      </Section>

      <Section>
        <h4>Horário:</h4>
        <text>{status.esTime}</text>
      </Section>

      </> : <></>}

      {((processSituation === 3 || processSituation === 4) && status.esStatus === true) ?
      
      <><Section>
        <h4>Resultado da Entrevista Socioeconômica:</h4>
        {status.esResult ? <text>Aprovado.</text> : <text>Reprovado.</text>}
        <button className="bttn7" onClick={handleButton}>?</button>
      </Section>

      {buttons.bttn7 ?
      <explain>Os candidatos aprovados na Entrevista Socioeconômica se encaixam no perfil socioeconômico estipulado para o curso e estão aptos para serem convocados.
      Entretanto, essa aprovação não implica em aprovação direta para o curso. Os candidatos aprovados serão classificados de acordo com a nota na prova teórica e convocados para matrícula de acordo com a quantidade de vagas do curso.
      </explain>
      : <></>}
      
      </> : <></>}

      {(processSituation === 4 && status.esStatus === true && status.esResult === true) ?
      
      <><Section>
        <h4>Resultado de convocação para matrícula:</h4>
        {status.enrollStatus ? <text>Convocado.</text> : <text>Não convocado.</text>}
        <button className="bttn8" onClick={handleButton}>?</button>
      </Section>

      {buttons.bttn8 ?
      <explain>Os candidatos convocados devem comparecer na sede do curso (Rua Tsunessaburo Makiguti, 139, Floradas de São José, São José dos Campos - SP, 12230-084) no dia e horário a serem divulgados no site e nas redes sociais do curso para realizarem sua matrícula.
      De acordo com a quantidade de alunos matriculados e a quantidade de vagas do curso, novas chamadas de convocação podem ser realizadas.
      </explain>
      : <></>}

      </> : <></>}

      <Button>Sair</Button>

    </>
  );
}
export default Dashboard;