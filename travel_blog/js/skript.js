const toggleBtn = document.getElementById('toggle-language');
let currentLang = 'en';

toggleBtn.addEventListener('click', () => {
   const elements = document.querySelectorAll('[data-en][data-ua]');
   currentLang = currentLang === 'en' ? 'ua' : 'en';

   elements.forEach((el) => {
      el.textContent = el.dataset[currentLang];
   });

   toggleBtn.textContent =
      currentLang === 'en' ? '🌐 Translate UA' : '🌐 Перекласти EN';
});

function toggleMore(id) {
   const el = document.getElementById(id);
   if (el.classList.contains('open')) {
      el.style.maxHeight = null;
      el.classList.remove('open');
   } else {
      el.style.maxHeight = el.scrollHeight + 'px';
      el.classList.add('open');
   }
}
