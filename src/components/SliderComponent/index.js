import React from 'react'
import './index.css'
import SliderRound from '../RoundedSlider'

export default class SliderComponent extends React.Component {
    render() {
        return (
            <div className='sliderWindow'>
                <div className="sliderContainer">
                    <div className="infoBlockContainer">
                        <div className="infoBlock shadowViolet">
                            СОБЕРИ ВСЮ КОЛЛЕКЦИЮ ПРИЛИПАЛ!
                    </div>
                        <div className="infoBlock red shadowRed">СОВЕРШИ ПОКУПКУ <span className="yellowText">ОТ 500 РУБЛЕЙ</span> И ЗАБЕРИ СВОЕГО ПРИЛИПАЛУ НА КАССЕ</div>
                    </div>
                    <SliderRound />
                </div>
            </div>
        )
    }
}