import React from 'react'
import './index.css'
import {data} from '../../data/shops'
import { cities } from "../../data/cities";

export default class MapComponent extends React.Component {
    componentDidMount = () => {
        window.ymaps.ready(this.setInit);
    }

    setInit = () => {
        setTimeout(this.init, 7000)
    }

    sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    init = async () => {
        let zoomControl = new window.ymaps.control.ZoomControl({
            options: {
                float: 'right'
            }
        })
        this.myMap = new window.ymaps.Map('map', {
                center: [55.76, 37.64],
                zoom: 10,
                controls: [zoomControl]
            },
            {
                zoomControlFloat: 'right'
            }
        )
        let objectManager = new window.ymaps.ObjectManager({
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
        this.myMap.geoObjects.add(objectManager);

        let center;
        let getGeocode = new window.ymaps.geocode('Moscow', {
            results: 1
        }).then(function (res) {
            center = res.geoObjects.get(0).geometry.getCoordinates();
            console.log(center)
            this.myMap.setCenter(center);
        });
        let resultingObjects = data.map( async (item, index) => {
            return {
                type: 'Feature',
                id: index,
                geometry: {
                    type: 'Point',
                    coordinates: [item[0], item[1]]
                }
            }
        })
        let resultingData
        Promise.all(resultingObjects).then((completed) => {
            resultingData = {
                "type": "FeatureCollection",
                "features": completed
            }
            objectManager.add(resultingData);
            console.log(resultingData)
        });
    }

    onCityChange = (e) => {
        const { value } = e.target
        console.log(value);
        let currentCity = cities.filter(item => item.city === value)[0];
        console.log(currentCity)
        this.myMap.setCenter(currentCity.coordinates);
    }

    render() {
        return (
            <div className='mapWindow'>
                <div className="mapContainer">
                    <div id='map' style={{ width: '100%', height: '60vh'}}></div>
                    <div className="infoBlock shadowViolet back">
                        <span class="blueText">АДРЕСА</span> <span class="blueText">МАГАЗИНОВ «ДИКСИ»</span></div>
                    <div className="searchingFormMap shadowVioletOther">
                        <form>
                            <select name="city" onChange={(e) => { e.persist(); this.onCityChange(e)}}>
                                {cities.map(item => <option>{item.city}</option>)}
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