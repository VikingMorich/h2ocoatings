import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next"
import arrowRight from "../icons/keyboard_arrow_right-black-18dp.svg"
import photo from "../icons/camera_alt-white-18dp.svg"
import Cmodal from './CarouselModal'

export default function Tradegraff() {
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
                    <h1 className="c-materials--header--title">{t("tradegraff-col.title").toUpperCase()}</h1>
                </div>
            </div>
            <div className="c-fullscreen-img--box">
                <img src="/imgs/materials/tradegraff/tradegraff_principal.jpg" className="c-fullscreen-img--no-subtitle" alt="tradegraff"/>
                <div className="c-fullscreen-img--desc">
                    <h2 className="c-materials--presentation">{t("tradegraff-col.presentation")}</h2>
                    <span className="c-materials--subpresentation">{t("tradegraff-col.content1")}</span>
                </div>
            </div>
            <div className="c-materials">
                <div className="c-materials--prop-box">
                    <div className="c-materials--prop-col">
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("tradegraff-col.header1")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("tradegraff-col.content2")}</span>
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("tradegraff-col.header2")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("tradegraff-col.content3")}</span>
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("tradegraff-col.header3")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("tradegraff-col.content4")}</span>
                    </div>
                    <div className="c-materials--prop-col">
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("tradegraff-col.header4")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("tradegraff-col.content5")}</span>
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
                                <a href={`/pdfs/${i18n.language}/FT/FT_tradegraff_${i18n.language}.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                                    {t("tradegraff-col.prod1")}
                                </a>
                                <a href={`/pdfs/${i18n.language}/FT/FT_tradegraff_2_comp_${i18n.language}.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                                    {t("tradegraff-col.prod2")}
                                </a>
                            </div>
                        </div>
                        <br />
                        <div className="c-materials--product-list">
                            <span className="c-materials--button">
                                {t("tests")}
                            </span>
                            <div className="c-materials--block">
                                <a href={`/pdfs/${i18n.language}/TestAndCertificate/tradegraff_2C_assaig.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                                    {t("tradegraff-col.test1")}
                                </a>
                                <a href={`/pdfs/${i18n.language}/TestAndCertificate/tradegraff_2C_certificat_sanitari.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                                    {t("tradegraff-col.test2")}
                                </a>
                            </div>
                        </div>
                        <br />
                        <img src="/imgs/materials/tradegraff/tradegraff3.JPG" className="c-materials--extra-img c-materials--extra-img--tradegraff"/>
                    </div>
                    <div className="c-materials--product-img--box" onClick={() => {toggleModal(); setType('tradegraff-gallery')}}>
                        <img src="/imgs/materials/tradegraff/tradegraff2.jpg" className="c-materials--product-img" alt="tradegraff"/>
                        <div className="c-materials--showmore">
                            <span><img alt="more photos" src={photo} />{t("showmore")}</span>
                        </div>
                    </div>
                </div>
                <br />

                <div className="c-materials--hr-title">
                    <div className="c-materials--hr"></div>
                    <div className="c-materials--sis-box">
                        <span className="c-materials--sis">{t("tables.tecnical-data").toUpperCase()}</span>
                    </div>
                </div>
                <div className="c-materials--table">
                    <table className="c-table">
                        <tr>
                            <th>{t("tables.tecnical-data")}</th>
                            <th></th>
                            <th>{t("tables.monocomponente")}</th>
                            <th>{t("tables.2componentes")}</th>
                        </tr>
                        <tr>
                            <td>{t("tables.dureza")}</td>
                            <td>ISO 1522</td>
                            <td>110</td>
                            <td>130</td>
                        </tr>
                        <tr>
                            <td>{t("tables.rayado")}</td>
                            <td>ISO 1584</td>
                            <td>H</td>
                            <td>2H</td>
                        </tr>
                        <tr>
                            <td>{t("tables.abrasion")}</td>
                            <td>ASTM D4060</td>
                            <td>{t("tables.minor")} 50 mg</td>
                            <td>{t("tables.minor")} 38 mg</td>
                        </tr>
                        <tr>
                            <td>{t("tables.estanqueidad")}</td>
                            <td></td>
                            <td>24 h</td>
                            <td>12 h</td>
                        </tr>
                        <tr>
                            <td>{t("tables.migracion")}</td>
                            <td>EN 1186</td>
                            <td>{t("tables.novalid")}</td>
                            <td>{t("tables.valid")}</td>
                        </tr>
                        <tr>
                            <td>{t("tables.brillo")}</td>
                            <td>{t("tables.mate")}</td>
                            <td>10</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{t("tables.satinado")}</td>
                            <td>25</td>
                            <td>---</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{t("tables.brillante")}</td>
                            <td>80</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>{t("tables.antigraffiti")}</td>
                            <td></td>
                            <td>{t("tables.novalid")}</td>
                            <td>{t("tables.valid")} ({t("tables.brillante")})</td>
                        </tr>
                        <tr>
                            <td>{t("tables.tiempo")}</td>
                            <td>{t("tables.pot-life")}</td>
                            <td>---</td>
                            <td>max 4 h</td>
                        </tr>
                        <tr>
                            <td>{t("tables.secado")}</td>
                            <td>{t("tables.tacto")}</td>
                            <td>2 h</td>
                            <td>12 h</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{t("tables.repintado")}</td>
                            <td>{t("tables.between")} 4 {t("tables.and")} 48 h</td>
                            <td>{t("tables.between")} 12 {t("tables.and")} 72 h</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{t("tables.completo")}</td>
                            <td>72 h</td>
                            <td>7 {t("tables.days")}</td>
                        </tr>
                        <tr>
                            <td>{t("tables.cov")}</td>
                            <td></td>
                            <td>{t("tables.minor")} 50 {t("tables.units-gr-l")}</td>
                            <td>{t("tables.minor")} 20 {t("tables.units-gr-l")}</td>
                        </tr>
                    </table>
                </div>

                <br />
                <div className="c-materials--hr-title">
                    <div className="c-materials--hr"></div>
                    <div className="c-materials--sis-box">
                        <span className="c-materials--sis">{t("tradegraff-col.sistems").toUpperCase()}</span>
                    </div>
                </div>
                <div className="c-materials--table">
                    <table className="c-table">
                        <tr>
                            <th colSpan="2">{t("tables.tradegraff-mono")}</th>
                            <th>{t("tables.micrasHumedas")}</th>
                            <th>{t("tables.micrasSecas")}</th>
                            <th>{t("tables.consumo")}</th>
                        </tr>
                        <tr>
                            <td>{t("tables.fondo")}</td>
                            <td>{t("tradegraff")}</td>
                            <td>100</td>
                            <td>25</td>
                            <td>0,10 l</td>
                        </tr>
                        <tr>
                            <td>{t("tables.acabado")}</td>
                            <td>{t("tradegraff")}</td>
                            <td>100</td>
                            <td>25</td>
                            <td>0,10 l</td>
                        </tr>
                        <tr>
                            <td colSpan="2">{t("tables.total")}</td>
                            <td>200</td>
                            <td>50</td>
                            <td>0,20 l</td>
                        </tr>
                    </table>

                    <table className="c-table">
                        <tr>
                            <th colSpan="2">{t("tables.tradegraff-2comp")}</th>
                            <th>{t("tables.micrasHumedas")}</th>
                            <th>{t("tables.micrasSecas")}</th>
                            <th>{t("tables.consumo")}</th>
                        </tr>
                        <tr>
                            <td>{t("tables.fondo")}</td>
                            <td>{t("tables.tradegraff2c")}</td>
                            <td>125</td>
                            <td>50</td>
                            <td>0,13 l</td>
                        </tr>
                        <tr>
                            <td>{t("tables.acabado")}</td>
                            <td>{t("tables.tradegraff2c")}</td>
                            <td>125</td>
                            <td>50</td>
                            <td>0,12 l</td>
                        </tr>
                        <tr>
                            <td colSpan="2">{t("tables.total")}</td>
                            <td>250</td>
                            <td>100</td>
                            <td>0,25 l</td>
                        </tr>
                    </table>
                </div>
                <br />
            </div>
            <Cmodal open={open} toggleModal={() => closeModal()} type={type}/>
        </React.Fragment>
    );
}