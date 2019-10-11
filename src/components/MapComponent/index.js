import React from 'react'
import './index.css'

export default class MapComponent extends React.Component {
    render() {
        return (
            <div className='mapWindow'>
                <div className="mapContainer">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab3862b8b5d93453ee7043567aa59f68252991240dd74d655349167e38be3b5a7&amp;source=constructor" width="100%" height="600px" frameborder="0"></iframe>
                </div>
            </div>
        )
    }
}