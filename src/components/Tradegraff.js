import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next"

export default function Tradegraff() {
    const [t] = useTranslation("global")
    useEffect(() => {
        document.title = 'H2O Coatings - ' + t("materials")
        window.scrollTo(0, 0)
    }, [t]);

    return (
        <div className="c-materials">
            <div className="c-materials--top">
                <div className="c-materials--header">
                    <h1>{t("tradegraff-col.title").toUpperCase()}</h1>
                </div>
                <div className="c-materials--header--icons">
                    <img src="/emissions-aire.png" className="c-seal" />
                    <img src="/scs.png" className="c-seal" />
                </div>
            </div>
            <h2 className="c-materials--presentation">{t("tradegraff-col.presentation")}</h2>
            <span className="c-materials--exp">{t("tradegraff-col.content1")}</span>
            <h3 className="c-materials--base">{t("tradegraff-col.header1")}</h3>
            <span className="c-materials--exp">{t("tradegraff-col.content2")}</span>
            <h3 className="c-materials--base">{t("tradegraff-col.header2")}</h3>
            <span className="c-materials--exp">{t("tradegraff-col.content3")}</span>
            <h3 className="c-materials--base">{t("tradegraff-col.header3")}</h3>
            <span className="c-materials--exp">{t("tradegraff-col.content4")}</span>
            <h3 className="c-materials--base">{t("tradegraff-col.header4")}</h3>
            <span className="c-materials--exp">{t("tradegraff-col.content5")}</span>

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

            <br />
            <span className="c-materials--sis">{t("tradegraff-col.sistems")}</span>

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
            <br />
        </div>
    );
}