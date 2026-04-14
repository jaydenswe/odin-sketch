const container = document.getElementById("grid-container");

function createGrid(n) {
  let times = 0;
  let grid = n * n;
  while (times < grid) {
  const div = document.createElement("div");
  div.classList.add("square");
  container.appendChild(div);
  times++;
  }
}
createGrid(16);

function changeSquareColour() {
const square = document.querySelectorAll(".square");
square.forEach((current) => {
  current.addEventListener("mouseover", (event) => {
    event.target.classList.add("hover");
  })
});
}
changeSquareColour();

function getUserInput(n) {
  
}