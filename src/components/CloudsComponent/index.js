import React from 'react'
import './index.css'
import { cloudsRunning } from '../../scripts/clouds.js'



export default class CloudsComponent extends React.Component {
    componentDidMount(){
        cloudsRunning();
    }
    
    render() {
        return (
            <div className="cloudsContainer">
                <canvas className="clouds-canvas"></canvas>
            </div>
        )
    }

}