import React, { useState } from 'react';
import expand from "../icons/expand_more-white-18dp.svg"
import language from "../icons/language-white-18dp.svg"
import { useTranslation } from "react-i18next"

export default function Language() {
    const [t, i18n] = useTranslation("global")
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState('languages.cat')

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
                <button className="c-language-option" onClick={() => setLanguage('cat')}>
                    {t('languages.cat')}
                </button>
                <button className="c-language-option" onClick={() => setLanguage('es')}>
                    {t('languages.es')}
                </button>
                <button className="c-language-option" onClick={() => setLanguage('en')}>
                    {t('languages.en')}
                </button>
            </div>
            }
            </div>
        </React.Fragment>
    );
}