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
            <div className='footerWindow'>
                
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
                            <a className="linkToSocial appStore" href="" target="_blank">
                                <img src={apple}></img>
                            </a>
                            <a className="linkToSocial goog-pl" href="" target="_blank">
                                <img src={googleP}></img>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}