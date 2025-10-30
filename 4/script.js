(function redirectToLanguage() {
  const langPages = {
    en: '/5',
    fr: '/6',
    es: '/7',
    de: '/8',
    it: '/9'
  };

  const langListDiv = document.querySelector('.lang-list');

  const tryRedirect = () => {
    try {
      const userLang = navigator.language || navigator.userLanguage;
      if (userLang) {
        const langCode = Object.keys(langPages).find(lang =>
          userLang.toLowerCase().startsWith(lang)
        );
        if (langCode) {
          window.location.href = langPages[langCode];
          return;
        }
      }
      document.body.querySelector('p').style.display = 'none';
      langListDiv.style.display = 'block';
    } catch (err) {
      document.body.querySelector('p').style.display = 'none';
      langListDiv.style.display = 'block';
      console.error(err);
    }
  };
  setTimeout(tryRedirect, 1);
  const interval = setInterval(tryRedirect, 1);
  window.addEventListener('beforeunload', () => clearInterval(interval));
})();
