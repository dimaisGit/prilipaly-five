import React from 'react'
import './index.css'
import { slider } from '../../scripts/slider'

import blue2 from '../../images/blue-2.png'
import green from '../../images/green.png'
import blueLil from '../../images/blue-lil.png'
import greenPlaksa from '../../images/greenPlaksa.png'
import heartedPig from '../../images/hearted-pig.png'
import orange from '../../images/orange.png'
import yellow from '../../images/yellow.png'
import redFinger from '../../images/красный-перчатка.png'
import redCap from '../../images/красный-с-чашкой.png'
import pinky from '../../images/розовое-насекомое.png'
import pinkyPretty from '../../images/розовый-мякиш.png'
import fox from '../../images/рыжий-хитрюн.png'
import blueFlash from '../../images/синий-молния.png'
import blueFat from '../../images/синий-толстый.png'
import violet from '../../images/фиолетовый-трекгльник.png'



export default class SliderRound extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isNeedAnimated: false,
            prilipalaInfo: [
                {
                    numberId: 0,
                    name: 'name0',
                    infoData: 'Some description #0 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 1,
                    name: 'name1',
                    infoData: 'Some description #1 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 2,
                    name: 'name2',
                    infoData: 'Some description #2 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 3,
                    name: 'name3',
                    infoData: 'Some description #3 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 4,
                    name: 'name4',
                    infoData: 'Some description #4 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 5,
                    name: 'name5',
                    infoData: 'Some description #5 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 6,
                    name: 'name6',
                    infoData: 'Some description #6 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 7,
                    name: 'name7',
                    infoData: 'Some description #7 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 8,
                    name: 'name8',
                    infoData: 'Some description #8 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 9,
                    name: 'name9',
                    infoData: 'Some description #9 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 10,
                    name: 'name10',
                    infoData: 'Some description #10 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 11,
                    name: 'name11',
                    infoData: 'Some description #11 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 12,
                    name: 'name12',
                    infoData: 'Some description #12 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 13,
                    name: 'name13',
                    infoData: 'Some description #13 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 14,
                    name: 'name14',
                    infoData: 'Some description #14 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 15,
                    name: 'name15',
                    infoData: 'Some description #15 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 16,
                    name: 'name16',
                    infoData: 'Some description #16 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 17,
                    name: 'name17',
                    infoData: 'Some description #17 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 18,
                    name: 'name18',
                    infoData: 'Some description #18 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 19,
                    name: 'name19',
                    infoData: 'Some description #19 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 20,
                    name: 'name20',
                    infoData: 'Some description #20 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 21,
                    name: 'name11',
                    infoData: 'Some description #21 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 22,
                    name: 'name22',
                    infoData: 'Some description #22 for some game i don no what can i write here so all gonna well'
                },
                {
                    numberId: 23,
                    name: 'name23',
                    infoData: 'Some description #23 for some game i don no what can i write here so all gonna well'
                }
            ],
            curPrilipala: 0
        }

    }
    handleSetCurrentGame = gameIndex => {
        console.log(gameIndex)
        this.setState({
            isNeedAnimate: true
        })
        setTimeout(() => this.setState({
            isNeedAnimate: false,
            curPrilipala: gameIndex
        }), 300)
    }
    componentDidMount() {
        slider()
    }
    render() {
        const { prilipalaInfo, isNeedAnimate } = this.state
        let currentGame = prilipalaInfo.filter((item) => item.numberId === this.state.curPrilipala)[0];
        console.log(currentGame);
        return (
            <div className="sliderRounded">

                <main className="page">
                    <div className="container">
                        <div className="circle-carousel" data-speed="2000" data-autoplay="2500">
                            <div className="slides">
                                <div className="slide">
                                    <h2>Slide 1</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 2</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 3</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 4</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 5</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 6</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 7</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 8</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 9</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 10</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 11</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 12</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 13</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 14</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 15</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 16</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 17</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 18</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 19</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 20</h2>
                                </div>
                            </div>
                            <div className="pagination">
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={blue2}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={green}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={blueLil}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={greenPlaksa}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={heartedPig}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={orange}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={yellow}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={redFinger}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={redCap}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={pinky}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={pinkyPretty}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={fox}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={blueFlash}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={blueFat}></img>
                                        </span>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={violet}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={blueLil}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={greenPlaksa}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={heartedPig}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={orange}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={yellow}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={redFinger}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={redCap}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={pinky}></img>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="dot">
                                        <span>
                                            <img src={pinkyPretty}></img>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="next shadowViolet"></div>
                            <div className="prilipalyInfo">
                                <h4 className="yellowText lined">
                                    {currentGame.name}
                                </h4>
                                <p>
                                    {currentGame.infoData}
                                </p>
                            </div>
                           
                        <div className="prev shadowViolet" ></div>
                        </div>
                    </div>
                </main>
            </div >
        )
    }
}