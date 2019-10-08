import React from 'react'
import './index.css'
import {parallax} from '../../scripts/parallax'
import CloudsComponent from "../CloudsComponent";
import SandComponent from "../SandComponent";


export default class WelcomeComponent extends React.Component {
    render() {
        return (
            <div className='welcomeWindow'>
                <div className="bg-bot"></div>
                <div className="welcomeContent">
                <CloudsComponent />
                <SandComponent />
                </div>
            </div>
        )
    }
}