let totalGeral;
limpar()

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let listaProdutos = document.getElementById('lista-produtos');
    let qtd = parseInt(document.getElementById('quantidade').value);
    let subtotal = qtd * valorUnitario;
    if (qtd === 0 || isNaN(qtd)) {
        alert('A quantidade não pode ser vazia ou igual a zero! Verifique.')
        return
    };
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${qtd}x</span>${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`;
    let campoTotal = document.getElementById('valor-total');
    totalGeral = totalGeral + subtotal;
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;

}

function limpar() {
    totalGeral = 0;
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('lista-produtos').innerHTML = '';

}