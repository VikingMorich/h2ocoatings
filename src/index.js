import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './avenir-lt-std-cufonfonts-webfont/style.css'
import './index.css'
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
import HttpsRedirect from 'react-https-redirect';

import global_es from "./translations/es/global.json"
//import global_en from "./translations/en/global.json"
import global_cat from "./translations/cat/global.json"
import Cookies from 'universal-cookie';

let cookies = new Cookies();

i18next.init({
  interpolation: { escapeValue: false },
  lng: cookies.get('lang') ? cookies.get('lang') : "es",
  resources: {
    es: {
      global: global_es
    },
    cat: {
      global: global_cat
    }
  }
})

render(
      <div>
        <HttpsRedirect>
          <I18nextProvider i18n={i18next}>
            <App />
          </I18nextProvider>
        </HttpsRedirect>
      </div>,
  document.querySelector('#root')
)
