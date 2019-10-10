import React from 'react'
import './index.css'

export default class MapComponent extends React.Component {
    render() {
        return (
            <div className='mapWindow'>
                <div className="mapContainer"></div>
            </div>
        )
    }
}