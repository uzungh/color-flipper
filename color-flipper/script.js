const flipButton = document.getElementById("flipButton");
const colorBox = document.getElementById("colorBox");
const colors = ["#007bff", " #ff5733 ", " #b1ff33 ", " #484497 ", " #30e3db "];
flipButton.addEventListener("click",flipColor);
function flipColor(){
    const randomIndex = Math.floor(Math.random()* colors.length);
    colorBox.style.backgroundColor = colors[randomIndex];
}
