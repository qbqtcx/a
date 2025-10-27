  const userLang = navigator.language || navigator.userLanguage;

  if (userLang.startsWith('en')) {
    window.location.href = '/en';
  }
