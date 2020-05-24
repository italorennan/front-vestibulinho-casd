import React, { useState, useContext, useEffect } from 'react';
import { Container, ErrorMessage } from './styles';
import FormRegistrationContext from '../../pages/FormRegistration/context';

function PersonalDataInputs() {
    const [personalData, setPersonalData] = useState({});
    const [errors, setErrors] = useState({});
    const { formData, setFormData } = useContext(FormRegistrationContext);
    const [verEmail, setVerEmail] = useState({email1: "erro", email2:"erro"});

    useEffect(() => setFormData({...formData, ...personalData}), [personalData, setFormData, setPersonalData]);

    // Estrutura de perguntas com validação por padrão:
    /// const ... = RegExp(...); --> expressão regular que define o padrão
    /// function handle...(e) --> função que lida com a validação
    /// Se o input obedece padrão, salva no banco de dados
    /// Se não obedece, salva string vazia

    // Validação do nome
    const NomeRegEx = RegExp(/^([A-Z]{1}[a-z]*[ ]{1})+[A-Z]{1}[a-z]*$/);
    function handleNome(e) {
        if(NomeRegEx.test(e.target.value)) {
            console.log(NomeRegEx.test(e.target.value));
            setPersonalData({...personalData, nome: e.target.value});
            errors.nome = "";
        }
        else {
            setPersonalData({...personalData, nome: ""});
            setErrors({...errors, nome: "Escreva seu nome completo"});
            //document.getElementById("errorNome").removeAttribute("hidden");
        }
    }

    // Validação do RG
    const RGRegEx = RegExp(/^[0-9]*([0-9Xx]){1}$/);
    function handleRG(e) {
        if(RGRegEx.test(e.target.value)) {
            setPersonalData({...personalData, rg: e.target.value});
            errors.rg = "";
        }
        else {
            setPersonalData({...personalData, rg: ""});
            setErrors({...errors, rg: "Número de RG inválido"});
        }
    }

    // Validação do CPF
    const CPFRegEx = RegExp(/^[0-9]{11}$/);
    function handleCPF(e) {
        if(CPFRegEx.test(e.target.value)) {
            setPersonalData({...personalData, cpf: e.target.value});
            errors.cpf = "";
        }
        else {
            setPersonalData({...personalData, cpf: ""});
            setErrors({...errors, cpf: "Número de CPF inválido"});
        }
    }

    // Validação da data de nascimento
    const dataRegEx = RegExp(/^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/);
    function handleData(e) {
        if(dataRegEx.test(e.target.value)) {
            setPersonalData({...personalData, dataNascimento: e.target.value});
            errors.nascimento = "";
        }
        else {
            setPersonalData({...personalData, dataNascimento: ""});
            setErrors({...errors, nascimento: "Data de nascimento inválida"});
        }
    }

    // Validação do nome do responsável
    function handleNomeResponsavel(e) {
        if(NomeRegEx.test(e.target.value)) {
            setPersonalData({...personalData, nomeResponsavel: e.target.value});
            errors.responsavel = "";
        }
        else {
            setPersonalData({...personalData, nomeResponsavel: ""});
            setErrors({...errors, responsavel: "Nome do responsável inválido"});
        }
    }

    // Validação dos telefones
    const telRegEx = RegExp(/^[0-9]{11}$/);
    function handleTelefone1(e) {
        if(telRegEx.test(e.target.value)) {
            setPersonalData({...personalData, telefone1: e.target.value});
            errors.telefone1 = "";
        }
        else {
            setPersonalData({...personalData, telefone1: ""});
            setErrors({...errors, telefone1: "Número de telefone inválido"});
        }
    }
    const tel2RegEx = RegExp(/^[0-9]{11}$|^$/);
    function handleTelefone2(e) {
        if(telRegEx.test(e.target.value)) {
            setPersonalData({...personalData, telefone2: e.target.value});
            errors.telefone2 = "";
        }
        else {
            setPersonalData({...personalData, telefone2: ""});
            setErrors({...errors, telefone2: "Número de telefone inválido"});
        }
    }

    // Validação do CEP
    const CEPRegEx = RegExp(/^[0-9]{8}$/);
    function handleCEP(e) {
        if(CEPRegEx.test(e.target.value)) {
            setPersonalData({...personalData, cep: e.target.value});
            errors.cep = "";
        }
        else {
            setPersonalData({...personalData, cep: ""});
            setErrors({...errors, cep: "Número do CEP inválido"});
        }
    }

    // Salvar e-mail apenas se os dois digitados forem iguais
    function handleEmail(e) {
        var aux = e.target.value;

        if (aux === verEmail.email2) {
            setPersonalData({...personalData, email: aux});
            setVerEmail({...verEmail, email1: aux});
        }
        else {
            setPersonalData({...personalData, email: "erro"});
            setVerEmail({...verEmail, email1: aux});
        }
    }
    function handleConfirmarEmail(e) {
        var aux = e.target.value;

        if (aux === verEmail.email1) {
            setPersonalData({...personalData, email: aux});
            setVerEmail({...verEmail, email2: aux});
            errors.confirmaremail = "";
        }
        else {
            setPersonalData({...personalData, email: "erro"});
            setVerEmail({...verEmail, email2:aux});
            setErrors({...errors, confirmaremail: "Email inválido"});
        }
    }

    // Estrutura de perguntas condicionais
    /// function handle...(e)
    /// var ... = e.target.value --> variável com o input da pergunta-pai
    /// if --> lida com o caso em que a opção "outro" foi escolhida
    //// exibe label e input da nova pergunta, tornando-a obrigatória, e salva "outro" no db
    /// else
    //// esconde label e input da nova pergunta, esvazia campo, e salva resposta-pai no db e
    //// string vazia para condicional

    // Pergunta condicional do parentesco
    function handleParentesco(e) {
        var par = e.target.value;

        if (par === "Outro") {
            document.getElementById("labelParentesco").removeAttribute("hidden");
            document.getElementById("outroParentesco").setAttribute("type","text");
            document.getElementById("outroParentesco").setAttribute("required","");
            setPersonalData({...personalData, parentesco: par});
        }
        else {
            document.getElementById("labelParentesco").setAttribute("hidden","");
            document.getElementById("outroParentesco").setAttribute("type","hidden");
            document.getElementById("outroParentesco").setAttribute("value","");
            document.getElementById("outroParentesco").removeAttribute("required");
            setPersonalData({...personalData, parentesco: par, outroParentesco: ''});
        }
    }

    // Pergunta condicional de necessidade especial
    function handleNecessidadeEspecial(e) {
        var nec = e.target.value;

        if(nec == "Sim") {
            document.getElementById("labelNecessidade").removeAttribute("hidden");
            document.getElementById("qualNecessidade").setAttribute("type","text");
            document.getElementById("qualNecessidade").setAttribute("required","");
            setPersonalData({...personalData, seNecessidadeEspecial: nec});
        }
        else {
            document.getElementById("labelNecessidade").setAttribute("hidden","");
            document.getElementById("qualNecessidade").setAttribute("type","hidden");
            document.getElementById("qualNecessidade").setAttribute("value","");
            document.getElementById("qualNecessidade").removeAttribute("required");
            setPersonalData({...personalData, seNecessidadeEspecial: nec, qualNecessidade: ''});
        }
    }

    // Pergunta condicional de escola
    function handleEscola(e) {
        var esc = e.target.value;

        if (esc === "Outra") {
            document.getElementById("labelEscola").removeAttribute("hidden");
            document.getElementById("outraEscola").setAttribute("type","text");
            document.getElementById("outraEscola").setAttribute("required","");
            setPersonalData({...personalData, escola: esc});
        }
        else {
            document.getElementById("labelEscola").setAttribute("hidden","");
            document.getElementById("outraEscola").setAttribute("type","hidden");
            document.getElementById("outraEscola").setAttribute("value","");
            document.getElementById("outraEscola").removeAttribute("required");
            setPersonalData({...personalData, escola: esc, outraEscola: ''});
        }
    }

    // Pergunta condicional de forma de conhecimento do PS
    function handleForma(e) {
        var fo = e.target.value;

        if (fo === "outro") {
            document.getElementById("labelForma").removeAttribute("hidden");
            document.getElementById("outraForma").setAttribute("type","text");
            document.getElementById("outraForma").setAttribute("required","");
            setPersonalData({...personalData, formaPS: fo});
        }
        else {
            document.getElementById("labelForma").setAttribute("hidden","");
            document.getElementById("outraForma").setAttribute("type","hidden");
            document.getElementById("outraForma").setAttribute("value","");
            setPersonalData({...personalData, formaPS: fo, outraForma: ''});
        }
    }

    return (
        <Container>
            <h3>Dados pessoais</h3>

            <label htmlFor="nome">Nome completo *</label>
            <p>Conforme consta no documento de identidade. Escreva cada nome com a primeira letra maiúscula e as outras minúsculas, sem acentos. Use um espaço entre cada nome.</p>
            <input 
                type="text" id="nome" required
                onChange={handleNome}
            />
            <ErrorMessage>{errors.nome}</ErrorMessage>

            <label htmlFor="rg">RG *</label>
            <p>Escreva apenas os números.</p>
            <input 
                type="text" id="rg" required
                onChange={handleRG}
            />
            <ErrorMessage>{errors.rg}</ErrorMessage>
            
            <label htmlFor="cpf">CPF *</label>
            <p>Escreva apenas os números.</p>
            <input 
                type="number" id="cpf" required
                onChange={handleCPF}
            />
            <ErrorMessage>{errors.cpf}</ErrorMessage>

            <label htmlFor="sexo">Sexo *</label>
            <select id="sexo" required
            onChange={e => {const newData = {...personalData, sexo: e.target.value}; setPersonalData(newData);}}>
                <option value=""></option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
            </select>
            <ErrorMessage>{errors.sexo}</ErrorMessage>

            <label htmlFor="dataNascimento">Data de nascimento *</label>
            <p>Escreva no formato DD/MM/AAAA.</p>
            <input 
                type="text" id="dataNascimento" required placeholder="DD/MM/AAAA"
                onChange={handleData}
            />
            <ErrorMessage>{errors.nascimento}</ErrorMessage>

            <label htmlFor="nomeResponsavel">Nome de um responsável *</label>
            <p>Conforme consta no documento de identidade. Escreva cada nome com a primeira letra maiúscula e as outras minúsculas, sem acentos. Use um espaço entre cada nome.</p>
            <input 
                type="text" id="nomeResponsavel" required
                onChange={handleNomeResponsavel}
            />
            <ErrorMessage>{errors.responsavel}</ErrorMessage>

            <label htmlFor="parentesco">Parentesco do responsável *</label>
            <select id="parentesco" required
            onChange={handleParentesco}>
                <option value=""></option>
                <option value="Mãe">Mãe</option>
                <option value="Pai">Pai</option>
                <option value="Avó">Avó</option>
                <option value="Avô">Avô</option>
                <option value="Tia">Tia</option>
                <option value="Tio">Tio</option>
                <option value="Irmã">Irmã</option>
                <option value="Irmão">Irmão</option>
                <option value="Outro">Outro</option>
            </select>
            <ErrorMessage>{errors.parentesco}</ErrorMessage>

            <label hidden htmlFor="outroParentesco" id="labelParentesco">Outro parentesco: *</label>
            <input
                type="hidden" id="outroParentesco"
                onChange={e => {const newData = {...personalData, outroParentesco: e.target.value}; setPersonalData(newData);}}
            />
            <ErrorMessage>{errors.outroparentesco}</ErrorMessage>

            <label htmlFor="telefone1">Telefone 1 *</label>
            <p>Insira apenas os números, incluindo DDD.</p>
            <input 
                type="text" id="telefone1" required
                onChange={handleTelefone1}
            />
            <ErrorMessage>{errors.telefone1}</ErrorMessage>

            <label htmlFor="telefone2">Telefone 2</label>
            <p>Insira apenas os números, incluindo DDD.</p>
            <input 
                type="text" id="telefone2"
                onChange={handleTelefone2}
            />
            <ErrorMessage>{errors.telefone2}</ErrorMessage>

            <label htmlFor="email">E-mail *</label>
            <input 
                type="email" id="email" required
                onChange={handleEmail}
            />
            <ErrorMessage>{errors.email}</ErrorMessage>

            <label htmlFor="confirmarEmail">Confirmar e-mail *</label>
            <input 
                type="email" id="confirmarEmail" required
                onChange={handleConfirmarEmail}
            />
            <ErrorMessage>{errors.confirmaremail}</ErrorMessage>

            <label htmlFor="endereco">Endereço *</label>
            <p>Rua, número e eventuais complementos (apartamento, bloco, ...).</p>
            <input 
                type="name" id="endereco" required
                onChange={e => {const newData = {...personalData, endereco: e.target.value}; setPersonalData(newData);}}
            />
            <ErrorMessage>{errors.endereco}</ErrorMessage>

            <label htmlFor="bairro">Bairro *</label>    
            <input
                type="name" id="bairro" required
                onChange={e => {const newData = {...personalData, bairro: e.target.value}; setPersonalData(newData);}}
            />
            <ErrorMessage>{errors.bairro}</ErrorMessage>

            <label htmlFor="cep">CEP *</label>
            <p>Insira apenas os números.</p>
            <input
                type="number" id="cep" required
                onChange={handleCEP}
            />
            <ErrorMessage>{errors.cep}</ErrorMessage>

            <label htmlFor="cidade">Cidade *</label>
            <input
                type="name" id="cidade" required
                onChange={e => {const newData = {...personalData, cidade: e.target.value}; setPersonalData(newData);}}
            />
            <ErrorMessage>{errors.cidade}</ErrorMessage>

            <label htmlFor="estado">Estado *</label>
            <select id="estado" required
            onChange={e => {const newData = {...personalData, estado: e.target.value}; setPersonalData(newData);}}>
                <option value=""></option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AM">AM</option>
                <option value="AP">AP</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MG">MG</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="PR">PR</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="RS">RS</option>
                <option value="SC">SC</option>
                <option value="SE">SE</option>
                <option value="SP">SP</option>
                <option value="TO">TO</option>
            </select>
            <ErrorMessage>{errors.estado}</ErrorMessage>

            <label htmlFor="necessidadeEspecial">Você possui alguma necessidade especial? *</label>
            <select id="necessidadeEspecial" required
            onChange={handleNecessidadeEspecial}>
                <option value=""></option>
                <option value="Não">Não</option>
                <option value="Sim">Sim</option>
            </select>
            <ErrorMessage>{errors.necessidadeespecial}</ErrorMessage>

            <label hidden htmlFor="qualNecessidade" id="labelNecessidade">Qual sua necessidade especial? *</label>
            <input
                type="hidden" id="qualNecessidade"
                onChange={e => {const newData = {...personalData, qualNecessidade: e.target.value}; setPersonalData(newData);}}
            />
            <ErrorMessage>{errors.qualnecessidade}</ErrorMessage>

            <label htmlFor="escolaridade">Escolaridade *</label>
            <p>O Processo Seletivo do CASDvest destina-se a alunos que já tenham concluído ou que concluirão o Ensino Médio em 2020.</p>
            <select id="escolaridade" required
            onChange={e => {const newData = {...personalData, escolaridade: e.target.value}; setPersonalData(newData);}}>
                <option value=""></option>
                <option value="completo">Ensino Médio completo</option>
                <option value="3">Cursando o 3º ano do Ensino Médio em 2020</option>
                <option value="2">Cursando o 2º ano do Ensino Médio em 2020</option>
            </select>
            <ErrorMessage>{errors.escolaridade}</ErrorMessage>

            <label htmlFor="tipoEscola">Tipo de escola *</label>
            <p>Considere a escola em que você concluiu ou concluirá o Ensino Médio.</p>
            <select id="tipoEscola" required
            onChange={e => {const newData = {...personalData, tipoEscola: e.target.value}; setPersonalData(newData);}}>
                <option value=""></option>
                <option value="PF">Pública Federal</option>
                <option value="PE">Pública Estadual</option>
                <option value="PM">Pública Municipal</option>
                <option value="PV">Privada</option>
            </select>
            <ErrorMessage>{errors.tipoescola}</ErrorMessage>

            <label htmlFor="escola">Nome da escola *</label>
            <p>Escolha a escola em que você concluiu ou concluirá o Ensino Médio.</p>
            <select id="escola" required
            onChange={handleEscola}>
                { /* Lista de escolas tirada do site do governo, adaptada para código em Excel */ }
                <option value=""></option>
                <option value="ADVENTISTA DE SAO JOSE DOS CAMPOS COLEGIO">ADVENTISTA DE SAO JOSE DOS CAMPOS COLEGIO</option>
                <option value="ALCEU MAYNARD ARAUJO PROFESSOR">ALCEU MAYNARD ARAUJO PROFESSOR</option>
                <option value="ALPHA LUMEN INSTITUTO">ALPHA LUMEN INSTITUTO</option>
                <option value="ANA CANDIDA DE BARROS MOLINA PROFESSORA">ANA CANDIDA DE BARROS MOLINA PROFESSORA</option>
                <option value="ANCHIETA COLEGIO">ANCHIETA COLEGIO</option>
                <option value="ANTONIO TEIXEIRA FERNANDES COLEGIO TECNICO">ANTONIO TEIXEIRA FERNANDES COLEGIO TECNICO</option>
                <option value="AQUARIUS UNIVAP COLEGIO">AQUARIUS UNIVAP COLEGIO</option>
                <option value="ARMANDO D OLIVEIRA COBRA">ARMANDO D OLIVEIRA COBRA</option>
                <option value="AYR PICANCO BARBOSA DE ALMEIDA PROFESSORA">AYR PICANCO BARBOSA DE ALMEIDA PROFESSORA</option>
                <option value="BENEDITO MATARAZZO DEPUTADO">BENEDITO MATARAZZO DEPUTADO</option>
                <option value="CASSIANO RICARDO COLEGIO ENSINO MEDIO">CASSIANO RICARDO COLEGIO ENSINO MEDIO</option>
                <option value="CENTRO ESCOLAR VALE DO PARAIBA CENTRO EDUCACAO OBJETIVO">CENTRO ESCOLAR VALE DO PARAIBA CENTRO EDUCACAO OBJETIVO</option>
                <option value="COC SISTEMA DE EDUCACAO">COC SISTEMA DE EDUCACAO</option>
                <option value="COLEGIO JOSEENSE">COLEGIO JOSEENSE</option>
                <option value="COLÉGIO PLANCK">COLÉGIO PLANCK</option>
                <option value="CONEXAO DE ENSINO INSTITUTO">CONEXAO DE ENSINO INSTITUTO</option>
                <option value="DIACONO HAMILTON BONTORIM DE SOUZA PROFESSOR">DIACONO HAMILTON BONTORIM DE SOUZA PROFESSOR</option>
                <option value="DINORA PEREIRA RAMOS BRITO PROFESSORA">DINORA PEREIRA RAMOS BRITO PROFESSORA</option>
                <option value="DIRCE ELIAS PROFESSORA">DIRCE ELIAS PROFESSORA</option>
                <option value="DOM BOSCO COLEGIO">DOM BOSCO COLEGIO</option>
                <option value="DORIVAL MONTEIRO DE OLIVEIRA PROFESSOR">DORIVAL MONTEIRO DE OLIVEIRA PROFESSOR</option>
                <option value="EDERA IRENE PEREIRA DE OLIVEIRA CARDOSO PROFESSORA">EDERA IRENE PEREIRA DE OLIVEIRA CARDOSO PROFESSORA</option>
                <option value="EDGAR MELLO MATTOS DE CASTRO ENGENHEIRO">EDGAR MELLO MATTOS DE CASTRO ENGENHEIRO</option>
                <option value="EDUCARE CENTRO DE ENSINO">EDUCARE CENTRO DE ENSINO</option>
                <option value="ELIDIA TEDESCO DE OLIVEIRA PROFESSORA">ELIDIA TEDESCO DE OLIVEIRA PROFESSORA</option>
                <option value="ELMANO FERREIRA VELOSO">ELMANO FERREIRA VELOSO</option>
                <option value="ELO EDUCACIONAL">ELO EDUCACIONAL</option>
                <option value="EMBRAER JUAREZ WANDERLEY COLEGIO">EMBRAER JUAREZ WANDERLEY COLEGIO</option>
                <option value="ESCOLA CRISTA BATISTA REGULAR">ESCOLA CRISTA BATISTA REGULAR</option>
                <option value="ESTEVAM FERRI PROFESSOR">ESTEVAM FERRI PROFESSOR</option>
                <option value="ETEC PROFESSORA ILZA NASCIMENTO PINTUS">ETEC PROFESSORA ILZA NASCIMENTO PINTUS</option>
                <option value="EUCLIDES BUENO MIRAGAIA">EUCLIDES BUENO MIRAGAIA</option>
                <option value="EVERARDO PASSOS PROFESSOR ESCOLA TECNICA">EVERARDO PASSOS PROFESSOR ESCOLA TECNICA</option>
                <option value="EXPOENTEC CENTRO EDUCACIONAL TECNICO">EXPOENTEC CENTRO EDUCACIONAL TECNICO</option>
                <option value="FRANCISCANO NOSSA SENHORA APARECIDA COLEGIO">FRANCISCANO NOSSA SENHORA APARECIDA COLEGIO</option>
                <option value="FRANCISCO LOPES DE AZEVEDO PROFESSOR">FRANCISCO LOPES DE AZEVEDO PROFESSOR</option>
                <option value="FRANCISCO PEREIRA DA SILVA PROFESSOR">FRANCISCO PEREIRA DA SILVA PROFESSOR</option>
                <option value="GERALDINA COELHO MONTEIRO PROFESSORA">GERALDINA COELHO MONTEIRO PROFESSORA</option>
                <option value="ILZA IRMA MOELLER COPPIO PROFESSORA">ILZA IRMA MOELLER COPPIO PROFESSORA</option>
                <option value="INOVANDO O APRENDIZADO INSTITUTO DE DESENVOLVIME EDUC IDEIA">INOVANDO O APRENDIZADO INSTITUTO DE DESENVOLVIME EDUC IDEIA</option>
                <option value="INSPIRE COLEGIO">INSPIRE COLEGIO</option>
                <option value="INSTITUTO EDUCACIONAL IGUATEMY ESCOLA DE EI EF E EM">INSTITUTO EDUCACIONAL IGUATEMY ESCOLA DE EI EF E EM</option>
                <option value="INSTITUTO SAO JOSE">INSTITUTO SAO JOSE</option>
                <option value="JARDIM REPUBLICA">JARDIM REPUBLICA</option>
                <option value="JENI DAVI BACHA PROFESSORA">JENI DAVI BACHA PROFESSORA</option>
                <option value="JOAO CURSINO">JOAO CURSINO</option>
                <option value="JOAQUIM ANDRADE MEIRELLES PROFESSOR">JOAQUIM ANDRADE MEIRELLES PROFESSOR</option>
                <option value="JOAQUIM DE MOURA CANDELARIA PROFESSOR">JOAQUIM DE MOURA CANDELARIA PROFESSOR</option>
                <option value="JORGE BARBOSA MOREIRA PROFESSOR">JORGE BARBOSA MOREIRA PROFESSOR</option>
                <option value="JOSE MARIOTTO FERREIRA MAJOR AVIADOR">JOSE MARIOTTO FERREIRA MAJOR AVIADOR</option>
                <option value="JOSE VIEIRA MACEDO PROFESSOR">JOSE VIEIRA MACEDO PROFESSOR</option>
                <option value="JUVENAL MACHADO DE ARAUJO PROFESSOR">JUVENAL MACHADO DE ARAUJO PROFESSOR</option>
                <option value="LOURDES MARIA DE CAMARGO PROFESSORA">LOURDES MARIA DE CAMARGO PROFESSORA</option>
                <option value="MALBA THEREZA FERRAZ CAMPANER PROFESSORA">MALBA THEREZA FERRAZ CAMPANER PROFESSORA</option>
                <option value="MANOEL PEDRO OLIVEIRA COMED - ESCOLA POLITECNICA DE EM">MANOEL PEDRO OLIVEIRA COMED - ESCOLA POLITECNICA DE EM</option>
                <option value="MARCIA HELENA BARBOSA LINO PROFESSORA">MARCIA HELENA BARBOSA LINO PROFESSORA</option>
                <option value="MARIA APARECIDA VERISSIMO MADUREIRA RAMOS PROFESSORA">MARIA APARECIDA VERISSIMO MADUREIRA RAMOS PROFESSORA</option>
                <option value="MARIA DOLORES VERISSIMO MADUREIRA PROFESSORA">MARIA DOLORES VERISSIMO MADUREIRA PROFESSORA</option>
                <option value="MARIA FERREIRA SONNEWEND PROFESSORA">MARIA FERREIRA SONNEWEND PROFESSORA</option>
                <option value="MARIA LUIZA DE GUIMARAES MEDEIROS PROFESSORA">MARIA LUIZA DE GUIMARAES MEDEIROS PROFESSORA</option>
                <option value="MARILDA FERREIRA DE BRITO BARROS PEREIRA">MARILDA FERREIRA DE BRITO BARROS PEREIRA</option>
                <option value="MIGUEL NAKED MAJOR">MIGUEL NAKED MAJOR</option>
                <option value="MOABE CURY">MOABE CURY</option>
                <option value="NELSON DO NASCIMENTO MONTEIRO PROFESSOR">NELSON DO NASCIMENTO MONTEIRO PROFESSOR</option>
                <option value="NILCE CONCEICAO DE LIMA PROFESSORA">NILCE CONCEICAO DE LIMA PROFESSORA</option>
                <option value="NOVA GERACAO COLEGIO">NOVA GERACAO COLEGIO</option>
                <option value="OPCAO COLEGIO TECNICO">OPCAO COLEGIO TECNICO</option>
                <option value="PEDRO MASCARENHAS DOUTOR">PEDRO MASCARENHAS DOUTOR</option>
                <option value="PEDRO MAZZA PROFESSOR">PEDRO MAZZA PROFESSOR</option>
                <option value="POLIEDRO COLEGIO">POLIEDRO COLEGIO</option>
                <option value="RIBEIRO GOULART INSTITUTO DE EDUC ESC MAXIMUS">RIBEIRO GOULART INSTITUTO DE EDUC ESC MAXIMUS</option>
                <option value="RUI RODRIGUES DORIA DOUTOR">RUI RODRIGUES DORIA DOUTOR</option>
                <option value="RUTH COUTINHO SOBREIRO PROFESSORA">RUTH COUTINHO SOBREIRO PROFESSORA</option>
                <option value="SESI 182 CENTRO EDUCACIONAL">SESI 182 CENTRO EDUCACIONAL</option>
                <option value="SONIA MARIA ALEXANDRE PEREIRA PROFESSORA">SONIA MARIA ALEXANDRE PEREIRA PROFESSORA</option>
                <option value="TABLEAU COLEGIO">TABLEAU COLEGIO</option>
                <option value="TEOFILO REZENDE COLEGIO">TEOFILO REZENDE COLEGIO</option>
                <option value="VALMAR LOURENCO SANTIAGO PROFESSOR">VALMAR LOURENCO SANTIAGO PROFESSOR</option>
                <option value="WALTER FORTUNATO ESCOLA">WALTER FORTUNATO ESCOLA</option>
                <option value="XENOFONTE STRABAO DE CASTRO PROFESSOR">XENOFONTE STRABAO DE CASTRO PROFESSOR</option>
                <option value="YOSHIYA TAKAOKA">YOSHIYA TAKAOKA</option>
                <option value="ZILAH FERREIRA VIAGI PASSARELLI DE CAMPOS PROFESSORA">ZILAH FERREIRA VIAGI PASSARELLI DE CAMPOS PROFESSORA</option>
                <option value="Outra">Outra</option>
            </select>
            <ErrorMessage>{errors.escola}</ErrorMessage>

            <label hidden htmlFor="outraEscola" id="labelEscola">Outra escola: *</label>
            <input
                type="hidden" id="outraEscola"
                onChange={e => {const newData = {...personalData, outraEscola: e.target.value}; setPersonalData(newData);}}
            />
            <ErrorMessage>{errors.outraescola}</ErrorMessage>

            <label htmlFor="conhecimentoPS">Como você tomou conhecimento do Processo Seletivo do CASDvest? *</label>
            <select id="conhecimentoPS" required
            onChange={handleForma}>
                <option value=""></option>
                <option value="alunos">Indicação de alunos do CASD</option>
                <option value="voluntarios">Indicação de voluntários do CASD</option>
                <option value="conhecidos">Indicação de outros conhecidos</option>
                <option value="redes-sociais">Redes sociais (Facebook e Instagram)</option>
                <option value="internet">Internet (site e mecanismos de busca)</option>
                <option value="imprensa">Imprensa (TV, rádio e jornal)</option>
                <option value="outdoor">Outdoor em ônibus</option>
                <option value="visita">Visita à escola</option>
                <option value="outro">Outro</option>
            </select>
            <ErrorMessage>{errors.conhecimentopS}</ErrorMessage>

            <label hidden htmlFor="outraForma" id="labelForma">Outra forma: *</label>
            <input
                type="hidden" id="outraForma"
                onChange={e => {const newData = {...personalData, outraForma: e.target.value}; setPersonalData(newData);}}
            />
            <ErrorMessage>{errors.outraforma}</ErrorMessage>

            { console.log(formData) }
        </Container>
    );
}

export default PersonalDataInputs;
