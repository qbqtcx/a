const titles = [
  "Snowy",
  "sNowy",
  "snOwy",
  "snoWy",
  "snowY",
  "snoWy",
  "snOwy",
  "sNowy"
];

let index = 0;
let titleInterval = null;
let isActive = true;

function changeTitle() {
  if (!isActive) return;
  document.title = titles[index];
  index = (index + 1) % titles.length;
}

function startTitleAnimation() {
  if (!titleInterval) {
    titleInterval = setInterval(changeTitle, 100);
  }
}

function stopTitleAnimation() {
  clearInterval(titleInterval);
  titleInterval = null;
  document.title = "Snowy";
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    isActive = false;
    stopTitleAnimation();
  } else {
    isActive = true;
    startTitleAnimation();
  }
});

startTitleAnimation();

const video = document.getElementById('bg-video');
const audio = document.getElementById('bg-audio');

window.addEventListener('click', () => {
  audio.play();
  video.play();
});

function syncMedia() {
  if (Math.abs(video.currentTime - audio.currentTime) > 0.3) {
    audio.currentTime = video.currentTime;
  }
}
setInterval(syncMedia, 500)
