const container = document.getElementById("grid-container");
const gridButton = document.querySelector("#gridButton");

function createGrid(n) {
  let times = 0;
  let grid = n * n;
  let size = 960 / n;
  while (times < grid) {
  const div = document.createElement("div");
  div.classList.add("square");
  div.style.opacity = 0;
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

function changeSquareColour() {
const square = document.querySelectorAll(".square");
square.forEach((current) => {
  
  current.addEventListener("mouseover", (event) => {
    let rgb = getRandomRGB();
    if (event.target.style.backgroundColor == "") {
    event.target.style.backgroundColor = rgb;
    }
    let n = Number(event.target.style.opacity);
    if (n < 1) {
      n += 0.1;
      event.target.style.opacity = n;
    }
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