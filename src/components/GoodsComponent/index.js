import React from 'react'
// import SelectPage from '../../scripts/SelectPage'
import './index.css'
import ProdCarousel from '../ProdCarousel'
import $ from 'jquery'
// import triangle from '../../images/triangle.png'


export default class GoodsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectValue: '1 товар=1 игрушка'
        }
    }
    componentDidMount() {
        $('select').on('focus', function () {
            $(this).addClass('arrowed');
            $(this).on('change', function () {
                $(this).removeClass('arrowed');
            })
        });
        $('select').on('blur', function () {
            $(this).removeClass('arrowed');
        });
    }

    onPrilipalaSelectChange = (e) => {
        console.log(e.target.value)
        this.setState({
            selectValue: e.target.value
        })
    }

    render() {
        return (
            <div className='goodsWindow' id="sp">
                <div className="goodsContainer">
                    <div className="spDescription">
                        <div className="spInfo">
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
                                        <select className="spClass" onChange={(e) => { e.persist(); this.onPrilipalaSelectChange(e) }}>
                                            <option>1 товар=1 игрушка</option>
                                            <option>2 товара=1 игрушка</option>
                                            <option>1 товар=2 игрушки</option>
                                            <option>4 товара=1 игрушка</option>
                                        </select>
                                    </p>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="spCarousel">
                        <ProdCarousel filter={this.state.selectValue} />
                    </div>
                </div>
                <div className="wavingBg">
                </div>
            </div>
        )
    }
}