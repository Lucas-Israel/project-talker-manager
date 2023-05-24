# :toolbox: Tecnologias usadas:

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

# :open_book: Objetivo do projeto Talker manager

<details>
  <summary>:speech_balloon: Objetivos</summary>

  ```
  1. Desenvolver uma aplicação de cadastro de palestrantes
  2. Desenvolver uma API de um CRUD (Create, Read, Update e Delete) de palestrantes.
  3. Desenvolver alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo fs.
  4. É possível cadastrar, visualizar, pesquisar, editar e excluir informações. 
  ```
</details>

<details>
  <summary>:speech_balloon: Exemplo de funcionamento</summary>
  

![Captura de tela de 2023-05-24 12-54-46](https://github.com/Lucas-Israel/project-talker-manager/assets/104790267/6856e482-770f-4ba5-8a0f-a13496a448c9)
![Captura de tela de 2023-05-24 13-04-27](https://github.com/Lucas-Israel/project-talker-manager/assets/104790267/d1f71420-30d8-4fd7-b489-69ae02dd580d)

</details>

# :heavy_exclamation_mark: Arquivos desenvolvidos nesse projeto:

<details>
  <summary>:speech_balloon: Arquivos</summary>

  ```
  src/
    generateTokens.js
    index.js
  
    db/
      talkDB.js
  
    middleware/
      credentials.js
      validation.js
  ```
</details

#### :warning: todos os outros arquivos foram desenvolvidos pela [Trybe](https://www.betrybe.com).

# :thinking: Como checar o projeto

```
git clone git@github.com:Lucas-Israel/project-talker-manager.git
docker-compose up -d
docker exec -it talker_manager bash
  (caso tenha um problema com portas, mudar a porta dentro do docker-compose.yml)
npm install
npm run test
npm start

no thunder client (ou similares):
  acessar http://localhost:3000 e usar os endpoins:
    1. GET /talker
    2. GET /talker/search
    3. GET /talker/:id
    4. POST /login
    5. POST /talker
    6. POST /talker/:id
    7. DELETE /talker/:id
```

# :calendar: Datas para desenvolvimento

```
início: 04/11/22 às 14h49
término: 05/11/22 às 0h14
prazo: 7 dias
dias específicos para o desenvolvimento do projéto: 2
```

# :trophy: Percentual de conclusão do projeto

![Captura de tela de 2023-05-24 13-05-58](https://github.com/Lucas-Israel/project-talker-manager/assets/104790267/3936de6f-d444-4deb-87cb-7907a5485bf8)

<details>
  <summary>:warning: Metodo de avaliação da Trybe</summary>
  
##### A escola de programação [Trybe](https://www.betrybe.com) utiliza um sistema de avaliação baseado na conclusão de requisitos em cada projeto, considerando a porcentagem de conclusão, com um mínimo de 80% dos requisitos obrigatórios, em um prazo regular de no máximo 7 dias, tendo dias específicos para o desenvolvimento do projeto que variam de acordo com a complexidade dele.

##### Não alcançando esse patamar mímino, o aluno entra em recuperação, tendo que entregar 90% dos requisitos obrigatórios mais os bonús, em outros 7 dias, caso o aluno falhe novamente ele é mudado de turma para refazer o conteúdo e projeto, caso falhe após mudar de turma, no mesmo conteúdo/projeto, o aluno é removido do curso.
  
</details>
