let count = 0;
const button = document.getElementById('counter-btn');
const statusText = document.getElementById('status-text');

button.addEventListener('click', () => {
  count += 1;
  button.textContent = `Clicked ${count} time${count === 1 ? '' : 's'}`;
  statusText.textContent = `Client script active! Last clicked at ${new Date().toLocaleTimeString()}.`;
  statusText.style.color = '#38bdf8';
});
