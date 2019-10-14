import React from 'react'
import './index.css'
import CloudsComponent from "../CloudsComponent";
import SandComponent from "../SandComponent";
import GrassComponent from '../GrassComponent'



export default class FooterComponent extends React.Component {
    render() {
        return (
            <div className='footerWindow'>
                <div className="footerContainer">
                    <CloudsComponent />
                    <GrassComponent />
                    <SandComponent />
                    <nav className="footerNavigationPanel">
                        <ul>
                            <li><a href="#">КОЛЛЕКЦИЯ</a></li>
                            <li><a href="#">ПРИЛОЖЕНИЕ-ИГРА</a></li>
                            <li><a href="#">ТОВАРЫ-СПОНСОРЫ</a></li>
                            <li><a href="#">КАРТА МАГАЗИНОВ</a></li>
                            <li><a href="#">ИГРАЙ С ПРИЛИПАЛАМИ</a></li>
                            <li><a href="#">ОБМЕН ПРИЛИПАЛАМИ</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}