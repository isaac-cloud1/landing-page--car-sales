const html = document.documentElement; // a tag <html>, onde fica o data-theme
const botao = document.getElementById("botao-tema");

// 1. Aplica um tema: muda o atributo (o CSS faz o resto) e o texto do botão
function aplicar(tema) {
  html.dataset.theme = tema;
  botao.textContent = tema === "dark" ? "Modo claro" : "Modo escuro";
  botao.setAttribute("aria-pressed", tema === "dark");
}

// 2. Ao abrir a página: usa o tema salvo; se não houver, usa o do sistema do usuário
let salvo = null;
try {
  salvo = localStorage.getItem("tema");
} catch (erro) {}

const preferenciaDoSistema = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
aplicar(salvo || preferenciaDoSistema);

// 3. Ao clicar: troca para o tema oposto e guarda a escolha
botao.addEventListener("click", () => {
  const novo = html.dataset.theme === "dark" ? "light" : "dark";
  aplicar(novo);
  try {
    localStorage.setItem("tema", novo);
  } catch (erro) {}
});
