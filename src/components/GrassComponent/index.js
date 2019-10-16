import React from 'react'
import './index.css'

export default class GrassComponent extends React.Component {
    render() {
        return (
            <div className="grassContainer">
                <div className="grass grass-1">
                    <div className="grass-1-1"></div>
                    <div className="grass-1-2"></div>
                </div>
                <div className="grass grass-2 ">
                    <div className="grass-2-1"></div>
                    <div className="grass-2-2"></div>
                </div>
                <div className="grass grass-3">
                    <div className="grass-3-1"></div>
                    <div className="grass-3-2"></div>
                </div>
                <div className="grass grass-4"></div>
            </div>
        )
    }
}