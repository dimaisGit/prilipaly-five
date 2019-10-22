import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Info from '../../images/info-icon.svg'
import InfoActive from '../../images/info-icon-active.svg'

import { gooods } from "../../constants/goods";

import './index.css'

export default class ProdCarousel extends React.Component {
    constructor(props){
        super(props)
        this.state={
            active: true,
            goods: gooods,
            currentGood: 0,
            goodsPerSlide: 5
        }
    }
    handleClick = (itemIndex) => {
        let goods = this.state.goods
        goods[itemIndex].isDescActive = !goods[itemIndex].isDescActive
        this.setState({
            goods: goods
        })
    }

    componentDidMount() {
        const { breakpoint } = this.slider.state
        const { slidesToShow } = this.slider.props.responsive.filter((item) => item.breakpoint === breakpoint)[0].settings
        this.setState({
            goodsPerSlide: slidesToShow
        });
        document.getElementsByClassName('currentGoodPage')[0].style.opacity = 0;
        setTimeout(function(){
            console.log('loaded')
        document.getElementsByClassName('currentGoodPage')[0].style.opacity = 1;
        }, 20000)        
    }

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            lazyLoad: 'progressive',
            onLazyLoad: () => {
                
            },
            slidesToShow: 5,
            slidesToScroll: 5,
            swipeToSlide: false,
            adaptiveHeight: false,
            afterChange: index => {
                this.setState({
                    currentGood: index
                })
                // console.log(this.state.currentGood)
            },
            beforeChange: () => {
                this.state.goodsPerSlide = 5
            },
            responsive: [
                {
                    breakpoint: 4500,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        beforeChange: () => {
                            this.state.goodsPerSlide = 5
                        }
                    }
                },
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        beforeChange: () => {
                            this.state.goodsPerSlide = 4
                        }
                    }
                },
                {
                    breakpoint: 1450,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        beforeChange: () => {
                            this.state.goodsPerSlide = 3
                        }
                    }
                }
            ]
        };
        const {active, goods} = this.state
        const filteredGoods = goods.filter(item => item.class === this.props.filter)
        
        return (
            <>
                <Slider {...settings} ref={ref => this.slider = ref}>
                    {filteredGoods.map((item, index) => (
                        <div className='item class-1' key={index}>
                            <div className='item-img'>
                            <img src={process.env.PUBLIC_URL + '/products' + item.img} />
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
                        </div>
                    ))}
                </Slider>
                <div className='currentGoodPage'>
                    {(this.state.currentGood / this.state.goodsPerSlide) + 1} из {Math.ceil(filteredGoods.length / this.state.goodsPerSlide)}
                </div>
            </>
        );
    }
}