import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './avenir-lt-std-cufonfonts-webfont/style.css'
import './index.css'
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"

import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
import global_cat from "./translations/cat/global.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: "cat",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
    cat: {
      global: global_cat
    }
  }
})

render(
      <div>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </div>,
  document.querySelector('#root')
)
