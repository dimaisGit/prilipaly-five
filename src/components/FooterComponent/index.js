import React from 'react'
import './index.css'
import CloudsComponent from "../CloudsComponent";
import SandComponent from "../SandComponent";
import GrassComponent from '../GrassComponent'
import apple from '../../images/apple-logo.png'
import googleP from '../../images/google-play.png'



export default class FooterComponent extends React.Component {
    render() {
        return (
            <div className='footerWindow bg-parallax'>
                
                <div className="footerContainer">
                    <CloudsComponent />
                    <GrassComponent />
                    <SandComponent />
                    <div className="footerData">
                        <div className="logoAll">
                            <div className="logo-d"></div>
                            <div className="logo-p"></div>
                        </div>
                        <nav className="footerNavigationPanel">
                            <ul>
                                <li><a href="#collection">КОЛЛЕКЦИЯ</a></li>
                                <li><a href="#video">ПРИЛОЖЕНИЕ-ИГРА</a></li>
                                <li><a href="#sp">ТОВАРЫ-СПОНСОРЫ</a></li>
                                <li><a href="#map">КАРТА МАГАЗИНОВ</a></li>
                                <li><a href="#game">ИГРАЙ С ПРИЛИПАЛАМИ</a></li>
                                <li><a href="#exchange">ОБМЕН ПРИЛИПАЛАМИ</a></li>
                            </ul>
                        </nav>
                        <div className="rulesAndLinks">
                            <div className='ruleData'>
                                <p className="rules">
                                    За каждые 500 рублей в чеке (без учета табачной
                                продукции (табак, табачные изделия и курительные
                                принадлежности, в том числе трубок, кальянов,
                                сигаретной бумаги, зажигалок)
                                продукции)
                                покупатель
                                приобрести игрушку за 1 копейку.
                                Акция проводится с 01.11.19 по 15.12.19 включительно.
                                Подробности проведения акции, о товарах-спонсорах,
                                информацию об организаторе акции, правила ее
                                проведения, сроки, адреса, порядок получения игрушек
                                можете узнать по телефону горячей линии: 8-800-333-
                                02-01 или на нашем <a href="https://dixy.ru/" target="_blank">сайте</a>. Акция может
                                            быть
                                            прекращена
                                            предусмотренных правилами. В период проведения
                                            акции не гарантируется наличие акционного товара в
                                            каждом магазине ДИКСИ.
                                </p>
                            </div>
                            <div className="socialLinks">
                                <a href="">Читать полные правила акции</a>
                                <a href="https://dixy.ru/" target="_blank">Dixy.ru</a>
                                <a href="tel:88003330201">8 800 333 02 01</a>
                                <div className="smmLinks">
                                    <a href="https://vk.com/dixyclub" target="_blank" className="social-icon vk"><i className="fab fa-vk"></i></a>
                                    <a href="https://www.facebook.com/Dixyclub" target="_blank" className="social-icon f"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://ok.ru/dixyclub" target="_blank" className="social-icon ok"><i className="fab fa-odnoklassniki"></i></a>
                                    <a href="https://www.youtube.com/user/DixyChannel" target="_blank" className="social-icon ytube"><i className="fab fa-youtube"></i></a>
                                    <a href="https://www.instagram.com/dixy.channel/" target="_blank" className="social-icon inst"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="GamingCenter">
                            <a className="linkToSocial appStore" href="https://apps.apple.com/us/app/%D0%BF%D1%80%D0%B8%D0%BB%D0%B8%D0%BF%D0%B0%D0%BB%D1%8B-5/id1483748691?l=ru&ls=1" target="_blank">
                                <img src={apple}></img>
                            </a>
                            <a className="linkToSocial goog-pl" href="https://play.google.com/store/apps/details?id=com.sadc.yaprilipay&hl=en_US" target="_blank">
                                <img src={googleP}></img>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}