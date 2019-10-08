import React from 'react'
import './index.css'

export default class CloudsComponent extends React.Component {
    render() {
        return (
            <div className="cloudsContainer">
                <div className="cloud parallax cloud-1" data-speed="20"></div>
                <div className="cloud parallax cloud-2" data-speed="10"></div>
            </div>
        )
    }
}