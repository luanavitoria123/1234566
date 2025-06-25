// Validação de formulário
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const erro = document.getElementById("erro");
  if (!email.includes("@") || !email.includes(".")) {
    erro.style.display = "block";
  } else {
    erro.style.display = "none";
    alert("E-mail enviado com sucesso!");
  }
});

// Atualização de conteúdo
function atualizarMensagem() {
  const mensagens = ["Mensagem atualizada!", "Novo conteúdo!", "Atualização completa!"];
  const aleatorio = mensagens[Math.floor(Math.random() * mensagens.length)];
  document.getElementById("message").innerText = aleatorio;
}

// Gráfico de carregamento
function carregar() {
  let barra = document.getElementById("progressBar");
  let width = 0;
  let intervalo = setInterval(function () {
    if (width >= 100) {
      clearInterval(intervalo);
    } else {
      width++;
      barra.style.width = width + "%";
      barra.innerText = width + "%";
    }
  }, 30);
}