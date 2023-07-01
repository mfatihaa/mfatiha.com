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
onload = function () {
  let id = document.getElementById("loader");
  let main = document.getElementById("main");
  let div = document.createElement("div");

  div.textContent = "Memuat Halaman";
  div.style.fontSize = "28px";
  id.appendChild(div);
  main.style.display = "none";
  
  let loader = setInterval(() => {
    div.textContent = div.textContent + ".";
  }, 1000);
  
  setTimeout(() => {
    clearInterval(loader);
    div.style.display = "none";
    main.style.display = "block";
  }, 5000);
};

// View Visitors Page
var countVisitor = localStorage.getItem("countVisitor");
if (countVisitor === null) {
  countVisitor = 0;
} else {
  countVisitor = parseInt(countVisitor);
}
countVisitor++;
localStorage.setItem("countVisitor", countVisitor);
document.getElementById("visitor").innerHTML =
  "Jumlah Pengunjung Halaman : " + countVisitor + " " + "Pengunjung";

// Change Input Card
var card = document.getElementById("bg-custom");
var input = document.getElementById("input-change");

input.addEventListener("input", () => {
  card.style.borderRadius = input.value;
  card.style.background = input.value;
});

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
