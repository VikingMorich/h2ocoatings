import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next"
import arrowRight from "../icons/keyboard_arrow_right-black-18dp.svg"
import photo from "../icons/camera_alt-white-18dp.svg"
import Cmodal from './CarouselModal'

export default function Tradecote() {
    const [t, i18n] = useTranslation("global")
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
    useEffect(() => {
        document.title = 'H2O Coatings - ' + t("materials")
        window.scrollTo(0, 0)
    }, [t]);

    return (
        <React.Fragment>
            <div className="c-materials--top">
                <div className="c-materials--header">
                    <h1 className="c-materials--header--title">{t("tradecote-col.title").toUpperCase()}</h1>
                </div>
            </div>
            <div className="c-fullscreen-img--box">
                <img src="/imgs/tradecote.jpg" className="c-fullscreen-img--no-subtitle" alt="tradecote"/>
                <div className="c-fullscreen-img--desc">
                    <h2 className="c-materials--presentation">{t("tradecote-col.presentation")}</h2>
                    <span className="c-materials--subpresentation">{t("tradecote-col.content1")}</span>
                </div>
            </div>
            <div className="c-materials">
                <div className="c-materials--prop-box">
                    <div className="c-materials--prop-col">
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("tradecote-col.header1")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("tradecote-col.content2")}</span>
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("tradecote-col.header2")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("tradecote-col.content3")}</span>
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("tradecote-col.header3")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("tradecote-col.content4")}</span>
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("tradecote-col.header4")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("tradecote-col.content5")}</span>
                    </div>
                    <div className="c-materials--prop-col">
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("tradecote-col.header5")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("tradecote-col.content6")}</span>
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("tradecote-col.header6")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("tradecote-col.content7")}</span>
                        <div className="c-materials--header--icons--double">
                            <img src={`/Interior-emisions-${i18n.language}.jpg`} className="c-seal" alt="emision-icon"/>
                            <img src="/scs.png" className="c-seal" alt="scs-icon"/>
                        </div>
                    </div>
                </div>
                <div className="c-materials--product-box">
                    <div className="c-materials--product-box--wrapper">
                        <div className="c-materials--product-list">
                            <span className="c-materials--button">
                                {t("products")}
                            </span>
                            <div className="c-materials--block">
                                <a href={`/pdfs/${i18n.language}/FT/FT_tradecote_2_comp_${i18n.language}.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                                    {t("tradecote-col.prod1")}
                                </a>
                            </div>
                        </div>
                        <br />
                        <div className="c-materials--product-list">
                            <span className="c-materials--button">
                                {t("tests")}
                            </span>
                            <div className="c-materials--block">
                                <a href={`/pdfs/${i18n.language}/TestAndCertificate/tradecote_2C_assaig.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                                    {t("tradecote-col.test1")}
                                </a>
                                <a href={`/pdfs/${i18n.language}/TestAndCertificate/tradecote_2C_certificat_sanitari.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                                    {t("tradecote-col.test2")}
                                </a>
                            </div>
                        </div>
                        <br />
                    </div>
                    <div className="c-materials--product-img--box" onClick={() => {toggleModal(); setType('infinity-gallery')}}>
                        <img src="/imgs/tradecote2.jpg" className="c-materials--product-img" alt="tradecote"/>
                        <div className="c-materials--showmore">
                            <span><img alt="more photos" src={photo} />{t("showmore")}</span>
                        </div>
                    </div>
                </div>
                <br />
                <div className="c-materials--hr-title">
                    <div className="c-materials--hr"></div>
                    <div className="c-materials--sis-box">
                        <span className="c-materials--sis">{t("tradecote-col.sistems").toUpperCase()}</span>
                    </div>
                </div>
                <table className="c-table">
                    <tr>
                        <th colSpan="2">{t("tables.tradecote-2comp")}</th>
                        <th>{t("tables.micrasHumedas")}</th>
                        <th>{t("tables.micrasSecas")}</th>
                        <th>{t("tables.consumo")}</th>
                    </tr>
                    <tr>
                        <td>{t("tables.fondo")}</td>
                        <td>{t("tables.tradecote2c")}</td>
                        <td>125</td>
                        <td>90</td>
                        <td>0,13 l</td>
                    </tr>
                    <tr>
                        <td>{t("tables.acabado")}</td>
                        <td>{t("tables.tradecote2c")}</td>
                        <td>125</td>
                        <td>90</td>
                        <td>0,12 l</td>
                    </tr>
                    <tr>
                        <td colSpan="2">{t("tables.total")}</td>
                        <td>250</td>
                        <td>180</td>
                        <td>0,25 l</td>
                    </tr>
                </table>
                <br />
            </div>
            <Cmodal open={open} toggleModal={() => closeModal()} type={type}/>
        </React.Fragment>
    );
}