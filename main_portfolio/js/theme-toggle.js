const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(theme) {
   body.classList.remove('light-mode', 'dark-mode');
   body.classList.add(theme);
   localStorage.setItem('theme', theme);
}

toggleBtn.addEventListener('click', () => {
   const current = body.classList.contains('dark-mode')
      ? 'dark-mode'
      : 'light-mode';
   setTheme(current === 'dark-mode' ? 'light-mode' : 'dark-mode');
});

// Применить сохранённую тему при загрузке
const saved = localStorage.getItem('theme') || 'light-mode';
setTheme(saved);
