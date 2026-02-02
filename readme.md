<h1 align="center">💳 Validador de Cartão de Crédito</h1>

<p align="center">
  Um validador de cartões de crédito interativo e moderno, desenvolvido como parte do desafio da DIO, com um superpoder: a assistência do GitHub Copilot.
</p>

<p align="center">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img alt="GitHub Copilot" src="https://img.shields.io/badge/GitHub%20Copilot-Powered-blue?style=for-the-badge&logo=github">
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge">
</p>

<br>

## 🖼️ Screenshot da Aplicação

<p align="center">
  <img src="./images/screenshot.png" alt="Screenshot da aplicação mostrando a validação de um cartão Visa em modo escuro." width="600">
</p>

---

## ✨ Funcionalidades

- **Validação em Tempo Real**: O número do cartão é validado enquanto você digita.
- **Detecção Automática da Bandeira**: Identifica bandeiras como Visa, Mastercard, Amex, Elo e outras.
- **Feedback Visual Imediato**: A interface exibe a logo da bandeira e muda a cor da borda do campo para indicar se o cartão é válido ou inválido.
- **Máscara de Input**: Formata o número do cartão com espaços automaticamente para melhor legibilidade.
- **Modo Escuro (Dark Mode)**: Inclui um botão para alternar entre temas claro e escuro, com a preferência salva localmente.
- **Design Responsivo e Moderno**: Interface limpa e agradável, construída sem frameworks, apenas com HTML, CSS e JavaScript puro.

---

## 🤖 IA Insights: Como o GitHub Copilot Ajudou

O GitHub Copilot foi um assistente fundamental para acelerar o desenvolvimento deste projeto. Sua principal contribuição foi na criação das **Expressões Regulares (Regex)** para a identificação das bandeiras dos cartões. A sugestão para a bandeira `ELO`, que possui múltiplos prefixos e regras de comprimento, foi particularmente útil e poupou um tempo considerável de pesquisa e testes.

Além disso, o Copilot autocompletou a implementação do **Algoritmo de Luhn**, um padrão conhecido para validação de cartões. Isso permitiu que o foco fosse direcionado para a construção de uma interface mais rica e uma melhor experiência do usuário (UX), como a implementação do modo escuro e das animações de feedback.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3** (com Variáveis CSS para theming)
- **JavaScript** (ES6+)

---

## 🚀 Como Executar o Projeto

Como este é um projeto front-end puro, não há necessidade de instalar dependências ou rodar um servidor.

1.  Clone o repositório:
    ```sh
    git clone https://github.com/Maria-Toso/Dio-desafio.git
    ```
2.  Navegue até a pasta do projeto:
    ```sh
    cd Dio-desafio
    ```
3.  Abra o arquivo `index.html` diretamente no seu navegador de preferência.

Pronto! A aplicação estará funcionando.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
