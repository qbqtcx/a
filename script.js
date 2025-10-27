setTimeout(() => {
  const userLang = navigator.language || navigator.userLanguage;

  if (userLang && userLang.startsWith('en')) {
    window.location.href = '/en';
  } else {
    window.location.href = '/en';
  }
}, 500);
