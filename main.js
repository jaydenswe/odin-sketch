let times = 0;
while (times < 256) {
const container = document.getElementById("container");
const div = document.createElement("div");
div.classList.add("square");
container.appendChild(div);
times++;
}