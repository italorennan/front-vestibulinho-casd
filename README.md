<img alt="front-vestibulinho-casd" title="#front-vestibulinho-casd" src="https://i0.wp.com/cursosantosdumont.org.br/wp-content/uploads/2019/03/CASD-1.png?fit=600%2C211&ssl=1" width="200px" />

## [Front-end] Vestibulinho - Cadastro e gestão de alunos
Projeto front-end para cadastro de alunos no processo do vestibulinho e para gestão de informações cadastradas 
nas diversas etapas do processo.

> [Fluxo dos processos](https://whimsical.com/2VCMCjdpi6GdxFjEootNJr)

### Tecnologias
Projeto desenvolvido com [React](https://reactjs.org) e com as seguintes dependências:
 - [Styled-components](https://styled-components.com/)
 - [React-Router-DOM](https://reacttraining.com/react-router/)
 - [Axios](https://github.com/axios/axios)
 - [Material-UI](https://material-ui.com/)

### Layout das telas
Ainda em desenvolvimento.

### Estrutura de pastas 
```js
- public
- src
    |- components
    |- sections
    |- pages
    |- styles
    |- services
    |- utils
```

### Sobre o back-end
Back-end desenvolvido em [Node.js](https://nodejs.org/en/) com framework web [express](https://expressjs.com/pt-br/). É necessário ter o [Docker](docker.com) instalado em sua máquina - mais informações no [repositório](https://github.com/lulis123/back-vestibulinho-casd).

### Iniciando com o projeto
Verificar se existe [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/) e [yarn](https://yarnpkg.com/) instalados na sua máquina antes de iniciar com o projeto.
```bash
# Clone o repositório front-end
$ git clone https://github.com/bambokianr/front-vestibulinho-casd

# Entre no repositório
$ cd front-vestibulinho-casd

# Instale as dependências que estão presentes no arquivo 'package.json'
$ npm install

# Clone o repositório back-end
$ git clone https://github.com/lulis123/back-vestibulinho-casd

# Depois de seguir as instruções de 'getting started' do back-end
# Entre no repositório
$ cd back-vestibulinho-casd

# Instale as dependências que estão presentes no arquivo 'package.json'
$ npm install

# Rode o projeto front-end
$ yarn start

# Rode o projeto back-end
$ sudo yarn start
```

### Padrões de desenvolvimento do projeto
Criar uma nova branch `git checkout -b feat/nome-da-feature` sempre que for desenvolver uma nova funcionalidade.
> Nunca commitar na branch master.
Aba issues desse repositório usada como uma ToDo list para cada nova feature implementada.
