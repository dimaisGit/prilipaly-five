import React from 'react'
import './index.css'
import { parallax } from '../../scripts/parallax'
import CloudsComponent from "../CloudsComponent";
import SandComponent from "../SandComponent";
import GrassComponent from '../GrassComponent'
import WelcomeTextData from '../WelcomeTextData'
import Prilipaly from '../Prilipaly'


export default class WelcomeComponent extends React.Component {
    componentDidMount() {
        parallax()
    }
    render() {
        return (
            <div className='welcomeWindow Background-bot'>
                <div className="bg-bot"></div>
                <div className="welcomeContent ">
                    <WelcomeTextData />
                    <CloudsComponent />
                    <GrassComponent />
                    <SandComponent />
                    <Prilipaly />
                    <div className="planes appear">
                        <div className="plane "></div>
                        <div className="plane plane-2"></div>
                        <div className="plane plane-3"></div>
                    </div>
                </div>
            </div>
        )
    }
}