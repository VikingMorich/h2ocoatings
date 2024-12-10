import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next"
import arrowRight from "../icons/keyboard_arrow_right-black-18dp.svg"
import photo from "../icons/camera_alt-white-18dp.svg"
import Cmodal from './CarouselModal'

export default function Hydrograff() {
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
        document.title = 'H2O Coatings - ' + t("hydrograff")
        window.scrollTo(0, 0)
    }, [t]);

    return (
        <React.Fragment>
            <div className="c-materials--top">
                <div className="c-materials--header">
                    <h1 className="c-materials--header--title">{t("hydrograff-col.title").toUpperCase()}</h1>
                </div>
            </div>
            <div className="c-fullscreen-img--box">
                <img src="/imgs/materials/hydrograff/hydrograff_principal.jpg" className="c-fullscreen-img--no-subtitle" alt="hydrograff"/>
                <div className="c-fullscreen-img--desc">
                    <h2 className="c-materials--presentation">{t("hydrograff-col.presentation")}</h2>
                    <span className="c-materials--subpresentation">{t("hydrograff-col.content1")}</span>
                </div>
            </div>
            <div className="c-materials">
            <div className="c-materials--prop-box">
                    <div className="c-materials--prop-col">
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("hydrograff-col.header1")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("hydrograff-col.content2")}</span>
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("hydrograff-col.header2")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("hydrograff-col.content3")}</span>
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("hydrograff-col.header3")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("hydrograff-col.content4")}</span>
                    </div>
                    <div className="c-materials--prop-col">
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("hydrograff-col.header4")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("hydrograff-col.content5")}</span>
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("hydrograff-col.header5")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("hydrograff-col.content6")}</span>
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
                                <a href={`/pdfs/${i18n.language}/FT/FT_hydrograff_HP_2_comp_${i18n.language}.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                                    {t("hydrograff-col.prod1")}
                                </a>
                            </div>
                        </div>
                        <br />
                        <div className="c-materials--product-list">
                            <span className="c-materials--button">
                                {t("tests")}
                            </span>
                            <div className="c-materials--block">
                                <a href={`/pdfs/TestAndCertificate/hydrograff_2C_assaig.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                                    {t("hydrograff-col.test1")}
                                </a>
                                <a href={`/pdfs/TestAndCertificate/hydrograff_2C_certificat_sanitari.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                                    {t("hydrograff-col.test2")}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="c-materials--product-img--box" onClick={() => {toggleModal(); setType('hydrograff-gallery')}}>
                        <img src="/imgs/materials/hydrograff/hydrograff1.jpg" className="c-materials--product-img" alt="hydrograff"/>
                        <div className="c-materials--showmore">
                            <span><img alt="more photos" src={photo} />{t("showmore")}</span>
                        </div>
                    </div> 
                </div>
                <br />

                <div className="c-materials--hr-title">
                    <div className="c-materials--hr"></div>
                    <div className="c-materials--sis-box">
                        <span className="c-materials--sis">{t("hydrograff-col.sistems").toUpperCase()}</span>
                    </div>
                </div>
                <div className="c-materials--table">
                    <table className="c-table">
                        <tbody>
                            <tr>
                                <th colSpan="2">{t("tables.hydrograff-2comp")}</th>
                                <th>{t("tables.micrasHumedas")}</th>
                                <th>{t("tables.micrasSecas")}</th>
                                <th>{t("tables.consumo")}</th>
                            </tr>
                            <tr>
                                <td>{t("tables.fondo")}</td>
                                <td>{t("tables.hydrograff2c")}</td>
                                <td>85</td>
                                <td>40</td>
                                <td>0,08 l</td>
                            </tr>
                            <tr>
                                <td>{t("tables.acabado")}</td>
                                <td>{t("tables.hydrograff2c")}</td>
                                <td>85</td>
                                <td>40</td>
                                <td>0,08 l</td>
                            </tr>
                            <tr>
                                <td colSpan="2">{t("tables.total")}</td>
                                <td>170</td>
                                <td>80</td>
                                <td>0,16 l</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <div className="c-materials--notes-box">
                    <span className="c-materials--note__title">{t("hydrograff-col.notes")}</span>
                    <span className="c-materials--note">{t("hydrograff-col.note1")}</span>
                </div>
            </div>
            <Cmodal open={open} toggleModal={() => closeModal()} type={type}/>
        </React.Fragment>
    );
}