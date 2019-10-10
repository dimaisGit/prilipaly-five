import React from 'react'
import './index.css'
import phone from '../../images/mobile-phone.png'
import apple from '../../images/apple-logo.png'
import googleP from '../../images/google-play.png'

export default class VideoComponent extends React.Component {
    render() {
        return (
            <div className='videoWindow'>
                <div className="videoContainer">
                    <div className="contentBlocks">
                        <div className="toysAndSocial">
                            <div className=""></div>
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

                            <div className=""></div>
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