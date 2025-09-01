const botoes = document.querySelectorAll(".botao");
const submitBtn = document.querySelector(".botao-submit");
const boxAvaliacao = document.querySelector(".box-avaliacao");
const boxThankyou = document.querySelector(".box-thankyou");
const result = document.getElementById("result");

let notaSelecionada = null;

// Clicar em uma nota
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    botoes.forEach((b) => (b.style.backgroundColor = "#272e38")); // reset
    botoes.forEach((b) => (b.style.color = "white")); // reset
    botao.style.backgroundColor = "white"; // selecionado
    botao.style.color = "#141519";
    notaSelecionada = botao.textContent;
  });
});

// Clicar em SUBMIT
submitBtn.addEventListener("click", () => {
  if (notaSelecionada) {
    boxAvaliacao.style.display = "none";
    boxThankyou.style.display = "block";
    result.textContent = `Você selecionou ${notaSelecionada} de 5`;
  } else {
    alert("Por favor, selecione uma nota antes de enviar!");
  }
});
