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

function changeTitle() {
    document.title = titles[index];
    index = (index + 1) % titles.length;
}

setInterval(changeTitle, 100);
