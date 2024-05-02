import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import global_am from '../src/translations/am/global.json'
import global_en from '../src/translations/en/global.json'
import global_ru from '../src/translations/ru/global.json'

import i18next from "i18next";
import {I18nextProvider} from "react-i18next";
import {BrowserRouter} from "react-router-dom";

i18next.init({
    interpolation: {escapeValue: false},
    lng: 'am',
    resources: {
        am: {
            global:global_am,
        },
        en: {
            global:global_en,
        },
        ru: {
            global:global_ru,
        }
    }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
      </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
