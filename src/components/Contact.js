import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next"
import Form from "./Form"

export default function Contact() {
    const [t, i18n] = useTranslation("global")
    useEffect(() => {
        document.title = 'H2O Coatings - ' + t("contact")
        window.scrollTo(0, 0)
    }, [t]);

    return (
        <div className="c-contact">
            <h1 className="c-contact--title">{t("contact").toUpperCase()}</h1>
            <div className="c-contact--container">
                <iframe title="h2o-maps" className="c-contact--map" src={i18n.language === 'cat' ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28753.619599488287!2d2.212608234014232!3d41.661298471106505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4e7305989a5c1%3A0x9b6ac782a4d6cc3b!2sH2O%20COATINGS!5e0!3m2!1sca!2ses!4v1608398362192!5m2!1sca!2ses" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33729.515937831406!2d2.2110268173442718!3d41.64932769000622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4e7305989a5c1%3A0x9b6ac782a4d6cc3b!2sH2O%20COATINGS!5e0!3m2!1ses!2ses!4v1604998929843!5m2!1ses!2ses"} width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <Form />
            </div>
            <a className="c-social-container" href="https://www.instagram.com/h2ocoatings/" target="_blank" rel="noreferrer">
                <img className="c-social--img" src="/follow-insta.png" alt="instagram"/>
                <span >{t("insta")}</span>
            </a>
            </div>
    );
}