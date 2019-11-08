import React from 'react'
import './index.css'
import phone from '../../images/mobile-phone.png'
import apple from '../../images/apple-logo.png'
import googleP from '../../images/google-play.png'
import rapsberry from '../../images/raspberry1-noacod.png'
import ufo from '../../images/ufo3_7.png'
import ufoN from '../../images/ufo3_5.png'
import ufoL from '../../images/ufo3_3.png'
import grAndBl from '../../images/blueAndGr.png'
import banana from '../../images/pigAndBanana.png'
import tomato from '../../images/tomat1.png'
import melon from '../../images/yellowmelon.png'


export default class VideoComponent extends React.Component {
    render() {
        return (
            <div className='videoWindow bg-parallax' id="video">
                <div className="videoContainer">
                    <div className="contentBlocks ">
                        <div className="toysAndSocial ">
                            <div className="toys-1">
                                <div className="toys-1-1">
                                    <img alt="img" src={ufo}></img>
                                </div>
                                <div className="toys-1-2">
                                    <img alt="img" src={rapsberry}></img>
                                </div>
                            </div>
                            <div className="socialContainerData">
                                <div className="infoBlock shadowYellow back">
                                    <span className="blueText">ПРИЛИПАЛЫ В ДОПОЛНЕННОЙ РЕАЛЬНОСТИ!</span>
                                </div>
                                <div className="socialBlock">
                                    <a className="linkToSocial" href="https://apps.apple.com/us/app/%D0%BF%D1%80%D0%B8%D0%BB%D0%B8%D0%BF%D0%B0%D0%BB%D1%8B-5/id1483748691?l=ru&ls=1" target="_blank">
                                        <img alt="img" src={apple}></img>
                                    </a>
                                    <a className="linkToSocial" href="https://play.google.com/store/apps/details?id=com.sadc.yaprilipay&hl=en_US" target="_blank">
                                        <img alt="img" src={googleP}></img>
                                    </a>
                                </div>
                            </div>

                            <div className="toys-2">
                                <div className="toys-2-1 parallax-3">
                                    <img alt="img" src={ufoN}></img>
                                </div>
                                <div className="toys-2-2 parallax">
                                    <img alt="img" src={melon}></img>
                                </div>
                            </div>
                        </div>
                        <div className="videoPhone">
                            <div className="phoneContainer">
                            <iframe src="https://www.youtube.com/embed/WebVTFHKMRU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <img alt="img" src={phone}></img>
                            </div>
                        </div>
                        <div className="toysAndInfoBlock">
                            <div  className="toys-3-1 parallax">
                                <img alt="img" src={grAndBl}></img>
                            </div>
                            <div  className="toys-3-2">
                                <img alt="img" src={ufoL}></img>
                            </div>
                            <div  className="infoBlock shadowYellow lastInfoB">
                            <span className="blueText">ИГРАЙ, НАБИРАЙ БОЛЬШЕ ВСЕХ ОЧКОВ И ВЫИГРЫВАЙ ПРИЗЫ!</span>
                            </div>
                            <div  className="toys-3-3 parallax">
                                <img alt="img" src={tomato}></img>
                            </div>
                            <div  className="toys-3-4">
                                <img alt="img" src={banana}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}