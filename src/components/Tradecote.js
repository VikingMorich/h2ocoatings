import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next"

export default function Tradecote() {
    const [t] = useTranslation("global")
    useEffect(() => {
        document.title = 'H2O Coatings - ' + t("materials")
        window.scrollTo(0, 0)
    }, [t]);

    return (
        <div className="c-materials">
            <div className="c-materials--top">
                <div className="c-materials--header">
                    <h1>{t("tradecote-col.title").toUpperCase()}</h1>
                </div>
                <div className="c-materials--header--icons">
                    <img src="/emissions-aire.png" className="c-seal" alt="emision-icon"/>
                    <img src="/scs.png" className="c-seal" alt="scs-icon"/>
                </div>
            </div>
            <h2 className="c-materials--presentation">{t("tradecote-col.presentation")}</h2>
            <span className="c-materials--exp">{t("tradecote-col.content1")}</span>
            <h3 className="c-materials--base">{t("tradecote-col.header1")}</h3>
            <span className="c-materials--exp">{t("tradecote-col.content2")}</span>
            <h3 className="c-materials--base">{t("tradecote-col.header2")}</h3>
            <span className="c-materials--exp">{t("tradecote-col.content3")}</span>
            <h3 className="c-materials--base">{t("tradecote-col.header3")}</h3>
            <span className="c-materials--exp">{t("tradecote-col.content4")}</span>
            <h3 className="c-materials--base">{t("tradecote-col.header4")}</h3>
            <span className="c-materials--exp">{t("tradecote-col.content5")}</span>
            <h3 className="c-materials--base">{t("tradecote-col.header5")}</h3>
            <span className="c-materials--exp">{t("tradecote-col.content6")}</span>
            <h3 className="c-materials--base">{t("tradecote-col.header6")}</h3>
            <span className="c-materials--exp">{t("tradecote-col.content7")}</span>
            <span className="c-materials--sis">{t("tradecote-col.sistems")}</span>
            

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
    );
}