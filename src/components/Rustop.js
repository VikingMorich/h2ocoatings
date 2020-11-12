import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next"

export default function Rustop() {
    const [t, i18n] = useTranslation("global")
    useEffect(() => {
        document.title = 'H2O Coatings - ' + t("materials")
        window.scrollTo(0, 0)
    }, [t]);

    return (
        <div className="c-materials">
            <div className="c-materials--top">
                <div className="c-materials--header">
                    <h1>{t("rustop").toUpperCase()}</h1>
                </div>
                <div className="c-materials--header--icons">
                    <img src="/emissions-aire.png" className="c-seal" />
                    <img src="/scs.png" className="c-seal" />
                </div>
            </div>
            <h2 className="c-materials--presentation">{t("rustop-col.presentation")}</h2>
            <span className="c-materials--exp">{t("rustop-col.content1")}</span>
            <h3 className="c-materials--base">{t("rustop-col.header1")}</h3>
            <span className="c-materials--exp">{t("rustop-col.content2")}</span>
            <h3 className="c-materials--base">{t("rustop-col.header2")}</h3>
            <span className="c-materials--exp">{t("rustop-col.content3")}</span>
            <h3 className="c-materials--base">{t("rustop-col.header3")}</h3>
            <span className="c-materials--exp">{t("rustop-col.content4")}</span>
            <h3 className="c-materials--base">{t("rustop-col.header4")}</h3>
            <span className="c-materials--exp">{t("rustop-col.content5")}</span>
            <h3 className="c-materials--base">{t("rustop-col.header5")}</h3>
            <span className="c-materials--exp">{t("rustop-col.content6")}</span>
            <h3 className="c-materials--base">{t("rustop-col.header6")}</h3>
            <span className="c-materials--exp">{t("rustop-col.content7")}</span>
            <span className="c-materials--sis">{t("rustop-col.sistems")}</span>
            
            <table className="c-table">
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
                    <td>150</td>
                    <td>65</td>
                    <td>0,15 l.</td>
                    <td>{t("tables.major")} 15 {t("tables.years")} </td>
                </tr>
                <tr>
                    <td>{t("tables.fondo")}</td>
                    <td>{t("rustop")}</td>
                    <td>150</td>
                    <td>65</td>
                    <td>0,15 l.</td>
                    <td>{t("tables.major")} 15 {t("tables.years")} </td>
                </tr>
                <tr>
                    <td>{t("tables.intermedia")}</td>
                    <td>{t("rustop")}</td>
                    <td>150</td>
                    <td>65</td>
                    <td>0,15 l.</td>
                    <td>{t("tables.major")} 15 {t("tables.years")} </td>
                </tr>
                <tr>
                    <td>{t("tables.acabado")}</td>
                    <td>{t("rustop")}</td>
                    <td>150</td>
                    <td>65</td>
                    <td>0,15 l.</td>
                    <td>{t("tables.major")} 15 {t("tables.years")} </td>
                </tr>
                <tr>
                    <td colSpan="2">{t("tables.total")}</td>
                    <td>600</td>
                    <td>260</td>
                    <td>0,60 l.</td>
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
                    <td>150</td>
                    <td>66</td>
                    <td>0,15 l.</td>
                    <td>{t("tables.major")} 15 {t("tables.years")} </td>
                </tr>
                <tr>
                    <td>{t("tables.intermedia")}</td>
                    <td>{t("rustop")}</td>
                    <td>150</td>
                    <td>66</td>
                    <td>0,15 l.</td>
                    <td>{t("tables.major")} 15 {t("tables.years")} </td>
                </tr>
                <tr>
                    <td>{t("tables.acabado")}</td>
                    <td>{t("rustop")}</td>
                    <td>150</td>
                    <td>66</td>
                    <td>0,15 l.</td>
                    <td>{t("tables.major")} 15 {t("tables.years")} </td>
                </tr>
                <tr>
                    <td colSpan="2">{t("tables.total")}</td>
                    <td>450</td>
                    <td>200</td>
                    <td>0,45 l.</td>
                    <td>{t("tables.major")} 15 {t("tables.years")} </td>
                </tr>
            </table>

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
                    <td>0,35 l.</td>
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
                    <td>{t("hydrograffHP")}</td>
                    <td>100</td>
                    <td>50</td>
                    <td>0,10 l.</td>
                    <td>{t("tables.major")} 15 {t("tables.years")} </td>
                </tr>
                <tr>
                    <td colSpan="2">{t("tables.total")}</td>
                    <td>230 + 100</td>
                    <td>100 + 50</td>
                    <td>0,24 + 0,10</td>
                    <td>{t("tables.major")} 15 {t("tables.years")} </td>
                </tr>
            </table>
            <br/>
            <a href={`/pdfs/${i18n.language}/FT_INFINITY_FIX_${i18n.language}.pdf`} target="_blank" rel="noreferrer" >Download</a>
        </div>
    );
}