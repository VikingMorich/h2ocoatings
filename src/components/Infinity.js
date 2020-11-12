import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next"

export default function InfinityComp() {
    const [t] = useTranslation("global")
    useEffect(() => {
        document.title = 'H2O Coatings - ' + t("materials")
        window.scrollTo(0, 0)
    }, [t]);

    return (
        <div className="c-materials">
            <div className="c-materials--top">
                <div className="c-materials--header">
                    <h1 className="c-materials--header--title">{t("infinity").toUpperCase()}</h1>
                    <span className="c-materials--header--subtitle">{t("infinity-col.subtitle")}</span>
                </div>
                <div className="c-materials--header--icons">
                    <img src="/emissions-aire.png" className="c-seal" />
                </div>
            </div>
            <h2 className="c-materials--presentation">{t("infinity-col.presentation")}</h2>
            <span className="c-materials--subpresentation">{t("infinity-col.subpresentation")}</span>
            <h3 className="c-materials--base">{t("infinity-col.header1")}</h3>
            <span className="c-materials--exp">{t("infinity-col.content1")}</span>
            <h3 className="c-materials--base">{t("infinity-col.header2")}</h3>
            <h3 className="c-materials--base">{t("infinity-col.header3")}</h3>
            <h3 className="c-materials--base">{t("infinity-col.header4")}</h3>
            <h3 className="c-materials--base">{t("infinity-col.header5")}</h3>
            <h3 className="c-materials--base">{t("infinity-col.header6")}</h3>
            <span className="c-materials--exp">{t("infinity-col.content2")}</span>
            <span className="c-materials--sis">{t("infinity-col.sistems")}</span>
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
            <span className="c-materials--note__title">{t("infinity-col.notes")}</span>
            <span className="c-materials--note">{t("infinity-col.note1")}</span>
            <span className="c-materials--note">{t("infinity-col.note2")}</span>
        </div>
    );
}