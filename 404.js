document.getElementById('path').textContent = window.location.pathname;

const titles = [
  "Snowy - #",
  "Snowy - P#",
  "Snowy - Pa#",
  "Snowy - Pag#",
  "Snowy - Page#",
  "Snowy - Page #",
  "Snowy - Page n#",
  "Snowy - Page no#",
  "Snowy - Page not#",
  "Snowy - Page not #",
  "Snowy - Page not f#",
  "Snowy - Page not fo#",
  "Snowy - Page not fou#",
  "Snowy - Page not foun#",
  "Snowy - Page not found#",
  "Snowy - Page not found #",
  "Snowy - Page not found",
];

let index = 0;
let titleInterval = null;

function changeTitle() {
  document.title = titles[index];
  index = (index + 1) % titles.length;
}

function startTitleAnimation() {
  stopTitleAnimation();
  titleInterval = setInterval(changeTitle, 100);
}

function stopTitleAnimation() {
  if (titleInterval) {
    clearInterval(titleInterval);
    titleInterval = null;
  }
  document.title = "Snowy";
  index = 0;
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopTitleAnimation();
  } else {
    startTitleAnimation();
  }
});

startTitleAnimation();
