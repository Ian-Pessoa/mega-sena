function gerarNumero() {
  const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
  const numeroAleatorioFormatado = ('0' + numeroAleatorio).slice(-2);
  return numeroAleatorioFormatado;
};

function gerarJogo(quantidadeDeNumeros) {
  let numerosDoJogo = [];

  for (let i = 0; i < quantidadeDeNumeros; i++) {
    const numeroAleatorio = gerarNumero();

    const numeroEstaNaLista = numerosDoJogo.includes(numeroAleatorio);

    numeroEstaNaLista ? i-- : numerosDoJogo.push(numeroAleatorio);
  }

  numerosDoJogo = numerosDoJogo.sort();
  return numerosDoJogo;
};

function renderizarJogo(gerarJogo) {
  let numerosSorteadosHTML = '';

  gerarJogo.forEach((element) => {
    numerosSorteadosHTML += `<div class="numero-sorteado">${element}</div>`;
  });

  document.querySelector('.js-numeros-sorteados')
    .innerHTML = `${numerosSorteadosHTML}`;
};

document.querySelector('.js-botao-gerar-jogo')
  .addEventListener('click', () => {
    const SelecionarQuantidadeDeNumeros = document.querySelector('select');

    const quantidadeDeNumeros = SelecionarQuantidadeDeNumeros.value;

    renderizarJogo(gerarJogo(quantidadeDeNumeros));
});
