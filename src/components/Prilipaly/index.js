import React from 'react'
import './index.css'
import piggy from '../../images/hearted-pig.png'
import blue from '../../images/blue-lil.png'
import orange from '../../images/orange.png'
import green from '../../images/green.png'



export default class GrassComponent extends React.Component {
    render() {
        return (
            <div className="prilipalyContainer">
                <div className="heart-box">
                    <div className="heart animate-topright"></div>
                    <div className="heart animate-topright top-2"></div>
                    <div className="heart animate-topleft"></div>
                    <div className="heart animate-topright top-1"></div>
                    <div className="heart animate-up"></div>
                    <div className="heart animate-topright"></div>
                    <div className="heart animate-topleft top-2"></div>
                    <div className="heart animate-up"></div>
                </div>
                <div className="piggy">
                    <img src={piggy}></img>
                </div>

                <div className="blue">
                    <img src={blue}></img>
                </div>
                <div className="orange">
                    <img src={orange}></img>
                </div>
                <div className="green">
                    <img src={green}></img>
                </div>
            </div>
        )
    }
}