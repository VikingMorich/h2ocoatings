import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next"

export default function Hydrograff() {
    const [t] = useTranslation("global")
    
    useEffect(() => {
        document.title = 'H2O Coatings - ' + t("materials")
        window.scrollTo(0, 0)
    }, [t]);

    return (
        <div className="c-materials">
            <div className="c-materials--top">
                <div className="c-materials--header">
                    <h1>{t("hydrograff-col.title").toUpperCase()}</h1>
                </div>
                <div className="c-materials--header--icons">
                    <img src="/emissions-aire.png" className="c-seal" />
                </div>
            </div>
            <h2 className="c-materials--presentation">{t("hydrograff-col.presentation")}</h2>
            <span className="c-materials--exp">{t("hydrograff-col.content1")}</span>
            <h3 className="c-materials--base">{t("hydrograff-col.header1")}</h3>
            <span className="c-materials--exp">{t("hydrograff-col.content2")}</span>
            <h3 className="c-materials--base">{t("hydrograff-col.header2")}</h3>
            <span className="c-materials--exp">{t("hydrograff-col.content3")}</span>
            <h3 className="c-materials--base">{t("hydrograff-col.header3")}</h3>
            <span className="c-materials--exp">{t("hydrograff-col.content4")}</span>
            <h3 className="c-materials--base">{t("hydrograff-col.header4")}</h3>
            <span className="c-materials--exp">{t("hydrograff-col.content5")}</span>
            <h3 className="c-materials--base">{t("hydrograff-col.header5")}</h3>
            <span className="c-materials--exp">{t("hydrograff-col.content6")}</span>
            <span className="c-materials--sis">{t("hydrograff-col.sistems")}</span>

            <table className="c-table">
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
            </table>
            <br />
            <span className="c-materials--note">{t("hydrograff-col.note")}</span>
        </div>
    );
}