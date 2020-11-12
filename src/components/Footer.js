import React, {useState} from 'react'
import { useTranslation } from "react-i18next"
import Modal from './Modal'
import { Link } from "react-router-dom";
import instagram from "../icons/instagram.svg"

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
                        <p className="c-footer-top--nav__col">
                            {t("footer.contact")}
                        </p>
                        <div className="c-footer-top--nav__col">
                        <span className="c-footer-top--option__top">{t("materials")}</span>
                        <Link to="/infinity" className="c-footer-top--option">{t("infinity")}</Link>
                        <Link to="/rustop" className="c-footer-top--option">{t("rustop")}</Link>
                        <Link to="/tradegraff" className="c-footer-top--option">{t("tradegraff")}</Link>
                        <Link to="/tradecote" className="c-footer-top--option">{t("tradecote")}</Link>
                        <Link to="/hydrograff" className="c-footer-top--option">{t("hydrograff")}</Link>
                        <Link to="/tradetherm" className="c-footer-top--option">{t("tradetherm")}</Link>
                        </div>
                        <div className="c-footer-top--nav__col">
                        <Link to={"/company"} className="c-footer-top--option__top" >{t("company")}</Link>
                        <span className="c-footer-top--option__top">{t("services")}</span>
                        <Link to="/courses" className="c-footer-top--option">{t("courses")}</Link>
                        <Link to="/showrooms" className="c-footer-top--option">{t("showrooms")}</Link>
                        </div>
                        <div className="c-footer-top--nav__col">
                        <Link to="/contact" className="c-footer-top--option__top">{t("contact")}</Link>
                        <a className="c-footer-top--icon-container" href="https://www.instagram.com/h2ocoatings/" target="_blank" rel="noreferrer">
                            <img className="instagram-icon" alt="instagram-icon" src={instagram}/>
                        </a>
                        
                        </div>
                    </nav>
                </div>   
                <div className="c-footer-bottom">
                    <span>{t("footer.copyright")}</span>
                    <a onClick={() => {
                        toggleModal()
                        setType('privacy')
                        }
                    }>
                        <span>{t("footer.privacy")}</span>
                    </a>
                    <a onClick={() => {
                        toggleModal()
                        setType('cookies')
                        }
                    }>
                        <span>{t("footer.cookies")}</span>
                    </a>
                </div>
            </div>
            <Modal open={open} toggleModal={() => closeModal()} type={type}/>
        </React.Fragment>
    )
}