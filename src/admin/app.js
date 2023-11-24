const config = {
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Visit Semarang",
      "app.components.LeftMenu.navbrand.workplace": "CMS",
      "Auth.form.welcome.title": "Welcome to Visit Semarang!",
      "Auth.form.welcome.subtitle": "Log in to your CMS account"
    },
  },
  tutorials: false,
  notifications: { releases: false },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
