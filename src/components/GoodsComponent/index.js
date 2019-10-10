import React from 'react'
// import SelectPage from '../../scripts/SelectPage'
import './index.css'

export default class GoodsComponent extends React.Component {
    render() {
        return (
            <div className='goodsWindow'>
                <div className="goodsContainer">
                    <div className="sponsorsDescription">
                        <div class="sponsorsInfo">
                            <h4 class="header smaller lined">ТОВАРЫ-СПОНСОРЫ</h4>
                            <p class="text-data">Лакомка никогда не упустит шанс съесть чего-нибудь вкусненького. Особенно, если за это можно получить еще больше Прилипал! </p>
                            <div className="formSearch">
                                <form>
                                    <p>
                                    <label for="region" className="light">Ваш регион:</label>
                                    <select id="region" name="region">
                                        <option>ЦФО</option>
                                        <option>СЗФО</option>
                                        <option>УФО</option>
                                    </select>
                                    <label for=""></label>
                                    <select className="sponsorsClass">
                                        <option selected>1 ТОВАР = 1 ПРИЛИПАЛА</option>
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

                    </div>
                </div>
                <div className="wavingBg">
                </div>
            </div>
        )
    }
}