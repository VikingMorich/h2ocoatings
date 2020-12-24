import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next"
import arrowRight from "../icons/keyboard_arrow_right-black-18dp.svg"
import photo from "../icons/camera_alt-white-18dp.svg"
import Cmodal from './CarouselModal'

export default function Tradetherm() {
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
                    <h1 className="c-materials--header--title">{t("tradetherm-col.title").toUpperCase()}</h1>
                </div>
            </div>
            <div className="c-fullscreen-img--box">
                <img src="/imgs/materials/tradetherm/tradetherm_principal.jpg" className="c-fullscreen-img--no-subtitle" alt="tradetherm"/>
                <div className="c-fullscreen-img--desc">
                    <h2 className="c-materials--presentation">{t("tradetherm-col.presentation")}</h2>
                    <span className="c-materials--subpresentation">{t("tradetherm-col.content1")}</span>
                </div>
            </div>
            <div className="c-materials">
                <div className="c-materials--prop-box">
                    <div className="c-materials--prop-col">
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("tradetherm-col.header1")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("tradetherm-col.content2")}</span>
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("tradetherm-col.header2")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("tradetherm-col.content3")}</span>
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("tradetherm-col.header3")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("tradetherm-col.content4")}</span>
                    </div>
                    <div className="c-materials--prop-col">
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("tradetherm-col.header4")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("tradetherm-col.content5")}</span>
                        <div className="c-materials--properties">
                            <img alt="arrow-right" src={arrowRight} />
                            <h3 className="c-materials--base">{t("tradetherm-col.header5")}</h3>
                        </div>
                        <span className="c-materials--exp">{t("tradetherm-col.content6")}</span>
                        <div className="c-materials--header--icons">
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
                                <a href={`/pdfs/${i18n.language}/FT/FT_tradetherm_${i18n.language}.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                                    {t("tradetherm-col.prod1")}
                                </a>
                            </div>
                        </div>
                        <br />
                        <img src="/imgs/materials/tradetherm/tradetherm3.jpg" className="c-materials--extra-img c-materials--extra-img--tradetherm" alt="tradetherm"/>
                    </div>
                    <div className="c-materials--product-img--box" onClick={() => {toggleModal(); setType('tradetherm-gallery')}}>
                        <img src="/imgs/materials/tradetherm/tradetherm2.jpg" className="c-materials--product-img" alt="tradetherm"/>
                        <div className="c-materials--showmore">
                            <span><img alt="more photos" src={photo} />{t("showmore")}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Cmodal open={open} toggleModal={() => closeModal()} type={type}/>
        </React.Fragment>
    );
}