import React, {useEffect, useState} from 'react'
import { useTranslation } from "react-i18next"
import Language from './Language'
import menu from '../icons/menu-white-18dp.svg'
import language from "../icons/language-white-18dp.svg"
import cross from '../icons/clear-white-18dp.svg'
import expand from "../icons/expand_more-white-18dp.svg"
import Cookies from 'universal-cookie';

export default function Header() {
    let cookies = new Cookies();
    const [t, i18n] = useTranslation("global")
    const [mobileMenu, setMobileMenu] = useState(false)
    const [mobileMenuType, setMobileMenuType] = useState('')
    const [hideHeader, setHideHeader] = useState(false)
    const [fadeInHeader, setFadeInHeader] = useState(false)


    const setLanguage = (lang) => {
        i18n.changeLanguage(lang)
        cookies.set('lang', lang, { path: '/' });
        setMobileMenuType('')
        setMobileMenu(false)
    }
    
    // call this to Disable
    function disableScroll() {
        document.body.className = "overflowHidden"
    }
    
    // call this to Enable
    function enableScroll() {
        document.body.className = ""
    }

    useEffect(() => {
        setFadeInHeader(false)
        if(document.location.pathname === '/') {
            disableScroll()
            setHideHeader(true)
            setTimeout(() => { setHideHeader(false); setFadeInHeader(true); enableScroll() }, 6000);
        }
    }, []);

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
                    <a className="c-header-mobile--option" href="/materik">{t("materik")}</a>
                    <a className="c-header-mobile--option" href="/tradegraff">{t("tradegraff")}</a>
                    <a className="c-header-mobile--option" href="/rustop">{t("rustop")}</a>
                    <a className="c-header-mobile--option" href="/hydrograff">{t("hydrograff")}</a>
                    <a className="c-header-mobile--option" href="/tradecote">{t("tradecote")}</a>
                    <a className="c-header-mobile--option" href="/hydrosec">{t("hydrosec")}</a>
                    <a className="c-header-mobile--option" href="/tradetherm">{t("tradetherm")}</a>
                </React.Fragment>
                }
                {mobileMenuType === 'services' &&
                <React.Fragment>
                    <h3 className="c-header-mobile--optionTitle">{t("services")}</h3>
                    <a className="c-header-mobile--option" href="/courses">{t("courses")}</a>
                    <a className="c-header-mobile--option" href="/workshops">{t("workshops")}</a>
                    <a className="c-header-mobile--option" href="/showrooms">{t("showrooms")}</a>
                </React.Fragment>
                }
                {mobileMenuType === 'language' &&
                <React.Fragment>
                    <h3 className="c-header-mobile--optionTitle centered">{t("language")}</h3>
                    <div className="c-header-mobile--option centered" onClick={() => setLanguage('cat')}>{t("languages.cat")}</div>
                    <div className="c-header-mobile--option centered" onClick={() => setLanguage('es')}>{t("languages.es")}</div>
                </React.Fragment>
                }
            </div>
        </div>
        }
        <div className={`c-header ${hideHeader && 'opacity-off'} ${fadeInHeader && 'fadeIn'}`}>
            <div className="c-header-nav">
                <a href="/" className="c-header--logo">
                    <img src="/logo_h2o-white-border.svg" alt="H2O Coatings" />
                </a>
                <div className="c-header-nav__options">
                    <a href={"/company"} className="c-menu-op">
                        <span  className="c-header-nav--option" >{t("company").toUpperCase()}</span>
                    </a>
                    <div className="dropdown-materials">
                        <div className="dropbtn">{t("materials").toUpperCase()}</div>
                        <div className="dropdown-content-materials">
                            <a className="c-dropmat--box" href="/infinity">
                                <img className="c-dopmat--img" src="/imgs/materials/infinity/infinity_principal.jpg" alt="infinity"/>
                                <span>{t("infinity")}</span>
                            </a>
                            <a className="c-dropmat--box" href="/materik">
                                <img className="dropmat-materik" src="/imgs/materials/materik/materik_principal.jpg" alt="materik"/>
                                <span>{t("materik")}</span>
                            </a>
                            <a href="/tradegraff" className="c-dropmat--box">
                                <img className="c-dopmat--img" src="/imgs/materials/tradegraff/tradegraff_principal.jpg" alt="tradegraff"/>
                                <span>{t("tradegraff")}</span>
                            </a>
                            <a href="/rustop" className="c-dropmat--box">
                                <img className="c-dopmat--img" src="/imgs/materials/rustop/rustop_principal.png" alt="rustop"/>
                                <span>{t("rustop")}</span>
                            </a>
                            <a href="/hydrograff" className="c-dropmat--box">
                                <img className="c-dopmat--img" src="/imgs/materials/hydrograff/hydrograff_principal.jpg" alt="hydrograff"/>
                                <span>{t("hydrograff")}</span>
                            </a>
                            <a href="/tradecote" className="c-dropmat--box">
                                <img className="c-dopmat--img" src="/imgs/materials/tradecote/tradecote_principal.jpg" alt="tradecote"/>
                                <span>{t("tradecote")}</span>
                            </a>
                            <a href="/hydrosec" className="c-dropmat--box">
                                <img className="c-dopmat--img" src="/imgs/materials/hydrosec/hydrosec_principal.jpg" alt="hydrosec"/>
                                <span>{t("hydrosec")}</span>
                            </a>
                            <a href="/tradetherm" className="c-dropmat--box">
                                <img className="c-dopmat--img" src="/imgs/materials/tradetherm/tradetherm_principal.jpg" alt="tradetherm"/>
                                <span>{t("tradetherm")}</span>
                            </a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="dropbtn">{t("services").toUpperCase()}</div>
                        <div className="dropdown-content">
                            <a href="/courses">{t("courses")}</a>
                            <a href="/workshops">{t("workshops")}</a>
                            <a href="/showrooms">{t("showrooms")}</a>
                        </div>
                    </div>
                    <a href="/contact" className="c-menu-op">
                        <span className="c-header-nav--option">{t("contact").toUpperCase()}</span>
                    </a>
                </div> 
            </div>
            <Language />
            <img className="c-header--icon" alt="menu-icon" src={menu} onClick={() => setMobileMenu(true)}/>
        </div>
        </React.Fragment>
    )
}