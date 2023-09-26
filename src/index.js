import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";


const userLanguage = navigator.language || 'en'; 

const languageToMessages = {
  'en': { locale: 'en', messages: localeEnMessages },
  'es': { locale: 'es', messages: localeEsMessages },
};

const selectedLanguage = languageToMessages[userLanguage] || languageToMessages['en'];

ReactDOM.render(
    <IntlProvider locale={selectedLanguage.locale} messages={selectedLanguage.messages}>
        <JobsList locale={selectedLanguage.locale} />
    </IntlProvider>, document.getElementById("root")
);