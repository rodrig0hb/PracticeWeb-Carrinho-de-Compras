# 🛒 Carrinho de Compras Prático (JavaScript)
<hr>

Este repositório apresenta um desafio prático de desenvolvimento web focado em **JavaScript e HTML**, simulando a funcionalidade essencial de um **carrinho de compras online**. 
O exercício foi proposto no curso de Lógica de Programação da Plataforma de Ensino Alura, mas verificações foram adicionadas por mim para melhor funcionamento do código.

<br>

## 🎯 Funcionalidades e Objetivos

O projeto permite ao usuário selecionar itens em *tags* `<option>` e calcular o custo total com base na quantidade inserida.

<br>

### 💻 Como Funciona a Lógica:

* **Seleção de Item:** O usuário escolhe um produto através de um campo `<select>` (contendo itens em `<option>`).
* **Multiplicação:** O JavaScript identifica o valor unitário do item e o multiplica pela **quantidade** inserida no campo `<input>`.
* **Totalização:** O sistema mantém o rastreamento do **total geral** (soma dos valores multiplicados) e da **soma total de itens** no carrinho.

<br>

### ✨ Melhorias e Validações Adicionadas:

Além da lógica central proposta no curso, foi implementada uma verificação crucial para aumentar a robustez do carrinho:

* **Verificação Condicional de Quantidade:** Adicionada uma validação em JavaScript para garantir que o usuário não insira um item no carrinho se o campo de quantidade estiver **vazio** ou com valor **zerado (`0`)**.

<br>

## 🛠️ Tecnologias Utilizadas

* **HTML:** Estrutura dos inputs, da lista de itens e da área de totalização.
* **CSS (`style.css`):** Estilização visual do carrinho de compras.
* **JavaScript (`js/app.js`):** Implementação da lógica de seleção, multiplicação, totalização e, principalmente, as validações condicionais.

<br>

## 📂 Estrutura do Repositório

* `index.html`: Página principal da aplicação.
* `style.css`: Estilos globais e de layout.
* `js/app.js`: Código JavaScript que contém a lógica do carrinho.
* `assets/`: Contém a imagem utilizada no projeto.
