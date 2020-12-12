import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next"

export default function Home() {
    const [t] = useTranslation("global")
    const [showLogo, setShowLogo] = useState(true)
    const [hideLogo, setHideLogo] = useState(true)
    useEffect(() => {
        document.title = 'H2O Coatings'
        window.scrollTo(0, 0)
        setTimeout(() => { 
            setShowLogo(false)
            setTimeout(() => { setHideLogo(false) }, 700);
        }, 5000);
    }, []);
    
    return (
        <div className="c-home">
            <div className="c-home--background-container">
                <video autoPlay muted loop className="background-video">
                    <source src="https://media.istockphoto.com/videos/water-wave-video-id473317129" type="video/mp4" />
                </video>
            </div>
            <img src="/logo_h2o_border.png" alt="H2O Coatings" className={`${!showLogo && 'fadeOut'} ${!hideLogo && 'notDisplay'}`}/>
            <div className={`c-home--presentation ${showLogo ? '' : 'fadeIn'}`}>
                <h1>{t("home.presentation")}</h1>
                <span>{t("home.val1")} · {t("home.val2")} · {t("home.val3")}</span>
            </div>
        </div>
    );
}