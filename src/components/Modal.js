import React from 'react';
import cross from '../icons/clear-black-18dp.svg'
import { useTranslation } from "react-i18next"

export default function Modal(props) {
    const [t] = useTranslation("global")
    
    return (
        <React.Fragment>
            {props.open &&
            <div className="c-modal-background">
                <div className="c-modal">
                    <img className="c-modal--cross" alt="menu-icon" src={cross} onClick={props.toggleModal}/>
                    {props.type === 'cookies' && 
                    <React.Fragment>
                    <h1>{t('footer.cookies')}</h1>
                        <div className="c-modal--content">
                            <p>{t('cookies.p1')}</p>
                            <h3>{t('cookies.h1')}</h3>
                            <p>{t('cookies.p2')}</p>
                            <h3>{t('cookies.h2')}</h3>
                            <p>{t('cookies.p3')}</p>
                        </div>
                    </React.Fragment>
                    }
                    {props.type === 'privacy' && 
                        <React.Fragment>
                            <h1>{t('footer.privacy')}</h1>
                            <div className="c-modal--content">
                                <p>{t('privacy.p1')}</p>
                                <h3>{t('privacy.h1')}</h3>
                                <p>{t('privacy.p2')}</p>
                                <h3>{t('privacy.h2')}</h3>
                                <p>{t('privacy.p3')}</p>
                                <h3>{t('privacy.h3')}</h3>
                                <p>{t('privacy.p4')}</p>
                                <h3>{t('privacy.h4')}</h3>
                                <p>{t('privacy.p5')}</p>
                            </div>
                        </React.Fragment>
                    }
                </div>
            </div>
            }
        </React.Fragment>
    );
}