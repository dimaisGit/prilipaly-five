import React from 'react'
import './index.css'
import { cloudsRunning } from '../../scripts/clouds.js'

export default class CloudsComponent extends React.Component {
    componentDidMount(){
        cloudsRunning()
    }
    render() {
        return (
            <div className="cloudsContainer " id="clouds-container">
                <canvas id="clouds-canvas"></canvas>
                <canvas id="clouds-canvas-2"></canvas>
            </div>
        )
    }
}