import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Prod from '../../images/prod-1.png'
import Info from '../../images/info-icon.svg'
import InfoActive from '../../images/info-icon-active.svg'

import './index.css'

export default class ProdCarousel extends React.Component {
    constructor(props){
        super(props)
        this.state={
            active: true
        }
    }
    handleClick = () => {
        this.setState({
            active: !this.state.active
        })
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };
        const {active} = this.state
        return (
            <Slider {...settings}>
                <div className="item class-1">
                    <div className="item-img">
                        <img src={Prod}></img>
                    </div>
                    <div className="item-info">
                        <div className="item-info-icon"  onClick={this.handleClick}>
                            {this.state.active ? <img src={InfoActive}></img> : <img src={Info}></img>}
                        </div>
                        <div className="item-info-data active">
                            <p>Чипсы лейс из печи. Ароматный укроп 85 г., чипсы лейс из печи Лисички в сметане 85 г., чипсы Лейс из печи Нежный сыр 85 г.Чипсы лейс из печи. Ароматный укроп 85 г., чипсы лейс из печи Лисички в сметане 85 г., чипсы Лейс из печи Нежный сыр 85 г.</p>
                        </div>
                    </div>
                    <div className="itemFullName">
                        <p>Круассаны Мини «Amelite» с кремом</p>
                    </div>
                    <div className="itemPrice"><p>от 77 руб. </p></div>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
            </Slider>
        );
    }
}