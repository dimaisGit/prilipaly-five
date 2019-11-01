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
                    <div className="logo-p appear">
                    <a className='startWindowClose main-logo appear' href="#collection">
                        ПОЧУДИМ?
                    </a>
                    </div>
                    <p className="greetingText">C 1 НОЯБРЯ ПО 15 ДЕКАБРЯ</p>
                   
                </div>
                <div className="yellow">
                    <img src={yellow}></img>
                    <div className="infoBlock red shadowRed leftPos">ПОЛУЧИ ВЕСЕЛОГО ПРИЛИПАЛУ ЗА КАЖДЫЕ <span className="yellowText">500 РУБЛЕЙ</span> В ЧЕКЕ</div>
                </div>
                <div className="blueSec">
                    <img src={blueSec}></img>
                    <div className="infoBlock shadowViolet">
                        <span className="blueText">СКАЧАЙ ИГРУ</span> <span className="violetText">И ВЫИГРЫВАЙ ПРИЗЫ</span>
                    </div>
                    <div className="socialBlock">
                    <a className="linkToSocial" href="https://apps.apple.com/us/app/%D0%BF%D1%80%D0%B8%D0%BB%D0%B8%D0%BF%D0%B0%D0%BB%D1%8B-5/id1483748691?l=ru&ls=1" target="_blank">
                        <img src={apple}></img>
                    </a>
                    <a className="linkToSocial" href="https://play.google.com/store/apps/details?id=com.sadc.yaprilipay&hl=en_US" target="_blank">
                        <img src={googleP}></img>
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}