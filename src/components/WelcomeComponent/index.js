import React from 'react'
import './index.css'
import {parallax} from '../../scripts/parallax'
import CloudsComponent from "../CloudsComponent";
import SandComponent from "../SandComponent";
import GrassComponent from '../GrassComponent'



export default class WelcomeComponent extends React.Component {
    componentDidMount(){
        parallax()
    }
    render() {
        return (
            <div className='welcomeWindow Background-bot'>
                <div className="bg-bot"></div>
                <div className="welcomeContent">
                <CloudsComponent />
                <GrassComponent />
                <SandComponent />
                </div>
            </div>
        )
    }
}