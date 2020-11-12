import React from 'react';
import cross from '../icons/clear-black-18dp.svg'

export default function Modal(props) {
    
    return (
        <React.Fragment>
            {props.open &&
            <div className="c-modal-background" onClick={props.toggleModal}>
                <div className="c-modal">
                    <img className="c-modal--cross" alt="menu-icon" src={cross} onClick={props.toggleModal}/>
                    {props.type === 'cookies' && 
                        <h1>Cookies</h1>
                    }
                    {props.type === 'privacy' && 
                        <h1>Privacy</h1>
                    }
                </div>
            </div>
            }
        </React.Fragment>
    );
}