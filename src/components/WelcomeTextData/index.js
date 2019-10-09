import React from 'react'
import './index.css'
import girl from '../../images/girl.png'
import blueSec from '../../images/blue-2.png'
import yellow from '../../images/yellow.png'
import apple from '../../images/apple-logo.png'
import googleP from '../../images/google-play.png'


export default class GrassComponent extends React.Component {
    render() {
        return (
            <div className="welcomeDataContainer">
                <div className="logoContainerWelcome ">
                    <div className="logo-d min"></div>
                    <div className="logo-p ">
                    </div>
                    <p>C 1 НОЯБРЯ ПО 15 ДЕКАБРЯ</p>
                    <div className='startWindowClose main-logo shadowViolet' >
                        ПОЧУДИМ?
                    </div>
                </div>
                <div className="yellow">
                    <img src={yellow}></img>
                    <div className="infoBlock red shadowRed leftPos">СОВЕРШИ ПОКУПКУ <span className="yellowText">ОТ 500 РУБЛЕЙ</span> И ЗАБЕРИ СВОЕГО ПРИЛИПАЛУ НА КАССЕ</div>
                </div>
                <div className="blueSec">
                    <img src={blueSec}></img>
                    <div className="infoBlock shadowViolet">
                        <span className="blueText">СКАЧАЙ ИГРУ</span> <span className="violetText">И ВЫИГРЫВАЙ ПРИЗЫ</span>
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
                <div className="girl">
                    <img src={girl}></img>
                </div>
            </div>
        )
    }
}