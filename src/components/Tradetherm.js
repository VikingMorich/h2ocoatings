import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next"

export default function Tradetherm() {
    const [t] = useTranslation("global")
    useEffect(() => {
        document.title = 'H2O Coatings - ' + t("materials")
        window.scrollTo(0, 0)
    }, [t]);

    return (
        <div className="c-materials">
            <div className="c-materials--top">
                <div className="c-materials--header">
                    <h1>{t("tradetherm-col.title").toUpperCase()}</h1>
                </div>
                <div className="c-materials--header--icons">
                    <img src="/scs.png" className="c-seal" alt="scs-icon"/>
                </div>
            </div>
            <h2 className="c-materials--presentation">{t("tradetherm-col.presentation")}</h2>
            <span className="c-materials--exp">{t("tradetherm-col.content1")}</span>
            <h3 className="c-materials--base">{t("tradetherm-col.header1")}</h3>
            <span className="c-materials--exp">{t("tradetherm-col.content2")}</span>
            <h3 className="c-materials--base">{t("tradetherm-col.header2")}</h3>
            <span className="c-materials--exp">{t("tradetherm-col.content3")}</span>
            <h3 className="c-materials--base">{t("tradetherm-col.header3")}</h3>
            <span className="c-materials--exp">{t("tradetherm-col.content4")}</span>
            <h3 className="c-materials--base">{t("tradetherm-col.header4")}</h3>
            <span className="c-materials--exp">{t("tradetherm-col.content5")}</span>
            <h3 className="c-materials--base">{t("tradetherm-col.header5")}</h3>
            <span className="c-materials--exp">{t("tradetherm-col.content6")}</span>
        </div>
    );
}