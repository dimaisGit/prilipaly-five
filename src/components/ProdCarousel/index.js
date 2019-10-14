import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Prod from '../../images/prod-1.png'
import Prod2 from '../../images/prod-2.png'
import Prod3 from '../../images/prod-3.png'
import Prod4 from '../../images/prod-4.png'
import Prod5 from '../../images/prod-p.png'

import Info from '../../images/info-icon.svg'
import InfoActive from '../../images/info-icon-active.svg'

import { gooods } from "../../constants/goods";

import './index.css'

export default class ProdCarousel extends React.Component {
    constructor(props){
        super(props)
        this.state={
            active: true,
            goods: gooods
        }
    }
    handleClick = (itemIndex) => {
        let goods = this.state.goods
        goods[itemIndex].isDescActive = !goods[itemIndex].isDescActive
        this.setState({
            goods: goods
        })
    }
    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            adaptiveHeight: true
        };
        const {active, goods} = this.state
        return (
            <Slider {...settings}>
                {goods.map((item, index) => (
                    <div className='item class-1'>
                        <div className='item-img'>
                            <img src={item.img} />
                        </div>
                        <div className='item-info'>
                            <div className='item-info-icon' onClick={() => this.handleClick(index)}>
                                {item.isDescActive ? <img src={InfoActive} /> : <img src={Info} />}
                            </div>
                            <div className={item.isDescActive ? 'item-info-data active' : 'item-info-data'}>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <div className='itemFullName'>
                            <p>{item.name}</p>
                        </div>
                        <div className="itemPrice">
                            <p>от {item.price} руб. </p>
                        </div>
                    </div>
                ))}

            </Slider>
        );
    }
}