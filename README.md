# API Exames - Laboratórios

# Indice

- [Sobre](#-sobre)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)

## 🔖&nbsp; Sobre

A API **Api Exames Laboratórios** tem como objetivo o controle de exames/laboratórios, e manter seu dados. Bem como realizar a vinculação de exames/laboratórios ativos e válidos.

---

## 🛠 Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/)
- [PM2](https://pm2.keymetrics.io/)
- [Docker](https://www.docker.com/)
- [Swagger](https://swagger.io/)

---

## 🗂 Como baixar o projeto

```bash

    # Clonar o repositório
    $ git clone https://github.com/michaeldouglassoares/api-laboratory

    # Entrar no diretório
    $ cd api-laboratory

    # Instalar as dependências
    $ npm install

    # Rodar as migrations
    $ npm run migrate

    # Arquivo .env
    $ necessário criação de arquivo .env que contenha a mesma estrutura de .env.example com as devidas configurações

    # Iniciar o projeto
    $ npm run dev

    # Server iniciará na porta:3003
    $ acessar: http://localhost:3003
    
```

### Arquitetura

- [x] NodeJS
- [x] Sequelize como ORM
- [x] PM2 para gerenciador de processos
- [x] Hospedagem AWS EC2
- [x] Banco de dados Mysql
- [x] Dockerfile para container da aplicação
- [x] Imagem docker para mysql

### Features

### Exames

- [x] Cadastro de exames
- [x] Listagem exames ativos
- [x] Listagem exames inativos
- [x] Atualização exame ativo
- [x] Remove exame (caso não tenha nenhuma associação com nenhum laboratório)
- [x] Reativa exame inativo

### Laboratórios

- [x] Cadastro de laboratórios
- [x] Listagem laboratórios ativos
- [x] Listagem laboratórios inativos
- [x] Atualização laboratórios ativo
- [x] Remove laboratórios (caso não tenha nenhuma associação com nenhum exame)
- [x] Reativa laboratórios inativo

### Associação/Desassociação

- [x] Associa um exame ativo à um ou mais laboratórios
- [x] Desassocia um exame ativo de um laboratório ativo

### Busca por exame

- [x] Realiza a busca de um exame pelo nome, e retorna todos os laboratórios vinculados à ele.




