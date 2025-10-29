(function redirectToEnglish() {
  const tryRedirect = () => {
    try {
      const userLang = navigator.language || navigator.userLanguage;
      if (userLang && userLang.toLowerCase().includes('en')) {
        window.location.href = '/en';
      } else {
        window.location.href = '/en';
      }
    } catch (err) {
      window.location.href = '/en';
    }
  };
  setTimeout(tryRedirect, 500);
  const interval = setInterval(() => {
    tryRedirect();
  }, 1000);
  window.addEventListener('beforeunload', () => clearInterval(interval));
})();
