import React, { useState } from 'react';
import expand from "../icons/expand_more-white-18dp.svg"
import language from "../icons/language-white-18dp.svg"
import { useTranslation } from "react-i18next"

export default function Language() {
    const [t, i18n] = useTranslation("global")
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState('languages.ca')

    const setLanguage = (lang) => {
        i18n.changeLanguage(lang)
        setLang('languages.' + lang)
    }

    return (
        <React.Fragment>
            <div className="language">
            <div className="c-language" onClick={() => setOpen(!open)}>
                <img className={`c-language--flag ${open && 'c-language--icon__opened'}`} src={language} alt="lang" height="20"/>
                <span className="c-language--lang">{t(lang)}</span>
                <img className={`c-language--icon ${open && 'c-language--icon__opened'}`} alt="expand-icon" src={expand}/>
            </div>
            {open && 
            <div className="c-language-options">
                <button className="c-language-option" onClick={() => setLanguage('ca')}>
                        <img className='c-language--flag' src='/ca_flag.png' alt="cat-flag" height="15"/>
                        <span>{t('languages.ca')}</span>
                </button>
                <button className="c-language-option" onClick={() => setLanguage('es')}>
                    <img className='c-language--flag' src='/es_flag.png' alt="es-flag" height="15"/>
                    {t('languages.es')}
                </button>
                <button className="c-language-option" onClick={() => setLanguage('en')}>
                    <img className='c-language--flag' src='/en_flag.png' alt="en-flag" height="15"/>
                    {t('languages.en')}
                </button>
            </div>
            }
            </div>
        </React.Fragment>
    );
}