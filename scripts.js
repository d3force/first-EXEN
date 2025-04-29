// Тема
document.getElementById('theme-toggle').onclick = () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
};

// Язык
document.getElementById('lang-toggle').onclick = () => {
  const current = document.documentElement.lang;
  document.documentElement.lang = current === 'ru' ? 'en' : 'ru';
  loadLocalization(); // функция загрузки переводов
};

// Наведение на детали SVG
document.querySelectorAll('svg [data-part]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.classList.add('highlight');
    showTooltip(el.dataset.name);
  });
  el.addEventListener('mouseleave', () => {
    el.classList.remove('highlight');
    hideTooltip();
  });
  el.addEventListener('click', () => {
    showDetailCard(el.dataset.part);
  });
});

// Автоматический цикл тактов
let autoCycle = false;
let cycleInterval;
document.getElementById('auto-cycle').onclick = () => {
  autoCycle = !autoCycle;
  if (autoCycle) {
    cycleInterval = setInterval(nextStroke, 1000);
  } else {
    clearInterval(cycleInterval);
  }
};
