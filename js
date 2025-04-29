function movePiston(phase) {
  const piston = document.getElementById('piston');
  if (phase === 'compression') piston.setAttribute('transform', 'translate(0, -30)');
  if (phase === 'power') piston.setAttribute('transform', 'translate(0, 30)');
}
