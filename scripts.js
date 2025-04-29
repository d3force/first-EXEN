const parts = [
  { id: "piston", name: "Поршень", description: "Движется вверх и вниз в цилиндре." },
  { id: "crankshaft", name: "Коленвал", description: "Преобразует движение поршня в вращательное." },
  { id: "spark", name: "Свеча зажигания", description: "Искрит и поджигает топливную смесь." }
];

function initSVG() {
  const svg = document.getElementById("engine-svg");

  // Поршень
  const piston = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  piston.setAttribute("id", "piston");
  piston.setAttribute("x", "270");
  piston.setAttribute("y", "150");
  piston.setAttribute("width", "60");
  piston.setAttribute("height", "60");
  piston.setAttribute("fill", "steelblue");
  svg.appendChild(piston);

  // Коленвал
  const crank = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  crank.setAttribute("id", "crankshaft");
  crank.setAttribute("cx", "300");
  crank.setAttribute("cy", "280");
  crank.setAttribute("r", "20");
  crank.setAttribute("fill", "gray");
  svg.appendChild(crank);

  // Свеча зажигания
  const spark = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  spark.setAttribute("id", "spark");
  spark.setAttribute("x", "295");
  spark.setAttribute("y", "80");
  spark.setAttribute("width", "10");
  spark.setAttribute("height", "30");
  spark.setAttribute("fill", "orange");
  svg.appendChild(spark);
}

function setupInteractivity() {
  parts.forEach(part => {
    const el = document.getElementById(part.id);
    if (!el) return;
    el.addEventListener("mouseenter", () => {
      document.getElementById("info-panel").innerHTML = `<h2>${part.name}</h2><p>${part.description}</p>`;
    });
    el.addEventListener("mouseleave", () => {
      document.getElementById("info-panel").innerHTML = `<h2>Название детали</h2><p>Наведите курсор или кликните на элемент двигателя, чтобы узнать больше.</p>`;
    });
    el.addEventListener("click", () => {
      alert(`${part.name}: ${part.description}`);
    });
  });
}

window.onload = () => {
  initSVG();
  setupInteractivity();
};
