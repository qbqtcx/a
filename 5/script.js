const link = document.getElementById('link');
const texts = [
  "Change language",
  "Changer de langue",
  "Cambiar idioma",
  "Sprache ändern",
  "Cambia lingua",
];
let index = 0;

function updateText() {
  link.textContent = texts[index];
  index = (index + 1) % texts.length;
}

updateText();
setInterval(updateText, 1000);
