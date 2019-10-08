import React from 'react'
import './index.css'
import {parallax} from '../../scripts/parallax'
import CloudsComponent from "../CloudsComponent";
import SandComponent from "../SandComponent";
import GrassComponent from '../GrassComponent'

export default class StartComponent extends React.Component {
    componentDidMount(){
        parallax()
    }
    render() {
        const { handleCloseWindow } = this.props
        return(
            <div className='startWindow'>
                <div className="logoContainer">
                    <div className="logo-d bounceInDown"></div>
                    <div className="logo-p bounceInDown"></div>
                </div>
                <h2>C 1 ноября по 15 декабря во всех магазинах Дикси</h2>
                <div className='startWindowClose' onClick={handleCloseWindow}>
                   ПОЧУДИМ?
                </div>
                <div className="Background-bot">
                    <CloudsComponent />
                    <GrassComponent />
                    <SandComponent />
                </div>
            </div>
        )
    }
  
}