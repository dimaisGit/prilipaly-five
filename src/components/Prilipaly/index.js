import React from 'react'
import './index.css'
import piggy from '../../images/hearted-pig.png'


export default class GrassComponent extends React.Component {
    render() {
        return (
            <div className="prilipalyContainer">
                <div className="heart-box">
                    <div className="heart animate-topright"></div>
                    <div className="heart animate-topright"></div>
                    <div className="heart animate-topleft"></div>
                    <div className="heart animate-topright"></div>
                    <div className="heart animate-up"></div>
                    <div className="heart animate-topright"></div>
                    <div className="heart animate-topleft"></div>
                    <div className="heart animate-up"></div>
                </div>
                <div className="piggy">
                    <img src={piggy}></img>
                </div>
            </div>
        )
    }
}