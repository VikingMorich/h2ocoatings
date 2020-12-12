import React, {useState} from 'react'
import { useTranslation } from "react-i18next"
import Modal from './Modal'
import { Link } from "react-router-dom";

export default function Footer() {
    const [t] = useTranslation("global")
    const [open, setOpen] = useState(false)
    const [type, setType] = useState('')

    const toggleModal = () => {
        setOpen(!open)
        document.body.style.overflow === "hidden" ? document.body.style.overflow = "auto" : document.body.style.overflow = "hidden"
    }

    const closeModal = () => {
        setOpen(false)
        document.body.style.overflow = "auto"
    }

    return (
        <React.Fragment>
            <div className="c-footer">
                <div className="c-footer-top">
                    
                    <nav className="c-footer-top--nav">
                        <p className="c-footer-top--nav__col c-footer-top--nav__colSpecial">
                            <a href="/" className="c-footer-top--company"><b>{t("footer.h2o")}</b></a>
                            <span>{t("footer.contact")}</span>
                            <a className="c-footer-top--email" href={`mailto:${t('email')}`}>{t("email")}</a>
                        </p>
                        <div className="c-footer-top--nav__col">
                            <span className="c-footer-top--option__top">{t("company")}</span>
                            <Link to="/company" className="c-footer-top--option">{t("footer.whoare")}</Link>
                            <Link to="/contact" className="c-footer-top--option">{t("contact")}</Link>
                        </div>
                        <div className="c-footer-top--nav__col">
                            <span className="c-footer-top--option__top">{t("materials")}</span>
                            <Link to="/infinity" className="c-footer-top--option">{t("infinity")}</Link>
                            <Link to="/tradegraff" className="c-footer-top--option">{t("tradegraff")}</Link>
                            <Link to="/rustop" className="c-footer-top--option">{t("rustop")}</Link>
                            <Link to="/hydrograff" className="c-footer-top--option">{t("hydrograff")}</Link>
                            <Link to="/tradecote" className="c-footer-top--option">{t("tradecote")}</Link>
                            <Link to="/tradetherm" className="c-footer-top--option">{t("tradetherm")}</Link>
                        </div>
                        <div className="c-footer-top--nav__col">
                            <span className="c-footer-top--option__top">{t("services")}</span>
                            <Link to="/courses" className="c-footer-top--option">{t("courses")}</Link>
                            <Link to="/showrooms" className="c-footer-top--option">{t("showrooms")}</Link>
                        </div>
                        <div className="c-footer-top--nav__col">
                            <span className="c-footer-top--option__top">{t("footer.legal")}</span>
                            <a className="c-footer-top--option" onClick={() => {
                                toggleModal()
                                setType('privacy')
                                }
                            }>
                                <span>{t("footer.privacy")}</span>
                            </a>
                            <a className="c-footer-top--option" onClick={() => {
                                toggleModal()
                                setType('cookies')
                                }
                            }>
                                <span>{t("footer.cookies")}</span>
                            </a>
                            <a className="c-footer-top--social" href="https://www.instagram.com/h2ocoatings/" target="_blank" rel="noreferrer">
                                <img className="c-footer-top--social-img" src="/follow-insta-white.png" alt="instagram"/>
                                <span>{t("insta")}</span>
                            </a>
                        </div>
                    </nav>
                </div>   
                <div className="c-footer-bottom">
                    <span>{t("footer.copyright")}</span>
                </div>
            </div>
            <Modal open={open} toggleModal={() => closeModal()} type={type}/>
        </React.Fragment>
    )
}