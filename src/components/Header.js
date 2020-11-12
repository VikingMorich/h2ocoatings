import React, {useState} from 'react'
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import Language from './Language'
import menu from '../icons/menu-white-18dp.svg'
import language from "../icons/language-white-18dp.svg"
import cross from '../icons/clear-white-18dp.svg'
import expand from "../icons/expand_more-white-18dp.svg"

export default function Header() {
    const [t, i18n] = useTranslation("global")
    const [mobileMenu, setMobileMenu] = useState(false)
    const [mobileMenuType, setMobileMenuType] = useState('')

    const setLanguage = (lang) => {
        i18n.changeLanguage(lang)
        setMobileMenuType('')
        setMobileMenu(false)
    }

    return (
        <React.Fragment>
        {mobileMenu &&
        <div className="c-header-mobileWrapper">
            <div className="c-header-mobile">
                {mobileMenuType === '' ?
                <React.Fragment>
                    <div className="c-header-mobile--baseHeader">
                        <img className="c-header-mobile--icon" alt="cross-icon" src={language} onClick={() => setMobileMenuType('language')}/>
                        <img className="c-header-mobile--icon" alt="cross-icon" src={cross} onClick={() => setMobileMenu(false)}/>
                    </div>
                    <a className="c-header-mobile--option" href="/company">{t("company")}</a>
                    <div className="c-header-mobile--option" onClick={() => setMobileMenuType('materials')}>
                        {t("materials")}
                        <img className="c-header-mobile--icon__rotate" alt="more-icon" src={expand}/>
                    </div>
                    <div className="c-header-mobile--option" onClick={() => setMobileMenuType('services')}>
                        {t("services")}
                        <img className="c-header-mobile--icon__rotate" alt="more-icon" src={expand}/>
                    </div>
                    <a className="c-header-mobile--option" href="/contact">{t("contact")}</a>
                </React.Fragment> 
                :
                <React.Fragment>
                    <div className="c-header-mobile--back" onClick={() => setMobileMenuType('')}>
                        <img className="c-header-mobile--icon__rotate2" alt="back-icon" src={expand}/>
                        {t("back")}
                    </div>
                </React.Fragment>
                }

                {mobileMenuType === 'materials' &&
                <React.Fragment>
                    <h3 className="c-header-mobile--optionTitle">{t("materials")}</h3>
                    <a className="c-header-mobile--option" href="/infinity">{t("infinity")}</a>
                    <a className="c-header-mobile--option" href="/rustop">{t("rustop")}</a>
                    <a className="c-header-mobile--option" href="/tradegraff">{t("tradegraff")}</a>
                    <a className="c-header-mobile--option" href="/tradecote">{t("tradecote")}</a>
                    <a className="c-header-mobile--option" href="/hydrograff">{t("hydrograff")}</a>
                    <a className="c-header-mobile--option" href="/tradetherm">{t("tradetherm")}</a>
                </React.Fragment>
                }
                {mobileMenuType === 'services' &&
                <React.Fragment>
                    <h3 className="c-header-mobile--optionTitle">{t("services")}</h3>
                    <a className="c-header-mobile--option" href="/courses">{t("courses")}</a>
                    <a className="c-header-mobile--option" href="/showrooms">{t("showrooms")}</a>
                </React.Fragment>
                }
                {mobileMenuType === 'language' &&
                <React.Fragment>
                    <h3 className="c-header-mobile--optionTitle centered">{t("language")}</h3>
                    <div className="c-header-mobile--option centered" onClick={() => setLanguage('ca')}>{t("languages.ca")}</div>
                    <div className="c-header-mobile--option centered" onClick={() => setLanguage('es')}>{t("languages.es")}</div>
                    <div className="c-header-mobile--option centered" onClick={() => setLanguage('en')}>{t("languages.en")}</div>
                </React.Fragment>
                }
            </div>
        </div>
        }
        <div className="c-header">
            <div className="c-header-nav">
                <Link to="/" className="c-header--logo">
                    <img src="/logo.png" alt="H2O Coatings" />
                </Link>
                <div className="c-header-nav__options">
                    <Link to={"/company"} className="c-header-nav--option" >{t("company")}</Link>
                    <div class="dropdown">
                        <button class="dropbtn">{t("materials")}</button>
                        <div class="dropdown-content">
                            <a href="/infinity">{t("infinity")}</a>
                            <a href="/rustop">{t("rustop")}</a>
                            <a href="/tradegraff">{t("tradegraff")}</a>
                            <a href="/tradecote">{t("tradecote")}</a>
                            <a href="/hydrograff">{t("hydrograff")}</a>
                            <a href="/tradetherm">{t("tradetherm")}</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">{t("services")}</button>
                        <div class="dropdown-content">
                            <a href="/courses">{t("courses")}</a>
                            <a href="/showrooms">{t("showrooms")}</a>
                        </div>
                    </div>
                    <Link to="/contact" className="c-header-nav--option">{t("contact")}</Link>
                </div> 
            </div>
            <Language />
            <img className="c-header--icon" alt="menu-icon" src={menu} onClick={() => setMobileMenu(true)}/>
        </div>
        </React.Fragment>
    )
}