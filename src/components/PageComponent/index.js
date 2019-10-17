import React from 'react'
import './index.css'
import './mobile.css'
import WelcomeComponent from "../WelcomeComponent";
import SliderComponent from "../SliderComponent";
import VideoComponent from "../VideoComponent";
import GoodsComponent from "../GoodsComponent";
import MapComponent from "../MapComponent";
import GamesComponent from "../GamesComponent";
import FooterComponent from "../FooterComponent";

export default class PageComponent extends React.Component {
    render() {
        return (
            <div className="main-container">
                <WelcomeComponent />
                <SliderComponent />
                <VideoComponent />
                <GoodsComponent />
                {/*<MapComponent />*/}
                <GamesComponent />
                <FooterComponent />
            </div>
        )
    }
}