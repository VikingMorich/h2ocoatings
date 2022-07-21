import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next"
import arrowRight from "../icons/keyboard_arrow_right-black-18dp.svg"
import photo from "../icons/camera_alt-white-18dp.svg"
import Cmodal from './CarouselModal'

export default function Rustop() {
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
                    <h1 className="c-materials--header--title">{t("rustop").toUpperCase()}</h1>
                </div>
            </div>
            <div className="c-fullscreen-img--box">
                <img src="/imgs/materials/rustop/rustop_principal.png" className="c-fullscreen-img--no-subtitle" alt="rustop"/>
                <div className="c-fullscreen-img--desc">
                    <h2 className="c-materials--presentation">{t("rustop-col.presentation")}</h2>
                    <span className="c-materials--subpresentation">{t("rustop-col.content1")}</span>
                </div>
            </div>
            <div className="c-materials">
            <div className="c-materials--prop-box">
                    <div className="c-materials--prop-col">
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("rustop-col.header1")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("rustop-col.content2")}</span>
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("rustop-col.header2")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("rustop-col.content3")}</span>
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("rustop-col.header3")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("rustop-col.content4")}</span>
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("rustop-col.header4")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("rustop-col.content5")}</span>
                    </div>
                    <div className="c-materials--prop-col">
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("rustop-col.header5")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("rustop-col.content6")}</span>
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("rustop-col.header6")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("rustop-col.content7")}</span>
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
                                <a href={`/pdfs/${i18n.language}/FT/FT_rustop_${i18n.language}.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                                    {t("rustop")}
                                </a>
                            </div>
                        </div>
                        <br/>
                        <img src="/imgs/materials/rustop/rustop1.JPG" className="c-materials--extra-img c-materials--extra-img--rustop" alt="rustop"/>
                    </div>
                    <div className="c-materials--product-img--box" onClick={() => {toggleModal(); setType('rustop-gallery')}}>
                        <img src="/imgs/materials/rustop/rustop2.jpg" className="c-materials--product-img" alt="rustop"/>
                        <div className="c-materials--showmore">
                            <span><img alt="more photos" src={photo} />{t("showmore")}</span>
                        </div>
                    </div>
                </div>
                <br />

                <div className="c-materials--hr-title">
                    <div className="c-materials--hr"></div>
                    <div className="c-materials--sis-box">
                        <span className="c-materials--sis">{t("rustop-col.sistems").toUpperCase()}</span>
                    </div>
                </div>
                <div className="c-materials--table">
                    <table className="c-table">
                        <tr>
                            <th colSpan="2">{t("tables.rustop-c3")}</th>
                            <th>{t("tables.micrasHumedas")}</th>
                            <th>{t("tables.micrasSecas")}</th>
                            <th>{t("tables.consumo")}</th>
                            <th>{t("tables.life")}</th>
                        </tr>
                        <tr>
                            <td>{t("tables.primer")}</td>
                            <td>{t("rustop")}</td>
                            <td>125</td>
                            <td>55</td>
                            <td>0,13 l.</td>
                            <td>{t("tables.major")} 15 {t("tables.years")} </td>
                        </tr>
                        <tr>
                            <td>{t("tables.acabado")}</td>
                            <td>{t("rustop")}</td>
                            <td>125</td>
                            <td>55</td>
                            <td>0,13 l.</td>
                            <td>{t("tables.major")} 15 {t("tables.years")} </td>
                        </tr>
                        <tr>
                            <td colSpan="2">{t("tables.total")}</td>
                            <td>250</td>
                            <td>110</td>
                            <td>0,26 l.</td>
                            <td>{t("tables.major")} 15 {t("tables.years")} </td>
                        </tr>
                    </table>

                    <table className="c-table">
                        <tr>
                            <th colSpan="2">{t("tables.rustop-c4")}</th>
                            <th>{t("tables.micrasHumedas")}</th>
                            <th>{t("tables.micrasSecas")}</th>
                            <th>{t("tables.consumo")}</th>
                            <th>{t("tables.life")}</th>
                        </tr>
                        <tr>
                            <td>{t("tables.primer")}</td>
                            <td>{t("rustop")}</td>
                            <td>115</td>
                            <td>50</td>
                            <td>0,12 l.</td>
                            <td>{t("tables.major")} 15 {t("tables.years")} </td>
                        </tr>
                        <tr>
                            <td>{t("tables.intermedia")}</td>
                            <td>{t("rustop")}</td>
                            <td>115</td>
                            <td>50</td>
                            <td>0,12 l.</td>
                            <td>{t("tables.major")} 15 {t("tables.years")} </td>
                        </tr>
                        <tr>
                            <td>{t("tables.acabado")}</td>
                            <td>{t("rustop")}</td>
                            <td>115</td>
                            <td>50</td>
                            <td>0,12 l.</td>
                            <td>{t("tables.major")} 15 {t("tables.years")} </td>
                        </tr>
                        <tr>
                            <td colSpan="2">{t("tables.total")}</td>
                            <td>345</td>
                            <td>150</td>
                            <td>0,36 l.</td>
                            <td>{t("tables.major")} 15 {t("tables.years")} </td>
                        </tr>
                    </table>
                    
                    <table className="c-table">
                        <tr>
                            <th className="c-table--title" colSpan="6">{t("tables.rustop-comb")}</th>
                        </tr>
                        <tr>
                            <th colSpan="2">{t("tables.rustop-c5")}</th>
                            <th>{t("tables.micrasHumedas")}</th>
                            <th>{t("tables.micrasSecas")}</th>
                            <th>{t("tables.consumo")}</th>
                            <th>{t("tables.life")}</th>
                        </tr>
                        <tr>
                            <td>{t("tables.primer")}</td>
                            <td>{t("rustop")}</td>
                            <td>115</td>
                            <td>50</td>
                            <td>0,12 l.</td>
                            <td>{t("tables.major")} 15 {t("tables.years")} </td>
                        </tr>
                        <tr>
                            <td>{t("tables.intermedia")}</td>
                            <td>{t("rustop")}</td>
                            <td>115</td>
                            <td>50</td>
                            <td>0,12 l.</td>
                            <td>{t("tables.major")} 15 {t("tables.years")} </td>
                        </tr>
                        <tr>
                            <td>{t("tables.acabado")}</td>
                            <td>{t("tables.hydrograffHP")}</td>
                            <td>100</td>
                            <td>50</td>
                            <td>0,10 l.</td>
                            <td>{t("tables.major")} 15 {t("tables.years")} </td>
                        </tr>
                        <tr>
                            <td colSpan="2">{t("tables.total")}</td>
                            <td>230 + 100</td>
                            <td>100 + 50</td>
                            <td>0,24 + 0,10 l.</td>
                            <td>{t("tables.major")} 15 {t("tables.years")} </td>
                        </tr>
                    </table>
                </div>
                <br/>
            </div>
            <Cmodal open={open} toggleModal={() => closeModal()} type={type}/>
        </React.Fragment>
    );
}