const container = document.getElementById("container");
const colors = ["#FF0000", "#FFA500", "#FFFF00", "#00FF00", "#0000FF", "#FF00FF"];
const SQUARES = 500;

const setColor = (square) => {
    const color = getRandomColor();
    square.style.background = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (square) => {
    square.style.background = "#1d1d1d";
    square.style.boxShadow = "0 0 2px #000";
};

const getRandomColor = ()  => colors[Math.floor(Math.random() * colors.length)];

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));
    container.appendChild(square);  
}