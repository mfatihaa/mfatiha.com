// Disabled Right Click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disabled Inspect
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 123) {
    event.preventDefault();
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    event.preventDefault();
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
    event.preventDefault();
  } else if (event.ctrlKey && event.keyCode == 85) {
    event.preventDefault();
  }
});

// Loader
var loader = document.getElementById("loader");

window.addEventListener("preloader", function () {
  loader.style.display = "block";
});

setTimeout(function () {
  clearInterval(loader);
  loader.style.display = "none";
}, 5000);

// Multipe Title
var titleText = [
  "Welcome To MyLink",
  "Muhammad Fatih Aulia",
  "I'am Fresh Graduate",
];

let counter = 0;

setInterval(function () {
  document.title = titleText[counter % titleText.length];
  counter++;
}, 2000);
