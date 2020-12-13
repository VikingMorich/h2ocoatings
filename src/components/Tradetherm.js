import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next"
import arrowRight from "../icons/keyboard_arrow_right-black-18dp.svg"

export default function Tradetherm() {
    const [t, i18n] = useTranslation("global")
    useEffect(() => {
        document.title = 'H2O Coatings - ' + t("materials")
        window.scrollTo(0, 0)
    }, [t]);

    return (
        <React.Fragment>
            <div className="c-materials--top--no-subtitle">
                <div className="c-materials--header">
                    <h1 className="c-materials--header--title">{t("tradetherm-col.title").toUpperCase()}</h1>
                </div>
            </div>
            <div className="c-fullscreen-img--box">
                <img src="/imgs/tradetherm.jpg" className="c-fullscreen-img" alt="tradetherm"/>
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
                    </div>
                    <img src="/imgs/tradetherm2.jpg" className="c-materials--product-img" alt="tradetherm"/>
                </div>
            </div>
        </React.Fragment>
    );
}