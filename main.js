function createGrid() {
  let times = 0;
  const container = document.getElementById("container");
  while (times < 256) {
  const div = document.createElement("div");
  div.classList.add("square");
  container.appendChild(div);
  times++;
  }
}
createGrid();

function changeSquareColour() {
const square = document.querySelectorAll(".square");
square.forEach((current) => {
  current.addEventListener("mouseover", (event) => {
    event.target.classList.add("hover");
  })
});
}
changeSquareColour();