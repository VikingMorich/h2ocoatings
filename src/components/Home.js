import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next"
import Slider from "./Slider"

export default function Home() {
    const [t] = useTranslation("global")
    useEffect(() => {
        document.title = 'H2O Coatings'
        window.scrollTo(0, 0)
    }, [t]);
    
    return (
        <div className="c-home">
            <Slider />
            <h1>{t("home.example")}</h1>
            <br />
        </div>
    );
}