import React from 'react'
import './index.css'
import phone from '../../images/mobile-phone.png'

export default class VideoComponent extends React.Component {
    render() {
        return (
            <div className='videoWindow'>
                <div className="videoContainer">
                    <div className="contentBlocks">
                        <div className="toysAndSocial"></div>
                        <div className="videoPhone">
                            <div className="phoneContainer">
                                <img src={phone}></img>
                            </div>
                        </div>
                        <div className="toysAndInfoBlock"></div>
                    </div>
                </div>
            </div>
        )
    }
}