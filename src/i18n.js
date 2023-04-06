import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import hi from "./translations/hi.json";
import te from "./translations/te.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
     resources: {
          en: { translation: en },
          hi: { translation: hi },
          te: { translation: te },
        },
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

  export default i18n;