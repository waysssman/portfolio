const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement; // работаем с <html>

function setTheme(theme) {
   root.classList.remove('light-mode', 'dark-mode');
   root.classList.add(theme);
}

//! ✅ Устанавливаем светлую тему при загрузке
setTheme('light-mode');

toggleBtn.addEventListener('click', () => {
   const current = root.classList.contains('dark-mode')
      ? 'dark-mode'
      : 'light-mode';
   const newTheme = current === 'dark-mode' ? 'light-mode' : 'dark-mode';
   setTheme(newTheme);
});

//! ✅ Прелоадер
window.addEventListener('load', () => {
   const preloader = document.getElementById('preloader');
   preloader.style.opacity = '0';
   setTimeout(() => {
      preloader.style.display = 'none';
   }, 500);
});

// !✅ Генератор слоганов
const floatingSlogan = document.getElementById('floatingSlogan');
const sloganPopup = document.getElementById('sloganPopup');
const closeSlogan = document.getElementById('closeSlogan');

floatingSlogan.addEventListener('click', () => {
   sloganPopup.classList.add('show');
   document.body.style.overflow = 'hidden';
});

closeSlogan.addEventListener('click', () => {
   sloganPopup.classList.remove('show');
   document.body.style.overflow = '';
});
