import React from 'react'
import './index.css'
import {parallax} from '../../scripts/parallax'
import CloudsComponent from "../CloudsComponent";
import SandComponent from "../SandComponent";

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
                    <div className="grassContainer">
                        <div className="grass grass-1">
                            <div className="grass-1-1"></div>
                            <div className="grass-1-2"></div>
                        </div>
                        <div className="grass grass-2">
                            <div className="grass-2-1"></div>
                            <div className="grass-2-2"></div>
                        </div>
                        <div className="grass grass-3">
                            <div className="grass-3-1"></div>
                            <div className="grass-3-2"></div>
                        </div>
                        <div className="grass grass-4"></div>
                    </div>
                    <SandComponent />
                </div>
            </div>
        )
    }
  
}