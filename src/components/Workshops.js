import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import Cmodal from './CarouselModal'
import photo from "../icons/camera_alt-white-18dp.svg"

export default function Workshops() {
    const [t] = useTranslation("global")
    const [open, setOpen] = useState(false)
    const [type, setType] = useState('')

    useEffect(() => {
        document.title = 'H2O Coatings - ' + t("workshops")
        window.scrollTo(0, 0)
    }, [t]);

    const toggleModal = () => {
        setOpen(!open)
        document.body.style.overflow === "hidden" ? document.body.style.overflow = "auto" : document.body.style.overflow = "hidden"
    }

    const closeModal = () => {
        setOpen(false)
        document.body.style.overflow = "auto"
    }

    return (
        <React.Fragment>
            <div className="c-courses">
                <h1>{t("workshops").toUpperCase()}</h1>
                <div className="c-courses--info">
                    <div className="c-materials--product-img--box" onClick={() => {toggleModal(); setType('workshops-gallery')}}>
                        <img src="/imgs/workshops/workshop1.jpg" className="c-materials--product-img" alt="workshop-img"/>
                        <div className="c-materials--showmore">
                            <span><img alt="more photos" src={photo} />{t("showmore")}</span>
                        </div>
                    </div>
                    <div className="c-courses--text">
                        <p>{t("workshops-col.p1")}</p>
                        <p>{t("workshops-col.p2")}</p>
                        <p>{t("workshops-col.p3")}</p>
                        <p>{t("workshops-col.p4")}</p>
                        <p style={{padding: '10px 0'}}>{t("workshops-col.note")}</p>
                        <p>
                            {t("workshops-col.info")} 
                            <a href={`mailto:${t('email')}`}>{t("email")}</a>
                        </p>
                    </div>
                </div>
                <Cmodal open={open} toggleModal={() => closeModal()} type={type}/>
            </div>
        </React.Fragment>
    );
}