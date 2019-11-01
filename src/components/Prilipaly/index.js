import React from 'react'
import './index.css'
import piggy from '../../images/hearted-pig.png'
import blue from '../../images/blue-lil.png'
import orange from '../../images/prilipaly/12.png'
import green from '../../images/green.png'



export default class GrassComponent extends React.Component {
    render() {
        return (
            <div className="prilipalyContainer">
                <div className="leftItems">
                    <div className="heart-box parallax">
                        <div className="heart animate-topright"></div>
                        <div className="heart animate-topright top-2"></div>
                        <div className="heart animate-topleft"></div>
                        <div className="heart animate-topright top-1"></div>
                        <div className="heart animate-up"></div>
                        <div className="heart animate-topright"></div>
                        <div className="heart animate-topleft top-2"></div>
                        <div className="heart animate-up"></div>
                    </div>
                    <div className="piggy parallax">
                        <img src={piggy}></img>
                    </div>
                </div>

            </div>
        )
    }
}