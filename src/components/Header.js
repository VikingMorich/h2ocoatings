import React, {useState} from 'react'
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import Language from './Language'
import menu from '../icons/menu-white-18dp.svg'

export default function Header() {
    const [t] = useTranslation("global")
    return (
        <React.Fragment>
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
            <img className="c-header--icon" alt="menu-icon" src={menu} />
        </div>
        </React.Fragment>
    )
}