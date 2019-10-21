import React from 'react'
import './index.css'

export default class SandComponent extends React.Component {
    render() {
        return (
            <div className="sandContainer">
                <div className="sand parallax sand-1"  data-speed="20"></div>
                <div className="sand parallax-2 sand-2"  data-speed="10"></div>
                <div className="sand parallax-2 sand-3"  data-speed="15"></div>
            </div>
        )
    }
}