import React from 'react'
import './index.css'
import { data } from '../../data/shops'
import { cities } from "../../data/cities";
import pin from '../../images/pin.png'
import placemark from '../../images/placemark.png'
import { func } from 'prop-types';

export default class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRegion: 'Москва',
            searchValue: ''
        }
    }
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
                position: {
                    right: 50,
                    top: 50
                },
                size: 'large'
            }
        });
        this.myMap = new window.ymaps.Map('map',
            {
                center: [55.76, 37.64],
                zoom: 12.2,
                controls: [zoomControl]
            }
        );
        let objectManager = new window.ymaps.ObjectManager({
            clusterize: true,
            gridSize: 64,
            clusterDisableClickZoom: false
        });
        let MyIconContentLayout = window.ymaps.templateLayoutFactory.createClass(
            '<div style="color: #278DC5; font-weight:bold;width:46px;vertical-align:middle;line-height:46px;">$[properties.iconContent]</div>'
        );
        // Чтобы задать опции одиночным объектам и кластерам,
        // обратимся к дочерним коллекциям ObjectManager.
        objectManager.objects.options.set(
            {
                iconLayout: 'default#image',
                iconImageHref: placemark,
                iconImageSize: [36, 36]
            });
        objectManager.clusters.options.set({
            clusterIconLayout: 'default#imageWithContent',
            clusterIconImageHref: pin,
            clusterIconImageSize: [46, 46],
            clusterIconImageOffset: [-23, -23],
            clusterIconContentLayout: MyIconContentLayout,
            clusterHideIconOnBalloonOpen: false,
            clusterDisableClickZoom: false
        });

        this.myMap.geoObjects.add(objectManager);
        this.myMap.behaviors.disable('scrollZoom');
        let center;
        let getGeocode = new window.ymaps.geocode('Moscow', {
            results: 1
        }).then(function (res) {
            center = res.geoObjects.get(0).geometry.getCoordinates();

            this.myMap.setCenter(center);
        });
        let resultingObjects = data.map(async (item, index) => {
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
        });
    }

    onCityChange = (e) => {
        const { value } = e.target
        let currentCity = cities.filter(item => item.city === value)[0];
        this.setState({
            currentRegion: currentCity.region
        })
        this.myMap.setCenter(currentCity.coordinates);
    }
    handleSearch = (e) => {
        console.log(e.target.value)
        this.setState({
            searchValue: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        window.ymaps.geocode(this.state.searchValue, {
            results: 1
        }).then((res) => {
            let firstGeoObject = res.geoObjects.get(0),
                coords = firstGeoObject.geometry.getCoordinates();
            console.log(coords)
            this.myMap.setCenter(coords);
            this.myMap.setZoom(16)
        })
    }
    render() {
        return (
            <div className='mapWindow'>
                <div className="mapContainer">
                    <div id='map' style={{ width: '100%', height: '60vh' }}></div>
                    <div className="infoBlock shadowViolet back">
                        <span className="blueText">АДРЕСА</span> <span className="blueText">МАГАЗИНОВ «ДИКСИ»</span></div>
                    <div className="searchingFormMap shadowVioletOther">
                        <form>
                            <select name="city" onChange={(e) => { e.persist(); this.onCityChange(e) }}>
                                {cities.map(item => <option key={item.city}>{item.city}</option>)}
                            </select><label htmlFor="city"></label>
                            <select name="region">
                                <option>{this.state.currentRegion}</option>

                            </select> <label className="region" htmlFor="region"></label>
                            <input type="search" placeholder='Введите адрес' onChange={(e) => { this.handleSearch(e) }} />
                            <input type="submit" className="btn" value="Найти" onClick={this.handleSubmit} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}