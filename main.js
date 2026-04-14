const container = document.getElementById("grid-container");
const gridButton = document.querySelector("#gridButton");

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

const square = document.querySelectorAll(".square");

function getUserInput() {
  gridButton.addEventListener("click", () => {
    let n = prompt("Enter number of squares per side for new grid: ");
    if (n <= 100) {
      container.innerHTML = '';
      createGrid(n);
    }
    else {
      console.log("error");
    }
  })
}
getUserInput();