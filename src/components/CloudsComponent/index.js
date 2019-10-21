import React from 'react'
import './index.css'
import { cloudsRunning } from '../../scripts/clouds.js'

// function rect (props) {
//     const {ctx, x, y, width, height } = props;
//     ctx.fillRect(x, y, width, height);
// }


export default class CloudsComponent extends React.Component {
    componentDidMount(){
        cloudsRunning();
    }
    componentDidUpdate(){
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