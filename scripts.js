const piston = document.getElementById("piston");
const crankshaft = document.getElementById("crankshaft");
const infoBox = document.getElementById("info-box");

let animationRunning = false;
let angle = 0;

function updateEngine() {
  const pistonY = 200 + Math.sin(angle) * 40;
  piston.setAttribute("y", pistonY);
  crankshaft.setAttribute("transform", `rotate(${angle * 57.3}, 300, 320)`);

  if (animationRunning) {
    angle += 0.05;
    requestAnimationFrame(updateEngine);
  }
}

document.getElementById("toggle").onclick = () => {
  animationRunning = !animationRunning;
  if (animationRunning) updateEngine();
};

piston.addEventListener("mouseenter", () => {
  infoBox.textContent = "Поршень – перемещает давление вниз на коленвал.";
});

crankshaft.addEventListener("mouseenter", () => {
  infoBox.textContent = "Коленвал – преобразует движение поршня во вращение.";
});

piston.addEventListener("mouseleave", () => {
  infoBox.textContent = "Наведите на элемент";
});
crankshaft.addEventListener("mouseleave", () => {
  infoBox.textContent = "Наведите на элемент";
});
