import React, { useState, useContext, useEffect } from 'react';
import { Container } from './styles';
import FormRegistrationContext from '../../pages/FormRegistration/context';

// Diferenças entre CASDvest e CASDinho
const difCourse = [
    {
        "casdvest": {
            // Pergunta de escolaridade (legenda e opções)
            schoolingText:
                <p>O Processo Seletivo do CASDvest destina-se a alunos que já tenham concluído ou que concluirão o Ensino Médio em 2020.</p>,
            schoolingOptions:
            <>
                <option value="completo">Ensino Médio completo</option>
                <option value="3">Cursando o 3º ano do Ensino Médio em 2020</option>
                <option value="2">Cursando o 2º ano do Ensino Médio em 2020</option>
            </>,
            // Pergunta de tipo de escola (legenda)
            kindSchoolText:
                <p>Considere a escola em que você concluiu ou concluirá o Ensino Médio.</p>,
            // Pergunta de escola (legenda e opções)
            schoolText:
                <p>Escolha a escola em que você concluiu ou concluirá o Ensino Médio.</p>,
            schoolOptions:
            <>
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
            </>,
            // Pergunta de forma de conhecimento sobre o PS (legenda)
            wayLabel: "Como você tomou conhecimento do Processo Seletivo do CASDvest? *"
        },
        "casdinho": {
            schoolingText:
                <p>O Processo Seletivo do CASDinho 2021 destina-se a alunos que cursarão o 8º ou 9º ano do Ensino Fundamental em 2021.</p>,
            schoolingOptions:
            <>
                <option value="8">Cursando o 8º ano do Ensino Fundamental em 2020</option>
                <option value="7">Cursando o 7º ano do Ensino Fundamental em 2020</option>
            </>,
            kindSchoolText:
                <p>Considere a escola em que você estuda atualmente.</p>,
            schoolText:
                <p>Escolha a escola em que você estuda atualmente.</p>,
            schoolOptions:
            <>
                <option value="ADVENTISTA DE SAO JOSE DOS CAMPOS COLEGIO">ADVENTISTA DE SAO JOSE DOS CAMPOS COLEGIO</option>
                <option value="ALCEU MAYNARD ARAUJO PROFESSOR">ALCEU MAYNARD ARAUJO PROFESSOR</option>
                <option value="ALPHA LUMEN INSTITUTO">ALPHA LUMEN INSTITUTO</option>
                <option value="ALVARO GONCALVES PROF EMEF">ALVARO GONCALVES PROF EMEF</option>
                <option value="ANA BERLING MACEDO PROFA EMEF">ANA BERLING MACEDO PROFA EMEF</option>
                <option value="ANA CANDIDA DE BARROS MOLINA PROFESSORA">ANA CANDIDA DE BARROS MOLINA PROFESSORA</option>
                <option value="ANA HERONDINA SOARES SCHYCHOF PROFESSORA">ANA HERONDINA SOARES SCHYCHOF PROFESSORA</option>
                <option value="ANCHIETA COLEGIO">ANCHIETA COLEGIO</option>
                <option value="ANTONIO PALMA SOBRINHO PROF EMEF">ANTONIO PALMA SOBRINHO PROF EMEF</option>
                <option value="ARLINDO CAETANO FILHO PROF EEIEF">ARLINDO CAETANO FILHO PROF EEIEF</option>
                <option value="AUREA CANTINHO RODRIGUES PROFA EMEF">AUREA CANTINHO RODRIGUES PROFA EMEF</option>
                <option value="AYR PICANCO BARBOSA DE ALMEIDA PROFESSORA">AYR PICANCO BARBOSA DE ALMEIDA PROFESSORA</option>
                <option value="BENEDITO MATARAZZO DEPUTADO">BENEDITO MATARAZZO DEPUTADO</option>
                <option value="CARLOS SALONI ESCOLA">CARLOS SALONI ESCOLA</option>
                <option value="CASA PANDAVAS EEIPG CENTRO PEDAGOGICO">CASA PANDAVAS EEIPG CENTRO PEDAGOGICO</option>
                <option value="CASSIANO RICARDO COLEGIO EIEEF">CASSIANO RICARDO COLEGIO EIEEF</option>
                <option value="CENTRO ATEND SOCIOEDUC ADOLESC SAO JOSE DOS CAMPOS CI">CENTRO ATEND SOCIOEDUC ADOLESC SAO JOSE DOS CAMPOS CI</option>
                <option value="CENTRO ESCOLAR VALE DO PARAIBA CENTRO EDUCACAO OBJETIVO">CENTRO ESCOLAR VALE DO PARAIBA CENTRO EDUCACAO OBJETIVO</option>
                <option value="COLEGIO EVOLUCAO ED INFANTIL E ENS FUNDAMENTAL">COLEGIO EVOLUCAO ED INFANTIL E ENS FUNDAMENTAL</option>
                <option value="COLEGIO JOSEENSE">COLEGIO JOSEENSE</option>
                <option value="COLEGIO MATER DEI">COLEGIO MATER DEI</option>
                <option value="CONEXAO DE ENSINO INSTITUTO">CONEXAO DE ENSINO INSTITUTO</option>
                <option value="CRESCER ESPACO DE CRESCEMENTO E APERFEIC PSICOPEDAG COL">CRESCER ESPACO DE CRESCEMENTO E APERFEIC PSICOPEDAG COL</option>
                <option value="DIACONO HAMILTON BONTORIM DE SOUZA PROFESSOR">DIACONO HAMILTON BONTORIM DE SOUZA PROFESSOR</option>
                <option value="DINORA PEREIRA RAMOS BRITO PROFESSORA">DINORA PEREIRA RAMOS BRITO PROFESSORA</option>
                <option value="DIRCE ELIAS PROFESSORA">DIRCE ELIAS PROFESSORA</option>
                <option value="DOM BOSCO COLEGIO">DOM BOSCO COLEGIO</option>
                <option value="DOMINGOS DE MACEDO CUSTODIO PROFESSOR">DOMINGOS DE MACEDO CUSTODIO PROFESSOR</option>
                <option value="DOSULINA CHENQUE CHAVES DE ANDRADE PROFA EMEF">DOSULINA CHENQUE CHAVES DE ANDRADE PROFA EMEF</option>
                <option value="ECCOS COLEGIO">ECCOS COLEGIO</option>
                <option value="EDERA IRENE PEREIRA DE OLIVEIRA CARDOSO PROFESSORA">EDERA IRENE PEREIRA DE OLIVEIRA CARDOSO PROFESSORA</option>
                <option value="EDGAR MELLO MATTOS DE CASTRO ENGENHEIRO">EDGAR MELLO MATTOS DE CASTRO ENGENHEIRO</option>
                <option value="EDUCANDARIO JESUS EUCARISTICO">EDUCANDARIO JESUS EUCARISTICO</option>
                <option value="ELIDIA TEDESCO DE OLIVEIRA PROFESSORA">ELIDIA TEDESCO DE OLIVEIRA PROFESSORA</option>
                <option value="ELIZABETE DE PAULA HONORATO PROFA EMEF">ELIZABETE DE PAULA HONORATO PROFA EMEF</option>
                <option value="ELMANO FERREIRA VELOSO">ELMANO FERREIRA VELOSO</option>
                <option value="ELO EDUCACIONAL">ELO EDUCACIONAL</option>
                <option value="ELZA REGINA FERREIRA BEVILACQUA PROFA EMEF">ELZA REGINA FERREIRA BEVILACQUA PROFA EMEF</option>
                <option value="EMAK ESCOLA EMANUEL KANT">EMAK ESCOLA EMANUEL KANT</option>
                <option value="EMEF EMMANUEL ANTONIO DOS SANTOS">EMEF EMMANUEL ANTONIO DOS SANTOS</option>
                <option value="ESCOLA CRISTA BATISTA REGULAR">ESCOLA CRISTA BATISTA REGULAR</option>
                <option value="ESFERA ESCOLA INTERNACIONAL">ESFERA ESCOLA INTERNACIONAL</option>
                <option value="EUCLIDES BUENO MIRAGAIA">EUCLIDES BUENO MIRAGAIA</option>
                <option value="EVOLUTI CILEGIO">EVOLUTI CILEGIO</option>
                <option value="FRANCISCANO NOSSA SENHORA APARECIDA COLEGIO">FRANCISCANO NOSSA SENHORA APARECIDA COLEGIO</option>
                <option value="FRANCISCO JOAO LEME">FRANCISCO JOAO LEME</option>
                <option value="FRANCISCO LOPES DE AZEVEDO PROFESSOR">FRANCISCO LOPES DE AZEVEDO PROFESSOR</option>
                <option value="FUTURA GERACAO COLEGIO">FUTURA GERACAO COLEGIO</option>
                <option value="GERALDINA COELHO MONTEIRO PROFESSORA">GERALDINA COELHO MONTEIRO PROFESSORA</option>
                <option value="GERALDO DE ALMEIDA PROF EMEF">GERALDO DE ALMEIDA PROF EMEF</option>
                <option value="HELIO AUGUSTO DE SOUZA PROF EMEF">HELIO AUGUSTO DE SOUZA PROF EMEF</option>
                <option value="HELIO WALTER BEVILACQUA PROFESSOR EMEF">HELIO WALTER BEVILACQUA PROFESSOR EMEF</option>
                <option value="HOMERA DA SILVA BRAGA PROFA EMEF">HOMERA DA SILVA BRAGA PROFA EMEF</option>
                <option value="ILDETE MENDONCA BARBOSA PROFA EMEF">ILDETE MENDONCA BARBOSA PROFA EMEF</option>
                <option value="ILGA PUSPLATAIS PROFA EMEF">ILGA PUSPLATAIS PROFA EMEF</option>
                <option value="INOVANDO O APRENDIZADO INSTITUTO DE DESENVOLVIME EDUC IDEIA">INOVANDO O APRENDIZADO INSTITUTO DE DESENVOLVIME EDUC IDEIA</option>
                <option value="INSPIRE COLEGIO">INSPIRE COLEGIO</option>
                <option value="INSTITUTO EDUCACIONAL IGUATEMY ESCOLA DE EI EF E EM">INSTITUTO EDUCACIONAL IGUATEMY ESCOLA DE EI EF E EM</option>
                <option value="INSTITUTO SAO JOSE">INSTITUTO SAO JOSE</option>
                <option value="JACYRA VIEIRA BARACHO PROFA EMEF">JACYRA VIEIRA BARACHO PROFA EMEF</option>
                <option value="JENI DAVI BACHA PROFESSORA">JENI DAVI BACHA PROFESSORA</option>
                <option value="JOAO CURSINO">JOAO CURSINO</option>
                <option value="JOAO FERREIRA DOS SANTOS PROFESSOR">JOAO FERREIRA DOS SANTOS PROFESSOR</option>
                <option value="JOAO MOROTTI FILHO">JOAO MOROTTI FILHO</option>
                <option value="JOAQUIM ANDRADE MEIRELLES PROFESSOR">JOAQUIM ANDRADE MEIRELLES PROFESSOR</option>
                <option value="JOAQUIM DE MOURA CANDELARIA PROFESSOR">JOAQUIM DE MOURA CANDELARIA PROFESSOR</option>
                <option value="JORGE BARBOSA MOREIRA PROFESSOR">JORGE BARBOSA MOREIRA PROFESSOR</option>
                <option value="JOSE MARIOTTO FERREIRA MAJOR AVIADOR">JOSE MARIOTTO FERREIRA MAJOR AVIADOR</option>
                <option value="JUVENAL MACHADO DE ARAUJO PROFESSOR">JUVENAL MACHADO DE ARAUJO PROFESSOR</option>
                <option value="LEONOR PEREIRA NUNES GALVAO PROFA EMEF">LEONOR PEREIRA NUNES GALVAO PROFA EMEF</option>
                <option value="LOURDES MARIA DE CAMARGO PROFESSORA">LOURDES MARIA DE CAMARGO PROFESSORA</option>
                <option value="LUCE PRIMA COLEGIO">LUCE PRIMA COLEGIO</option>
                <option value="LUCIA PEREIRA RODRIGUES PROFA EMEF">LUCIA PEREIRA RODRIGUES PROFA EMEF</option>
                <option value="LUIZ LEITE PROF EMEF">LUIZ LEITE PROF EMEF</option>
                <option value="LUZIA LEVINA APARECIDA BORGES PROFA EMEF">LUZIA LEVINA APARECIDA BORGES PROFA EMEF</option>
                <option value="MALBA THEREZA FERRAZ CAMPANER PROFESSORA">MALBA THEREZA FERRAZ CAMPANER PROFESSORA</option>
                <option value="MARIA AMELIA WAKAMATSU PROFA EMEF">MARIA AMELIA WAKAMATSU PROFA EMEF</option>
                <option value="MARIA ANTONIETA FERREIRA PAYAR PROFA EMEF">MARIA ANTONIETA FERREIRA PAYAR PROFA EMEF</option>
                <option value="MARIA APARECIDA SANTOS RONCONI PROFA EMEF">MARIA APARECIDA SANTOS RONCONI PROFA EMEF</option>
                <option value="MARIA APARECIDA VERISSIMO MADUREIRA RAMOS PROFESSORA">MARIA APARECIDA VERISSIMO MADUREIRA RAMOS PROFESSORA</option>
                <option value="MARIA DE MELO PROFA EMEF">MARIA DE MELO PROFA EMEF</option>
                <option value="MARIA FERREIRA SONNEWEND PROFESSORA">MARIA FERREIRA SONNEWEND PROFESSORA</option>
                <option value="MARIA NAZARETH DE MOURA VERONESE PROFA EMEF">MARIA NAZARETH DE MOURA VERONESE PROFA EMEF</option>
                <option value="MARIA OFELIA VENEZIANI PEDROSA PROFA EMEF">MARIA OFELIA VENEZIANI PEDROSA PROFA EMEF</option>
                <option value="MARIANA TEIXEIRA CORNELIO PROFA EMEF">MARIANA TEIXEIRA CORNELIO PROFA EMEF</option>
                <option value="MARILDA FERREIRA DE BRITO BARROS PEREIRA">MARILDA FERREIRA DE BRITO BARROS PEREIRA</option>
                <option value="MERCEDES CARNEVALLI KLEIN PROFA EMEF">MERCEDES CARNEVALLI KLEIN PROFA EMEF</option>
                <option value="MERCEDES RACHID EDWARDS EMEF">MERCEDES RACHID EDWARDS EMEF</option>
                <option value="MIGUEL NAKED MAJOR">MIGUEL NAKED MAJOR</option>
                <option value="MOABE CURY">MOABE CURY</option>
                <option value="MOACYR BENEDICTO DE SOUZA PROF EMEF">MOACYR BENEDICTO DE SOUZA PROF EMEF</option>
                <option value="MONTEIRO LOBATO EEIFM">MONTEIRO LOBATO EEIFM</option>
                <option value="MOPPE EDUCACAO INFANTIL E ENSINO FUNDAMENTAL">MOPPE EDUCACAO INFANTIL E ENSINO FUNDAMENTAL</option>
                <option value="NATURAL VIVENCIA ESCOLA DE EI E EF">NATURAL VIVENCIA ESCOLA DE EI E EF</option>
                <option value="NILCE CONCEICAO DE LIMA PROFESSORA">NILCE CONCEICAO DE LIMA PROFESSORA</option>
                <option value="NORMA DE CONTI SIMAO PROFA EMEF">NORMA DE CONTI SIMAO PROFA EMEF</option>
                <option value="NOVA PAULISTA CENTRO EDUCACIONAL">NOVA PAULISTA CENTRO EDUCACIONAL</option>
                <option value="OLIMPIO CATAO">OLIMPIO CATAO</option>
                <option value="OPCAO COLEGIO TECNICO">OPCAO COLEGIO TECNICO</option>
                <option value="OTACILIA MADUREIRA DE MOURA PROFA EMEF">OTACILIA MADUREIRA DE MOURA PROFA EMEF</option>
                <option value="PALMYRA SANT'ANNA PROFA EMEF">PALMYRA SANT'ANNA PROFA EMEF</option>
                <option value="PEDRO DE ALCANTARA DOM EMEF">PEDRO DE ALCANTARA DOM EMEF</option>
                <option value="PEDRO MASCARENHAS DOUTOR">PEDRO MASCARENHAS DOUTOR</option>
                <option value="PEDRO MAZZA PROFESSOR">PEDRO MAZZA PROFESSOR</option>
                <option value="POLIEDRO ENSINO FUNDAMENTAL COLEGIO">POLIEDRO ENSINO FUNDAMENTAL COLEGIO</option>
                <option value="POSSIDONIO JOSE DE FREITAS EMEF">POSSIDONIO JOSE DE FREITAS EMEF</option>
                <option value="PRESBITERIANA ESCOLA DE EDUCACAO INFANTIL ENSINO FUNDAMENTAL">PRESBITERIANA ESCOLA DE EDUCACAO INFANTIL ENSINO FUNDAMENTAL</option>
                <option value="RIBEIRO GOULART INSTITUTO DE EDUC ESC MAXIMUS">RIBEIRO GOULART INSTITUTO DE EDUC ESC MAXIMUS</option>
                <option value="RONDON MARECHAL">RONDON MARECHAL</option>
                <option value="ROSA TOMITA PROFA EMEF">ROSA TOMITA PROFA EMEF</option>
                <option value="RUI RODRIGUES DORIA DOUTOR">RUI RODRIGUES DORIA DOUTOR</option>
                <option value="RUTH COUTINHO SOBREIRO PROFESSORA">RUTH COUTINHO SOBREIRO PROFESSORA</option>
                <option value="RUTH NUNES DA TRINDADE PROFA EMEF">RUTH NUNES DA TRINDADE PROFA EMEF</option>
                <option value="SEBASTIANA COBRA PROFA EMEF">SEBASTIANA COBRA PROFA EMEF</option>
                <option value="SESI 182 CENTRO EDUCACIONAL">SESI 182 CENTRO EDUCACIONAL</option>
                <option value="SILVANA MARIA RIBEIRO DE ALMEIDA PROFA EMEF">SILVANA MARIA RIBEIRO DE ALMEIDA PROFA EMEF</option>
                <option value="SONHO DE CRIANCA CENTRO EDUCACIONAL">SONHO DE CRIANCA CENTRO EDUCACIONAL</option>
                <option value="SONIA MARIA ALEXANDRE PEREIRA PROFESSORA">SONIA MARIA ALEXANDRE PEREIRA PROFESSORA</option>
                <option value="SONIA MARIA PEREIRA DA SILVA PROFA EMEF">SONIA MARIA PEREIRA DA SILVA PROFA EMEF</option>
                <option value="TABLEAU COLEGIO">TABLEAU COLEGIO</option>
                <option value="TEOFILO REZENDE COLEGIO">TEOFILO REZENDE COLEGIO</option>
                <option value="THEREZINHA DO MENINO JESUS SOARES DO NASCIMENTO PROFA EMEF">THEREZINHA DO MENINO JESUS SOARES DO NASCIMENTO PROFA EMEF</option>
                <option value="UBIRAJARA BERNA DE CHIARA UBIRAJARA BRASIL">UBIRAJARA BERNA DE CHIARA UBIRAJARA BRASIL</option>
                <option value="VERA BABO DE OLIVEIRA PROFA EMEF">VERA BABO DE OLIVEIRA PROFA EMEF</option>
                <option value="VERA LUCIA CARNEVALLI BARRETO PROFA EMEF">VERA LUCIA CARNEVALLI BARRETO PROFA EMEF</option>
                <option value="WALDEMAR RAMOS PROF EMEF">WALDEMAR RAMOS PROF EMEF</option>
                <option value="WALTER FORTUNATO ESCOLA">WALTER FORTUNATO ESCOLA</option>
                <option value="WILMA RAGAZZI BOCCARDO PROFESSORA">WILMA RAGAZZI BOCCARDO PROFESSORA</option>
                <option value="XENOFONTE STRABAO DE CASTRO PROFESSOR">XENOFONTE STRABAO DE CASTRO PROFESSOR</option>
                <option value="YOSHIYA TAKAOKA">YOSHIYA TAKAOKA</option>
                <option value="ZILAH FERREIRA VIAGI PASSARELLI DE CAMPOS PROFESSORA">ZILAH FERREIRA VIAGI PASSARELLI DE CAMPOS PROFESSORA</option>
            </>,
            wayLabel: "Como você tomou conhecimento do Processo Seletivo do CASDinho? *"
        }
    }
]

function PersonalDataInputs({ idCourse }) {
    const [personalData, setPersonalData] = useState({});
    const { formData, setFormData } = useContext(FormRegistrationContext);

    const infos = difCourse[0][idCourse];

    useEffect(() => setFormData({...formData, ...personalData}), [personalData, setFormData, setPersonalData]);

    // Estrutura de perguntas com validação por padrão:
    /// const ... = RegExp(...); --> expressão regular que define o padrão
    /// function handle...(e) --> função que lida com a validação
    /// Se o input obedece padrão, salva no banco de dados
    /// Se não obedece, salva string vazia

    // Validação da data de nascimento
    const dataRegEx = RegExp(/^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/);
    function handleDate(e) {
        if(dataRegEx.test(e.target.value))
            setPersonalData({...personalData, birthDate: e.target.value});
        else
            setPersonalData({...personalData, birthDate: ""});
    }

    // Validação do nome do responsável
    const NomeRegEx = RegExp(/^([A-Z]{1}[a-z]*[ ]{1})+[A-Z]{1}[a-z]*$/);
    function handleResponsibleName(e) {
        if(NomeRegEx.test(e.target.value))
            setPersonalData({...personalData, responsibleName: e.target.value});
        else
            setPersonalData({...personalData, responsibleName: ""});
    }

    // Validação dos telefones
    const telRegEx = RegExp(/^[0-9]{11}$/);
    function handlePhone1(e) {
        if(telRegEx.test(e.target.value))
            setPersonalData({...personalData, phone1: e.target.value});
        else
            setPersonalData({...personalData, phone1: ""});
    }
    function handlePhone2(e) {
        if(telRegEx.test(e.target.value))
            setPersonalData({...personalData, phone2: e.target.value});
        else
            setPersonalData({...personalData, phone2: ""});
    }

    // Validação do CEP
    const CEPRegEx = RegExp(/^[0-9]{8}$/);
    function handleCEP(e) {
        if(CEPRegEx.test(e.target.value))
            setPersonalData({...personalData, cep: e.target.value});
        else
            setPersonalData({...personalData, cep: ""});
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
    function handleKinship(e) {
        var par = e.target.value;

        if (par === "Outro") {
            document.getElementById("labelKinship").removeAttribute("hidden");
            document.getElementById("otherKinship").setAttribute("type","text");
            document.getElementById("otherKinship").setAttribute("required","");
            setPersonalData({...personalData, kinship: par});
        }
        else {
            document.getElementById("labelKinship").setAttribute("hidden","");
            document.getElementById("otherKinship").setAttribute("type","hidden");
            document.getElementById("otherKinship").setAttribute("value","");
            document.getElementById("otherKinship").removeAttribute("required");
            setPersonalData({...personalData, kinship: par, otherKinship: ''});
        }
    }

    // Pergunta condicional de necessidade especial
    function handleSpecialNecessity(e) {
        var nec = e.target.value;

        if(nec == "Sim") {
            document.getElementById("labelSpecialNecessity").removeAttribute("hidden");
            document.getElementById("whichNecessity").setAttribute("type","text");
            document.getElementById("whichNecessity").setAttribute("required","");
            setPersonalData({...personalData, ifSpecialNecessity: nec});
        }
        else {
            document.getElementById("labelSpecialNecessity").setAttribute("hidden","");
            document.getElementById("whichNecessity").setAttribute("type","hidden");
            document.getElementById("whichNecessity").setAttribute("value","");
            document.getElementById("whichNecessity").removeAttribute("required");
            setPersonalData({...personalData, ifSpecialNecessity: nec, whichNecessity: ''});
        }
    }

    // Pergunta condicional de escola
    function handleSchool(e) {
        var esc = e.target.value;

        if (esc === "Outra") {
            document.getElementById("labelSchool").removeAttribute("hidden");
            document.getElementById("otherSchool").setAttribute("type","text");
            document.getElementById("otherSchool").setAttribute("required","");
            setPersonalData({...personalData, school: esc});
        }
        else {
            document.getElementById("labelSchool").setAttribute("hidden","");
            document.getElementById("otherSchool").setAttribute("type","hidden");
            document.getElementById("otherSchool").setAttribute("value","");
            document.getElementById("otherSchool").removeAttribute("required");
            setPersonalData({...personalData, school: esc, otherSchool: ''});
        }
    }

    // Pergunta condicional de forma de conhecimento do PS
    function handleWay(e) {
        var fo = e.target.value;

        if (fo === "outro") {
            document.getElementById("labelWay").removeAttribute("hidden");
            document.getElementById("otherWay").setAttribute("type","text");
            document.getElementById("otherWay").setAttribute("required","");
            setPersonalData({...personalData, wayPS: fo});
        }
        else {
            document.getElementById("labelWay").setAttribute("hidden","");
            document.getElementById("otherWay").setAttribute("type","hidden");
            document.getElementById("otherWay").setAttribute("value","");
            setPersonalData({...personalData, wayPS: fo, otherWay: ''});
        }
    }

    return (
        <Container>
            <h3>Dados pessoais</h3>

            <label htmlFor="gender">Gênero *</label>
            <select id="gender" required
            onChange={e => {const newData = {...personalData, gender: e.target.value}; setPersonalData(newData);}}>
                <option value=""></option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
            </select>

            <label htmlFor="birthDate">Data de nascimento *</label>
            <p>Escreva no formato DD/MM/AAAA.</p>
            <input 
                type="text" id="birthDate" required placeholder="DD/MM/AAAA"
                onChange={handleDate}
            />

            <label htmlFor="ResponsibleName">Nome de um responsável *</label>
            <p>Conforme consta no documento de identidade. Escreva cada nome com a primeira letra maiúscula e as outras minúsculas, sem acentos. Use um espaço entre cada nome.</p>
            <input 
                type="text" id="ResponsibleName" required
                onChange={handleResponsibleName}
            />

            <label htmlFor="kinship">Parentesco do responsável *</label>
            <select id="kinship" required
            onChange={handleKinship}>
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

            <label hidden htmlFor="otherKinship" id="labelKinship">Outro parentesco: *</label>
            <input
                type="hidden" id="otherKinship"
                onChange={e => {const newData = {...personalData, otherKinship: e.target.value}; setPersonalData(newData);}}
            />

            <label htmlFor="phone1">Telefone 1 *</label>
            <p>Insira apenas os números, incluindo DDD.</p>
            <input 
                type="text" id="phone1" required
                onChange={handlePhone1}
            />

            <label htmlFor="phone2">Telefone 2</label>
            <p>Insira apenas os números, incluindo DDD.</p>
            <input 
                type="text" id="phone2"
                onChange={handlePhone2}
            />

            <label htmlFor="street">Endereço *</label>
            <p>Nome da rua, avenida ou correspondente (sem número ou complemento).</p> 
            <input 
                type="name" id="street" required
                onChange={e => {const newData = {...personalData, street: e.target.value}; setPersonalData(newData);}}
            />
            
            <label htmlFor="numberStreet">Número *</label>
            <p>Número da residência.</p>
            <input 
                type="number" id="numberStreet" required
                onChange={e => {const newData = {...personalData, numberStreet: e.target.value}; setPersonalData(newData);}}
            />

            <label htmlFor="complementAddress">Complemento</label>
            <p>Complemento do endereço, se houver.</p>
            <input 
                type="text" id="complementAddress" required
                onChange={e => {const newData = {...personalData, complementAddress: e.target.value}; setPersonalData(newData);}}
            />

            <label htmlFor="neighborhood">Bairro *</label>    
            <input
                type="name" id="neighborhood" required
                onChange={e => {const newData = {...personalData, neighborhood: e.target.value}; setPersonalData(newData);}}
            />

            <label htmlFor="cep">CEP *</label>
            <p>Insira apenas os números.</p>
            <input
                type="number" id="cep" required
                onChange={handleCEP}
            />

            <label htmlFor="city">Cidade *</label>
            <input
                type="name" id="city" required
                onChange={e => {const newData = {...personalData, city: e.target.value}; setPersonalData(newData);}}
            />

            <label htmlFor="state">Estado *</label>
            <select id="state" required
            onChange={e => {const newData = {...personalData, state: e.target.value}; setPersonalData(newData);}}>
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

            <label htmlFor="specialNecessity">Você possui alguma necessidade especial? *</label>
            <select id="specialNecessity" required
            onChange={handleSpecialNecessity}>
                <option value=""></option>
                <option value="Não">Não</option>
                <option value="Sim">Sim</option>
            </select>

            <label hidden htmlFor="whichNecessity" id="labelSpecialNecessity">Qual sua necessidade especial? *</label>
            <input
                type="hidden" id="whichNecessity"
                onChange={e => {const newData = {...personalData, whichNecessity: e.target.value}; setPersonalData(newData);}}
            />

            <label htmlFor="schooling">Escolaridade *</label>
            {infos.schoolingText}
            <select id="schooling" required
            onChange={e => {const newData = {...personalData, schooling: e.target.value}; setPersonalData(newData);}}>
                <option value=""></option>
                {infos.schoolingOptions}
            </select>

            <label htmlFor="kindSchool">Tipo de escola *</label>
            {infos.kindSchoolText}
            <select id="kindSchool" required
            onChange={e => {const newData = {...personalData, kindSchool: e.target.value}; setPersonalData(newData);}}>
                <option value=""></option>
                <option value="PF">Pública Federal</option>
                <option value="PE">Pública Estadual</option>
                <option value="PM">Pública Municipal</option>
                <option value="PV">Privada</option>
            </select>

            <label htmlFor="school">Nome da escola *</label>
            {infos.schoolText}
            <select id="school" required
            onChange={handleSchool}>
                { /* Lista de escolas tirada do site do governo, adaptada para código em Excel */ }
                <option value=""></option>
                {infos.schoolOptions}
            </select>

            <label hidden htmlFor="otherSchool" id="labelSchool">Outra escola: *</label>
            <input
                type="hidden" id="otherSchool"
                onChange={e => {const newData = {...personalData, otherSchool: e.target.value}; setPersonalData(newData);}}
            />

            <label htmlFor="wayPS">{infos.wayLabel}</label>
            <select id="wayPS" required
            onChange={handleWay}>
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

            <label hidden htmlFor="otherWay" id="labelWay">Outra forma: *</label>
            <input
                type="hidden" id="otherWay"
                onChange={e => {const newData = {...personalData, otherWay: e.target.value}; setPersonalData(newData);}}
            />

            { console.log(formData) }
        </Container>
    );
}

export default PersonalDataInputs;