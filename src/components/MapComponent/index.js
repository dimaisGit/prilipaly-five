import React from 'react'
import './index.css'
import {data} from '../../data/shops'

export default class MapComponent extends React.Component {
    componentDidMount() {
        window.ymaps.ready(init);

        function init() {
            let myMap = new window.ymaps.Map('map', {
                    center: [55.76, 37.64],
                    zoom: 10
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                objectManager = new window.ymaps.ObjectManager({
                    // Чтобы метки начали кластеризоваться, выставляем опцию.
                    clusterize: true,
                    // ObjectManager принимает те же опции, что и кластеризатор.
                    gridSize: 64,
                    clusterDisableClickZoom: true
                });

            // Чтобы задать опции одиночным объектам и кластерам,
            // обратимся к дочерним коллекциям ObjectManager.
            objectManager.objects.options.set('iconColor', '#111111');
            objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
            myMap.geoObjects.add(objectManager);

            let center;
            let getGeocode = new window.ymaps.geocode('Moscow', {
                results: 1
            }).then(function (res) {
                center = res.geoObjects.get(0).geometry.getCoordinates();
                console.log(center)
                myMap.setCenter(center);
            });
            // fetch('https://d.mywfc.ru/local/ajax/components/dixy_shop_points.php')
            //     .then(response => response.json())
            //     .then(resJson => console.log(resJson));
            objectManager.add(data);
        }
    }

    render() {
        return (
            <div className='mapWindow'>
                <div className="mapContainer">
                    <div id='map' style={{ width: '100%', height: '600px', position: 'absolute', top: 0}}></div>
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
                </div>
            </div>
        )
    }
}