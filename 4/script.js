(function redirectToLanguage() {
  const languages = ['en', 'fr', 'es', 'de', 'it'];
  const langListDiv = document.querySelector('.lang-list');
  const tryRedirect = () => {
    try {
      const userLang = navigator.language || navigator.userLanguage;
      if (userLang) {
        const langCode = languages.find(lang => userLang.toLowerCase().startsWith(lang));
        if (langCode) {
          window.location.href = `/${langCode}`;
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
  const interval = setInterval(tryRedirect, 1000);
  window.addEventListener('beforeunload', () => clearInterval(interval));
})();
