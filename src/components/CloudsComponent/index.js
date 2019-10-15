import React from 'react'
import './index.css'

export default class CloudsComponent extends React.Component {
    render() {
        return (
            <div className="cloudsContainer">
                <div className="cloud cloud-1" ></div>
                <div className="cloud cloud-2"></div>
            </div>
        )
    }
}