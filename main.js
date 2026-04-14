const container = document.getElementById("grid-container");
const gridButton = document.querySelector("#gridButton");

function createGrid(n) {
  let times = 0;
  let grid = n * n;
  let size = 960 / n;
  while (times < grid) {
  const div = document.createElement("div");
  div.classList.add("square");
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  container.appendChild(div);
  times++;
  }
}
createGrid(16);

function getRandomRGB() {
  let num = Math.round(0xffffff * Math.random());
  let red = num >> 16;
  let green = num >> 8 & 255;
  let blue = num & 255;
  let rgb = (`rgb(${red}, ${green}, ${blue})`);
  return rgb;
}
getRandomRGB();

function changeSquareColour() {
const square = document.querySelectorAll(".square");
square.forEach((current) => {
  current.addEventListener("mouseover", (event) => {
    event.target.classList.add("hover");
  })
});
}
changeSquareColour();

function getUserInput() {
  gridButton.addEventListener("click", () => {
    let n = Number(prompt("Enter number of squares per side for new grid: "));
    if (n <= 100 && n > 0) {
      container.innerHTML = '';
      createGrid(n);
      changeSquareColour();
    }
    else {
      alert("That is not a valid size, try again.");
    }
  })
}
getUserInput();