import React from 'react'
import './index.css'
import girl from '../../images/girl.png'

export default class GrassComponent extends React.Component {
    render() {
        return (
            <div className="welcomeDataContainer">
                
                <div className="logoContainerWelcome ">
                <div className="logo-d min"></div>
                    <div className="logo-p ">
                    </div>
                    <div className='startWindowClose main-logo shadowViolet' >
                        ПОЧУДИМ?
                    </div>
                </div>
                <div className="girl">
                    <img src={girl}></img>
                </div>
            </div>
        )
    }
}