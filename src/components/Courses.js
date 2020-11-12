import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next"

export default function Courses() {
    const [t] = useTranslation("global")
    useEffect(() => {
        document.title = 'H2O Coatings - ' + t("services")
        window.scrollTo(0, 0)
    }, [t]);

    return (
        <div className="c-courses">
            <h1>{t("courses").toUpperCase()}</h1>
            <p>{t("courses-col.p1")}</p>
            <p>{t("courses-col.p2")}</p>
            <ul>
                <li>{t("courses-col.op1")}</li>
                <li>{t("courses-col.op2")}</li>
                <li>{t("courses-col.op3")}</li>
                <li>{t("courses-col.op4")}</li>
            </ul>
            <p>{t("courses-col.p3")}</p>
            <p>{t("courses-col.p4")}</p>
            <p>
                {t("courses-col.info")} 
                <a href={`mailto:${t('email')}`}>{t("email")}</a>
            </p>
        </div>
    );
}