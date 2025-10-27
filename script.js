    const userLang = navigator.language || navigator.userLanguage;

    if (userLang && userLang.startsWith('en')) {
      document.title = 'Redirecting...';
      window.location.href = '/en';
    } else {
      document.title = 'Redirecting...';
      window.location.href = '/en';
    }
