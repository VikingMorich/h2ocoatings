import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next"
import arrowRight from "../icons/keyboard_arrow_right-black-18dp.svg"

export default function InfinityComp() {
    const [t, i18n] = useTranslation("global")
    useEffect(() => {
        document.title = 'H2O Coatings - ' + t("materials")
        window.scrollTo(0, 0)
    }, [t]);

    return (
        <React.Fragment>
            <div className="c-materials--top">
                <div className="c-materials--header">
                    <h1 className="c-materials--header--title">{t("infinity").toUpperCase()}</h1>
                    <span className="c-materials--header--subtitle">{t("infinity-col.subtitle")}</span>
                </div>
            </div>
            <div className="c-fullscreen-img--box">
                <img src="/imgs/infinity-supreme-1.jpg" className="c-fullscreen-img" alt="infinity-supreme"/>
                <div className="c-fullscreen-img--desc">
                    <h2 className="c-materials--presentation">{t("infinity-col.presentation")}</h2>
                    <span className="c-materials--subpresentation">{t("infinity-col.subpresentation")}</span>
                </div>
            </div>
            <div className="c-materials">
            <div className="c-materials--prop-box">
                <div className="c-materials--prop-col">
                    <div className="c-materials--properties">
                        <img alt="arrow-right" src={arrowRight} />
                        <h3 className="c-materials--base">{t("infinity-col.header1")}</h3>
                    </div>
                    <span className="c-materials--exp">{t("infinity-col.content1")}</span>
                    <div className="c-materials--properties">
                        <img alt="arrow-right" src={arrowRight} />
                        <h3 className="c-materials--base">{t("infinity-col.header2")}</h3>
                    </div>
                    <div className="c-materials--properties">
                        <img alt="arrow-right" src={arrowRight} />
                        <h3 className="c-materials--base">{t("infinity-col.header3")}</h3>
                    </div>
                    <div className="c-materials--properties">
                        <img alt="arrow-right" src={arrowRight} />
                        <h3 className="c-materials--base">{t("infinity-col.header4")}</h3>
                    </div>
                </div>
                <div className="c-materials--prop-col">
                    <div className="c-materials--properties">
                        <img alt="arrow-right" src={arrowRight} />
                        <h3 className="c-materials--base">{t("infinity-col.header5")}</h3>
                    </div>
                    <div className="c-materials--properties">
                        <img alt="arrow-right" src={arrowRight} />
                        <h3 className="c-materials--base">{t("infinity-col.header6")}</h3>
                    </div>
                    <span className="c-materials--exp">{t("infinity-col.content2")}</span>
                    <br />
                    <span className="c-materials--exp">{t("infinity-col.content3")}</span>

                    <div className="c-materials--header--icons">
                        <img src="/emissions-aire.png" className="c-seal" alt="emision-icon"/>
                    </div>
                </div>
            </div>
            <div className="c-materials--product-box">
                <div className="c-materials--product-list">
                    <span className="c-materials--button">
                        {t("infinity-col.products")}
                    </span>
                    <div className="c-materials--block">
                        <span className="c-materials--block--op">{t("infinity-col.op1")}</span>
                        <a href={`/pdfs/${i18n.language}/FT/FT_infinity_fix_${i18n.language}.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                            {t("infinity-col.prod1")}
                        </a>
                        <span className="c-materials--block--op">{t("infinity-col.op2")}</span>
                        <a href={`/pdfs/${i18n.language}/FT/FT_infinity_${i18n.language}.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                            {t("infinity-col.prod2")}
                        </a>
                        <span className="c-materials--block--prod">{t("infinity-col.prod3")}</span>
                        <a href={`/pdfs/${i18n.language}/FT/FT_infinity_premium_${i18n.language}.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                            {t("infinity-col.prod4")}
                        </a>
                        <a href={`/pdfs/${i18n.language}/FT/FT_infinity_supreme_${i18n.language}.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                            {t("infinity-col.prod5")}
                        </a>
                        <span className="c-materials--block--op">{t("infinity-col.op2")}</span>
                        <a href={`/pdfs/${i18n.language}/FT/FT_infinity_fiber_${i18n.language}.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                            {t("infinity-col.prod6")}
                        </a>
                        <a href={`/pdfs/${i18n.language}/FT/FT_infinity_pigment_${i18n.language}.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                            {t("infinity-col.prod7")}
                        </a>
                        <a href={`/pdfs/${i18n.language}/FT/FT_infinity_kit_add_2_comp_${i18n.language}.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                            {t("infinity-col.prod8")}
                        </a>
                        <a href={`/pdfs/${i18n.language}/FT/FT_infinity_add_supreme_${i18n.language}.pdf`} target="_blank" rel="noreferrer" className="c-materials--block--prod">
                            {t("infinity-col.prod9")}
                        </a>
                        <a href={`/pdfs/${i18n.language}/Guia/GUIA_INFINITY_2021.pdf`} target="_blank" rel="noreferrer">
                            <div className="c-materials--guide">
                                <span>{t("guide")}</span>
                            </div>
                        </a>
                    </div>
                </div>
                <img src="/imgs/infinity.jpg" className="c-materials--product-img" alt="infinity-microciments"/>
            </div>
            <br />
            <div className="c-materials--hr-title">
                <div className="c-materials--hr"></div>
                <div className="c-materials--sis-box">
                    <span className="c-materials--sis">{t("infinity-col.sistems").toUpperCase()}</span>
                </div>
            </div>
            <table className="c-table">
                <tr>
                    <th colSpan="2">{t("tables.infinity-basic")}</th>
                    <th>{t("tables.tool")}</th>
                    <th>{t("tables.consumo")}</th>
                </tr>
                <tr>
                    <td>{t("tables.primer")}</td>
                    <td>{t("tables.infinity-fix")}</td>
                    <td>{t("tables.tool-brocha")}</td>
                    <td>0,2 {t("tables.units-kg-m2")}</td>
                </tr>
                <tr>
                    <td>{t("tables.fondo")}</td>
                    <td>{t("tables.infinity-fiber")}</td>
                    <td>{t("tables.tool-llana")}</td>
                    <td>1,8 {t("tables.units-kg-m2")}</td>
                </tr>
                <tr>
                    <td>{t("tables.acabado")}</td>
                    <td>{t("infinity")}</td>
                    <td>{t("tables.tool-llana")}</td>
                    <td>1 {t("tables.units-kg-m2")}</td>
                </tr>
                <tr>
                    <td>{t("tables.sellado")}</td>
                    <td>{t("tradegraff")}</td>
                    <td>{t("tables.tool-rodillo")}</td>
                    <td>0,2 {t("tables.units-l-m2")} ({t("tables.ciclo")})</td>
                </tr>
            </table>

            <table className="c-table">
                <tr>
                    <th colSpan="2">{t("tables.infinity-premium")}</th>
                    <th>{t("tables.tool")}</th>
                    <th>{t("tables.consumo")}</th>
                </tr>
                <tr>
                    <td>{t("tables.primer")}</td>
                    <td>{t("tables.infinity-fix")}</td>
                    <td>{t("tables.tool-brocha")}</td>
                    <td>0,2 {t("tables.units-kg-m2")}</td>
                </tr>
                <tr>
                    <td>{t("tables.fondo")}</td>
                    <td>{t("tables.infinity-fiber")}*</td>
                    <td>{t("tables.tool-llana")}</td>
                    <td>1,8 {t("tables.units-kg-m2")}</td>
                </tr>
                <tr>
                    <td>{t("tables.intermedia")}</td>
                    <td>{t("tables.infinityPremium")}</td>
                    <td>{t("tables.tool-llana")}</td>
                    <td>0,7 {t("tables.units-kg-m2")}</td>
                </tr>
                <tr>
                    <td>{t("tables.acabado")}</td>
                    <td>{t("tables.infinity-comp")}**</td>
                    <td>{t("tables.tool-llana")}</td>
                    <td>0,5 {t("tables.units-kg-m2")}</td>
                </tr>
                <tr>
                    <td>{t("tables.sellado")}</td>
                    <td>{t("tradegraff")}</td>
                    <td>{t("tables.tool-rodillo")}</td>
                    <td>0,2 {t("tables.units-l-m2")} ({t("tables.ciclo")})</td>
                </tr>
            </table>

            <table className="c-table">
                <tr>
                    <th colSpan="2">{t("tables.infinity-supreme")}</th>
                    <th>{t("tables.tool")}</th>
                    <th>{t("tables.consumo")}</th>
                </tr>
                <tr>
                    <td>{t("tables.primer")}</td>
                    <td>{t("tables.infinity-fix")}</td>
                    <td>{t("tables.tool-brocha")}</td>
                    <td>0,2 {t("tables.units-kg-m2")}</td>
                </tr>
                <tr>
                    <td>{t("tables.fondo")}</td>
                    <td>{t("tables.infinity-fiber")}*</td>
                    <td>{t("tables.tool-llana")}</td>
                    <td>1,8 {t("tables.units-kg-m2")}</td>
                </tr>
                <tr>
                    <td>{t("tables.intermedia")}</td>
                    <td>{t("tables.infinitySupreme")}</td>
                    <td>{t("tables.tool-llana")}</td>
                    <td>0,6 {t("tables.units-kg-m2")}</td>
                </tr>
                <tr>
                    <td>{t("tables.acabado")}</td>
                    <td>{t("tables.infinitySupreme-comp")}**</td>
                    <td>{t("tables.tool-llana")}</td>
                    <td>0,4 {t("tables.units-kg-m2")}</td>
                </tr>
                <tr>
                    <td>{t("tables.sellado")}</td>
                    <td>{t("tradegraff")}</td>
                    <td>{t("tables.tool-rodillo")}</td>
                    <td>0,2 {t("tables.units-l-m2")} ({t("tables.ciclo")})</td>
                </tr>
            </table>
            <div className="c-materials--notes-box">
                <span className="c-materials--note__title">{t("infinity-col.notes")}</span>
                <span className="c-materials--note">{t("infinity-col.note1")}</span>
                <span className="c-materials--note">{t("infinity-col.note2")}</span>
            </div>
        </div>
        </React.Fragment>
    );
}