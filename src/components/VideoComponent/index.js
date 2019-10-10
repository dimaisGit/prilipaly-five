import React from 'react'
import './index.css'
import phone from '../../images/mobile-phone.png'
import apple from '../../images/apple-logo.png'
import googleP from '../../images/google-play.png'
import rapsberry from '../../images/raspberry1-noacod.png'
import ufo from '../../images/ufo3_7.png'
import ufoN from '../../images/ufo3_5.png'

import melon from '../../images/yellowmelon.png'


export default class VideoComponent extends React.Component {
    render() {
        return (
            <div className='videoWindow'>
                <div className="videoContainer">
                    <div className="contentBlocks">
                        <div className="toysAndSocial">
                            <div className="toys-1">
                                <div className="toys-1-1">
                                    <img src={ufo}></img>
                                </div>
                                <div className="toys-1-2">
                                    <img src={rapsberry}></img>
                                </div>
                            </div>
                            <div className="socialContainerData">
                                <div className="infoBlock shadowYellow">
                                    <span class="blueText">ПРИЛИПАЛЫ В ДОПОЛНЕННОЙ РЕАЛЬНОСТИ!</span>
                                </div>
                                <div className="socialBlock">
                                    <a className="linkToSocial">
                                        <img src={apple}></img>
                                    </a>
                                    <a className="linkToSocial">
                                        <img src={googleP}></img>
                                    </a>
                                </div>
                            </div>

                            <div className="toys-2">
                                <div className="toys-2-1">
                                    <img src={ufoN}></img>
                                </div>
                                <div className="toys-2-2">
                                    <img src={melon}></img>
                                </div>
                            </div>
                        </div>
                        <div className="videoPhone">
                            <div className="phoneContainer">
                                <img src={phone}></img>
                            </div>
                        </div>
                        <div className="toysAndInfoBlock"></div>
                    </div>
                </div>
            </div>
        )
    }
}