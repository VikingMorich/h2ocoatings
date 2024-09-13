import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next"
import arrowRight from "../icons/keyboard_arrow_right-black-18dp.svg"
import photo from "../icons/camera_alt-white-18dp.svg"
import Cmodal from './CarouselModal'

export default function Materik() {
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
                    <h1 className="c-materials--header--title">{t("materik").toUpperCase()}</h1>
                </div>
            </div>
            <div className="c-fullscreen-img--box">
                <img src="/imgs/materials/materik/materik_principal.jpg" className="c-fullscreen-img--no-subtitle c-fullscreen-img--no-subtitle--tradetherm" alt="materik"/>
                <div className="c-fullscreen-img--desc">
                    <h2 className="c-materials--presentation">{t("materik-col.presentation")}</h2>
                    <span className="c-materials--subpresentation">{t("materik-col.content1")}</span>
                </div>
            </div>
            <div className="c-materials">
                <div className="c-materials--product-box">
                    <div className="c-materials--product-box--wrapper">
                        <div className="c-materials--prop-col">
                            <div className="c-materials--properties">
                                <img alt="arrow-right" src={arrowRight} />
                                <h3 className="c-materials--base">{t("materik-col.header1")}</h3>
                            </div>
                            <span className="c-materials--exp">{t("materik-col.content2")}</span>
                            <div className="c-materials--properties">
                                <img alt="arrow-right" src={arrowRight} />
                                <h3 className="c-materials--base">{t("materik-col.header2")}</h3>
                            </div>
                            <span className="c-materials--exp">{t("materik-col.content3")}</span>
                            <div className="c-materials--properties">
                                <img alt="arrow-right" src={arrowRight} />
                                <h3 className="c-materials--base">{t("materik-col.header3")}</h3>
                            </div>
                            <span className="c-materials--exp">{t("materik-col.content4")}</span>
                        </div>
                        <br />
                        <br />
                        <div className="c-materials--product-list">
                            <span className="c-materials--button">
                                {t("products")}
                            </span>
                            <div className="c-materials--block">
                                <a href={``} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                                    {t("materik")}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="c-materials--product-img--box" onClick={() => {toggleModal(); setType('materik-gallery')}}>
                        <img src="/imgs/materials/materik/materik_principal.jpg" className="c-materials--product-img" alt="materik"/>
                        <div className="c-materials--showmore">
                            <span><img alt="more photos" src={photo} />{t("showmore")}</span>
                        </div>
                    </div>
                </div>
                <br />
                <div className="c-materials--hr-title">
                    <div className="c-materials--hr"></div>
                    <div className="c-materials--sis-box">
                        <span className="c-materials--sis">{t("materik-col.sistems").toUpperCase()}</span>
                    </div>
                </div>
                <div className="c-materials--table">
                    <table className="c-table">
                        <tr>
                            <td>
                                <div className="table-align-center">
                                    <img alt="arrow-right" src={arrowRight} />
                                    <span>{t("materik-col.sistem1")}</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="table-align-center">
                                    <img alt="arrow-right" src={arrowRight} />
                                    <span>{t("materik-col.sistem2")}</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="table-align-center">
                                    <img alt="arrow-right" src={arrowRight} />
                                    <span>{t("materik-col.sistem3")}</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="table-align-center">
                                    <img alt="arrow-right" src={arrowRight} />
                                    <span>{t("materik-col.sistem4")}</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <br />
            </div>
            <Cmodal open={open} toggleModal={() => closeModal()} type={type}/>
        </React.Fragment>
    );
}