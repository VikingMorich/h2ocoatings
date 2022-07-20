import React from 'react';
import cross from '../icons/clear-black-18dp.svg'
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from 'react-image-gallery';

export default function Modal(props) {
    const infinityImages = [
        {
            original: '/imgs/materials/infinity/infinity1.jpg',
            thumbnail: '/imgs/materials/infinity/infinity1.jpg',
        },
        {
            original: '/imgs/materials/infinity/infinity2.jpg',
            thumbnail: '/imgs/materials/infinity/infinity2.jpg',
        },
        {
            original: '/imgs/materials/infinity/infinity3.jpg',
            thumbnail: '/imgs/materials/infinity/infinity3.jpg',
        },
        {
            original: '/imgs/materials/infinity/infinity4.JPG',
            thumbnail: '/imgs/materials/infinity/infinity4.JPG',
        },
        {
            original: '/imgs/materials/infinity/infinity5.jpg',
            thumbnail: '/imgs/materials/infinity/infinity5.jpg',
        },
        {
            original: '/imgs/materials/infinity/infinity6.jpg',
            thumbnail: '/imgs/materials/infinity/infinity6.jpg',
        },
        {
            original: '/imgs/materials/infinity/infinity7.jpg',
            thumbnail: '/imgs/materials/infinity/infinity7.jpg',
        },
        {
            original: '/imgs/materials/infinity/infinity8.JPG',
            thumbnail: '/imgs/materials/infinity/infinity8.JPG',
        },
        {
            original: '/imgs/materials/infinity/infinity9.jpg',
            thumbnail: '/imgs/materials/infinity/infinity9.jpg',
        },
        {
            original: '/imgs/materials/infinity/infinity10.jpg',
            thumbnail: '/imgs/materials/infinity/infinity10.jpg',
        },
        {
            original: '/imgs/materials/infinity/infinity11.jpg',
            thumbnail: '/imgs/materials/infinity/infinity11.jpg',
        },
        {
            original: '/imgs/materials/infinity/infinity12.jpg',
            thumbnail: '/imgs/materials/infinity/infinity12.jpg',
        },
        {
            original: '/imgs/materials/infinity/infinity13.jpg',
            thumbnail: '/imgs/materials/infinity/infinity13.jpg',
        },
        {
            original: '/imgs/materials/infinity/infinity14.JPG',
            thumbnail: '/imgs/materials/infinity/infinity14.JPG',
        },
        {
            original: '/imgs/materials/infinity/infinity15.jpg',
            thumbnail: '/imgs/materials/infinity/infinity15.jpg',
        },
        {
            original: '/imgs/materials/infinity/infinity16.jpg',
            thumbnail: '/imgs/materials/infinity/infinity16.jpg',
        },
        {
            original: '/imgs/materials/infinity/infinity17.JPG',
            thumbnail: '/imgs/materials/infinity/infinity17.JPG',
        },
        {
            original: '/imgs/materials/infinity/infinity_principal.jpg',
            thumbnail: '/imgs/materials/infinity/infinity_principal.jpg',
        },
      ];
      const tradegraffImages = [
        {
            original: '/imgs/materials/tradegraff/tradegraff1.jpg',
            thumbnail: '/imgs/materials/tradegraff/tradegraff1.jpg',
        },
        {
            original: '/imgs/materials/tradegraff/tradegraff2.jpg',
            thumbnail: '/imgs/materials/tradegraff/tradegraff2.jpg',
        },
        {
            original: '/imgs/materials/tradegraff/tradegraff3.JPG',
            thumbnail: '/imgs/materials/tradegraff/tradegraff3.JPG',
        },
        {
            original: '/imgs/materials/tradegraff/tradegraff4.jpg',
            thumbnail: '/imgs/materials/tradegraff/tradegraff4.jpg',
        },
        {
            original: '/imgs/materials/tradegraff/tradegraff5.jpg',
            thumbnail: '/imgs/materials/tradegraff/tradegraff5.jpg',
        },
        {
            original: '/imgs/materials/tradegraff/tradegraff6.jpg',
            thumbnail: '/imgs/materials/tradegraff/tradegraff6.jpg',
        },
        {
            original: '/imgs/materials/tradegraff/tradegraff_principal.jpg',
            thumbnail: '/imgs/materials/tradegraff/tradegraff_principal.jpg',
        },
      ];
      const rustopImages = [
        {
            original: '/imgs/materials/rustop/rustop2.jpg',
            thumbnail: '/imgs/materials/rustop/rustop2.jpg',
        },
        {
            original: '/imgs/materials/rustop/rustop1.JPG',
            thumbnail: '/imgs/materials/rustop/rustop1.JPG',
        },
        {
            original: '/imgs/materials/rustop/rustop3.jpg',
            thumbnail: '/imgs/materials/rustop/rustop3.jpg',
        },
        {
            original: '/imgs/materials/rustop/rustop4.JPG',
            thumbnail: '/imgs/materials/rustop/rustop4.JPG',
        },
        {
            original: '/imgs/materials/rustop/rustop5.jpg',
            thumbnail: '/imgs/materials/rustop/rustop5.jpg',
        },
        {
            original: '/imgs/materials/rustop/rustop6.jpg',
            thumbnail: '/imgs/materials/rustop/rustop6.jpg',
        },
        {
            original: '/imgs/materials/rustop/rustop7.JPG',
            thumbnail: '/imgs/materials/rustop/rustop7.JPG',
        },
        {
            original: '/imgs/materials/rustop/rustop8.jpg',
            thumbnail: '/imgs/materials/rustop/rustop8.jpg',
        },
        {
            original: '/imgs/materials/rustop/rustop_principal.png',
            thumbnail: '/imgs/materials/rustop/rustop_principal.png',
        },
      ];
      const hydrograffImages = [
        {
            original: '/imgs/materials/hydrograff/hydrograff1.jpg',
            thumbnail: '/imgs/materials/hydrograff/hydrograff1.jpg',
        },
        {
            original: '/imgs/materials/hydrograff/hydrograff2.jpg',
            thumbnail: '/imgs/materials/hydrograff/hydrograff2.jpg',
        },
        {
            original: '/imgs/materials/hydrograff/hydrograff3.jpg',
            thumbnail: '/imgs/materials/hydrograff/hydrograff3.jpg',
        },
        {
            original: '/imgs/materials/hydrograff/hydrograff_principal.jpg',
            thumbnail: '/imgs/materials/hydrograff/hydrograff_principal.jpg',
        },
      ];
      const tradecoteImages = [
        {
            original: '/imgs/materials/tradecote/tradecote1.jpg',
            thumbnail: '/imgs/materials/tradecote/tradecote1.jpg',
        },
        {
            original: '/imgs/materials/tradecote/tradecote2.JPG',
            thumbnail: '/imgs/materials/tradecote/tradecote2.JPG',
        },
        {
            original: '/imgs/materials/tradecote/tradecote3.jpg',
            thumbnail: '/imgs/materials/tradecote/tradecote3.jpg',
        },
        {
            original: '/imgs/materials/tradecote/tradecote4.JPG',
            thumbnail: '/imgs/materials/tradecote/tradecote4.JPG',
        },
        {
            original: '/imgs/materials/tradecote/tradecote5.jpg',
            thumbnail: '/imgs/materials/tradecote/tradecote5.jpg',
        },
        {
            original: '/imgs/materials/tradecote/tradecote_principal.jpg',
            thumbnail: '/imgs/materials/tradecote/tradecote_principal.jpg',
        },
      ];
      const tradethermImages = [
        {
            original: '/imgs/materials/tradetherm/tradetherm2.jpg',
            thumbnail: '/imgs/materials/tradetherm/tradetherm2.jpg',
        },
        {
            original: '/imgs/materials/tradetherm/tradetherm3.jpg',
            thumbnail: '/imgs/materials/tradetherm/tradetherm3.jpg',
        },
        {
            original: '/imgs/materials/tradetherm/tradetherm_principal.jpg',
            thumbnail: '/imgs/materials/tradetherm/tradetherm_principal.jpg',
        },
      ];
      const hydrosecImages = [
        {
            original: '/imgs/materials/hydrosec/hydrosec_1.jpg',
            thumbnail: '/imgs/materials/hydrosec/hydrosec_1.jpg',
        },
        {
            original: '/imgs/materials/hydrosec/hydrosec_2.jpg',
            thumbnail: '/imgs/materials/hydrosec/hydrosec_2.jpg',
        },
        {
            original: '/imgs/materials/hydrosec/hydrosec_principal.jpg',
            thumbnail: '/imgs/materials/hydrosec/hydrosec_principal.jpg',
        },
      ];
      const workshopsImages = [
        {
            original: '/imgs/workshops/workshop1.jpg',
            thumbnail: '/imgs/workshops/workshop1.jpg',
        },
        {
            original: '/imgs/workshops/workshop2.jpg',
            thumbnail: '/imgs/workshops/workshop2.jpg',
        },
        {
            original: '/imgs/workshops/workshop3.jpg',
            thumbnail: '/imgs/workshops/workshop3.jpg',
        },
        {
            original: '/imgs/workshops/workshop4.jpg',
            thumbnail: '/imgs/workshops/workshop4.jpg',
        },
        {
            original: '/imgs/workshops/workshop5.jpg',
            thumbnail: '/imgs/workshops/workshop5.jpg',
        },
        {
            original: '/imgs/workshops/workshop6.jpg',
            thumbnail: '/imgs/workshops/workshop6.jpg',
        },
      ]
    
    return (
        <React.Fragment>
            {props.open &&
            <div className="c-cmodal-background">
                <div className="c-cmodal">
                    <img className="c-cmodal--cross" alt="menu-icon" src={cross} onClick={props.toggleModal}/>
                    {props.type === 'infinity-gallery' && 
                        <div className="c-cmodal--gallery">
                            <ImageGallery lazyLoad={true} items={infinityImages} showFullscreenButton={false}/>
                        </div>
                    }
                    {props.type === 'tradegraff-gallery' &&
                        <div className="c-cmodal--gallery">
                            <ImageGallery lazyLoad={true} items={tradegraffImages} showFullscreenButton={false}/>
                        </div>
                    }
                    {props.type === 'rustop-gallery' &&
                        <div className="c-cmodal--gallery">
                            <ImageGallery lazyLoad={true} items={rustopImages} showFullscreenButton={false}/>
                        </div>
                    }
                    {props.type === 'hydrograff-gallery' &&
                        <div className="c-cmodal--gallery">
                            <ImageGallery lazyLoad={true} items={hydrograffImages} showFullscreenButton={false}/>
                        </div>
                    }
                    {props.type === 'tradecote-gallery' &&
                        <div className="c-cmodal--gallery">
                            <ImageGallery lazyLoad={true} items={tradecoteImages} showFullscreenButton={false}/>
                        </div>
                    }
                    {props.type === 'tradetherm-gallery' &&
                        <div className="c-cmodal--gallery">
                            <ImageGallery lazyLoad={true} items={tradethermImages} showFullscreenButton={false}/>
                        </div>
                    }
                    {props.type === 'hydrosec-gallery' &&
                        <div className="c-cmodal--gallery">
                            <ImageGallery lazyLoad={true} items={hydrosecImages} showFullscreenButton={false}/>
                        </div>
                    }
                    {props.type === 'workshops-gallery' &&
                        <div className="c-cmodal--gallery">
                            <ImageGallery lazyLoad={true} items={workshopsImages} showFullscreenButton={false}/>
                        </div>
                    }
                </div>
            </div>
            }
        </React.Fragment>
    );
}