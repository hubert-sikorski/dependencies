const languagesObj = {};
let languagesList = [];

const createLanguagesList = () => {
  for (let [key, value] of Object.entries(languagesObj)) {
    let lang = new Object();
    lang.code = key;
    lang.name = value.nativeName.charAt(0).toUpperCase() + value.nativeName.slice(1);
    languagesList.push(lang);
  }
  languagesList.sort((a, b) => a.name.localeCompare(b.name))
}
