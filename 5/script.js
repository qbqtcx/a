const text = "hello world";
const display = document.getElementById("text");
let index = 0;

function addLetter() {
  if (index < text.length) {
    display.textContent += text[index];
    index++;
    setTimeout(addLetter, 250);
  }
}

addLetter();
