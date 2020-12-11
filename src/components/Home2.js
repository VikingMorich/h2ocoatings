import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next"

export default function Home() {
    const [t] = useTranslation("global")
    const [showLogo, setShowLogo] = useState(true)
    useEffect(() => {
        document.title = 'H2O Coatings'
        window.scrollTo(0, 0)
        setTimeout(() => { setShowLogo(false) }, 4000);
    }, []);
    
    return (
        <div className="c-home2">
            <video autoPlay muted loop className="background-video">
                <source src="/water-movement.mp4" type="video/mp4" />
            </video>
            
            <img src="/logo_h2o_border.png" alt="H2O Coatings" className={`${showLogo ? '' : 'fadeOut'}`}/>
            <div className={`c-home2--presentation ${showLogo ? '' : 'bounceIn'}`}>
                <h1>{t("home.presentation")}</h1>
                <span>{t("home.val1")} · {t("home.val2")} · {t("home.val3")}</span>
            </div>
        </div>
    );
}