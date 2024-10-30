# 🎉 Bem-vindo ao Projeto de Testes Cypress QA! 🚀

Este projeto foi desenvolvido para facilitar e guiar novos QAs no universo do framework [**Cypress**](https://docs.cypress.io/guides/component-testing/overview), trazendo práticas de automação de testes E2E e API para validar a qualidade e a performance das aplicações.

---

## 📦 Configuração do Projeto

### Pré-Requisitos

-   **Node.js**: Para rodar o projeto, é necessário ter o [Node.js](https://nodejs.org/en/) (preferencialmente a versão LTS).
-   **Git**: Usamos o [Git](https://git-scm.com/) para controle de versão. Recomendamos o [GitHub Desktop](https://desktop.github.com/) para quem prefere uma interface gráfica.
-   **Editor de Código**: Recomendamos o uso do [Visual Studio Code](https://code.visualstudio.com/) (VS Code) para edição de código, com as extensões sugeridas abaixo.
-   **nvm** (Node Version Manager): Para gerenciar múltiplas versões do Node.js.
-   **Node.js** v20.x.x ou **Yarn**: Ambiente para execução do projeto.
-   **Allure Reporter**: Ferramenta opcional para visualização de relatórios de testes interativos.
-   **Docker Compose**: Para executar e manter a consistência dos testes em ambientes virtualizados.

### 1. Instalação do Cypress

Siga as instruções de instalação do Cypress com base no seu sistema operacional no link: [Cypress](https://docs.cypress.io/app/get-started/install-cypress).

---

### 2. Extensões Recomendadas para o VS Code 🔌

-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Para formatação de código.
-   [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors): Melhor visualização de erros em TypeScript.
-   [Git Extension Pack](https://marketplace.visualstudio.com/items?itemName=donjayamanne.git-extension-pack): Pacote de extensões para uso do Git.
-   [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next): Última versão para suporte a TypeScript.
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Para linting do código.

---

### 3. Instalação das Dependências 📥

Na **branch `develop`**, execute:

```bash
# Escolha o comando adequado ao seu ambiente
yarn install
# ou
npm install
# ou
pnpm install
```

---

### 4. Executando o Projeto ▶️

Crie um arquivo `cypress.env.json` com base no `cypress.envExemplo.json` e solicite ao time os valores corretos.

Para iniciar o projeto, execute:

```bash
npx cypress open
```

Se tudo estiver correto, o projeto executará o cypress em modo cli 🚀.

---

## 🗂 Estrutura do Projeto

Organizamos o projeto para proporcionar máxima clareza e organização:

-   **Testes E2E e API**: scripts organizados para facilitar a manutenção e compreensão dos testes.
-   **Fixtures e Comandos Cypress**: separados por contexto, com modularização e reutilização de código.
-   **Ambientes (.env)**: variáveis sensíveis e específicas por ambiente, garantindo segurança e flexibilidade na execução dos testes.

## ✨ Funcionalidades Extra

Este projeto adota práticas avançadas e automações para simplificar o dia a dia dos QAs:

-   **Docker Compose**: executar os testes com `docker compose up` para um ambiente configurado e pronto para uso.
-   **ESLint e Prettier**: garantem código limpo e organizado.
-   **Relatórios de Testes (Allure Report)**: relatórios detalhados e prontos para análise.
-   **Modularidade**: testes, fixtures e comandos Cypress são estruturados para fácil acesso e reutilização.

## 🐳 Executando com Docker Compose

Para executar os testes, simplesmente execute o seguinte comando no terminal:

```bash
docker compose up
```

## 📜 Licença

-   Este projeto é público, com o objetivo de compartilhar conhecimento e promover estudos.
-   O uso do projeto é de responsabilidade do usuário.
-   Todos os recursos utilizados são gratuitos e adequados para uso livre.

### 💻 QA Enginner

-   Desenvolvido por **Warnner**
