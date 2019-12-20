import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { setDefaultTranslations, setDefaultLanguage } from 'react-multi-lang'
import hn from './translations/hn.json'
import en from './translations/en.json'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


setDefaultTranslations({en, hn})
setDefaultLanguage('en')

ReactDOM.render(
    (
        <App/>
     )    
    , document.getElementById('root'))
