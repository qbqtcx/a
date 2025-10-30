const link = document.querySelector('a');
const texts = ["Hello World!", "Welcome to Snowy", "Enjoy your stay!"];
let index = 0;

function updateText() {
  link.textContent = texts[index];
  index = (index + 1) % texts.length;
}

updateText();
setInterval(updateText, 1000);
