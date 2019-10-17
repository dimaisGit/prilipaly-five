import React from 'react'
// import SelectPage from '../../scripts/SelectPage'
import './index.css'
import ProdCarousel from '../ProdCarousel'
import $ from 'jquery'
// import triangle from '../../images/triangle.png'


export default class GoodsComponent extends React.Component {
    componentDidMount(){
        $('.sponsorsClass').addClass('arrowed')
        $('#region').addClass('arrowed')
    }
    
    render() {
        return (
            <div className='goodsWindow' id="sponsors">
                <div className="goodsContainer">
                    <div className="sponsorsDescription">
                        <div className="sponsorsInfo">
                            <h4 className="header smaller lined">ТОВАРЫ-СПОНСОРЫ</h4>
                            <p className="text-data">Пора подкрепиться! Лакомка никогда не упустит шанс съесть чего-нибудь вкусненького. Особенно, если за это можно получить еще больше Прилипал!</p>
                            <div className="formSearch">
                                <form>
                                    <p>
                                    <label htmlFor="region" className="light">Ваш регион:</label>
                                    <select id="region" name="region">
                                        <option>ЦФО</option>
                                        <option>СЗФО</option>
                                        <option>УФО</option>
                                    </select>
                                    <label htmlFor=""></label>
                                    <select className="sponsorsClass">
                                        <option>1 ТОВАР = 1 ПРИЛИПАЛА</option>
                                        <option>2 ТОВАРА = 1 ПРИЛИПАЛА</option>
                                        <option>1 ТОВАР = 2 ПРИЛИПАЛЫ</option>
                                        <option>2 ТОВАРА = 2 ПРИЛИПАЛЫ</option>
                                    </select>
                                    </p>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="sponsorsCarousel">
                        <ProdCarousel />
                    </div>
                </div>
                <div className="wavingBg">
                </div>
            </div>
        )
    }
}