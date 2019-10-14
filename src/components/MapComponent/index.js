import React from 'react'
import './index.css'

export default class MapComponent extends React.Component {
    render() {
        return (
            <div className='mapWindow'>
                <div className="mapContainer">
                    <div className="infoBlock shadowViolet back">
                        <span class="blueText">АДРЕСА</span> <span class="blueText">МАГАЗИНОВ «ДИКСИ»</span></div>
                    <div className="searchingFormMap shadowVioletOther">
                        <form>
                            <select name="city">
                                <option selected>Москва</option>
                                <option >Санкт-Петербург</option>
                            </select><label for="city"></label>
                            <select name="region">
                                <option selected disabled>Район</option>
                                <option >Одинцово</option>
                                <option >Лефортово</option>
                                <option >Балашиха</option>
                            </select> <label className="region" for="region"></label>
                            <input type="search" placeholder='Введите адрес' />
                            <input type="submit" className="btn" value="Найти"/>
                        </form>
                    </div>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab3862b8b5d93453ee7043567aa59f68252991240dd74d655349167e38be3b5a7&amp;source=constructor" width="100%" height="600px" frameborder="0" scroll="false"></iframe>
                </div>
            </div>
        )
    }
}