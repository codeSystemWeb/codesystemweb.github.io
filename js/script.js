const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
});

// fechar ao clicar no overlay
overlay.addEventListener('click', () => {
  menu.classList.remove('active');
  overlay.classList.remove('active');
});

// fechar ao clicar no link
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
  });
});


document.getElementById('form-whatsapp').addEventListener('submit', function(e) {
  e.preventDefault();

  // PEGAR DADOS
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value;

  // SEU NÚMERO (com DDI +55)
  const numero = '5551994879614';

  // TEXTO FORMATADO
  const texto = `Olá, me chamo ${nome} ` +
                ` meu WhatsApp é: ${telefone} ` +
                ` Mensagem: ${mensagem}`;

  // CODIFICAR URL
  const textoFormatado = encodeURIComponent(texto);

  // REDIRECIONAR
  const url = `https://wa.me/${numero}?text=${textoFormatado}`;

  window.open(url, '_blank');
})