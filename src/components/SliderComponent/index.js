import React from 'react'
import './index.css'
import SliderRound from '../RoundedSlider'

export default class SliderComponent extends React.Component {
    render() {
        return (
            <div className='sliderWindow' id="collection">
                <div className="sliderContainer">
                    <div className="infoBlockContainer">
                        <div className="infoBlock shadowViolet">
                            СОБЕРИ ВСЮ КОЛЛЕКЦИЮ ПРИЛИПАЛ!
                    </div>
                        <div className="infoBlock red shadowRed"><span className="yellowText">ЧТО ТЫ ЧУВСТВУЕШЬ СЕГОДНЯ?</span><p>ХОЧЕТСЯ ЧЕГО-НИБУДЬ ВКУСНЕНЬКОГО, ПОШАЛИТЬ ИЛИ, НАОБОРОТ,
                            ПОЛЕНИТЬСЯ? ПРИЛИПАЛЫ ОЧЕНЬ ХОРОШО ТЕБЯ ПОНИМАЮТ. УЗНАЙ, ЧТО ЕЩЕ У ВАС ОБЩЕГО?</p> </div>
                    </div>
                    <SliderRound />
                </div>
            </div>
        )
    }
}