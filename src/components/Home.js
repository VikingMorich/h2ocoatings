import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next"

export default function Home() {
    const [t] = useTranslation("global")
    const [showLogo, setShowLogo] = useState(false)
    const [hideLogo, setHideLogo] = useState(false)
    useEffect(() => {
        document.title = 'H2O Coatings'
        window.scrollTo(0, 0)
        setTimeout(() => { 
            setShowLogo(true)
            setHideLogo(true)
            setTimeout(() => { 
                setShowLogo(false)
                setTimeout(() => { 
                    setHideLogo(false) 
                }, 700);
            }, 4000);
        }, 1000);
        
    }, []);
    
    return (
        <div className="c-home">
            <div className="c-home--background-container">
                <video autoPlay muted loop className="background-video">
                    <source src="https://media.istockphoto.com/videos/water-wave-video-id473317129" type="video/mp4" />
                </video>
            </div>
            <img src="/logo_h2o-white-border.png" alt="H2O Coatings" className={`fadeIn ${!showLogo && 'fadeOut'} ${!hideLogo && 'notDisplay'}`}/>
            <div className={`c-home--presentation ${showLogo ? '' : 'fadeIn'}`}>
                <h1>{t("home.presentation")}</h1>
                <span>{t("home.val1")} · {t("home.val2")} · {t("home.val3")}</span>
            </div>
        </div>
    );
}