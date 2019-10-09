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
    componentDidMount() {
        slider()
    }
    render() {
        return (
            <div className="sliderRounded">

                <main class="page">
                    <div class="container">
                        <div class="circle-carousel" data-speed="2000" data-autoplay="2500">
                            <div class="slides">
                                <div class="slide">
                                    <h2>Slide 1</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 2</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 3</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 4</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 5</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 6</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 7</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 8</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 9</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 10</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 11</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 12</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 13</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 14</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 15</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 16</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 17</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 18</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 19</h2>
                                </div>
                                <div class="slide">
                                    <h2>Slide 20</h2>
                                </div>
                            </div>
                            <div class="pagination">
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={blue2}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={green}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={blueLil}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={greenPlaksa}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={heartedPig}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={orange}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={yellow}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={redFinger}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={redCap}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={pinky}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={pinkyPretty}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={fox}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={blueFlash}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={blueFat}></img>
                                        </span>
                                    </div>
                                </div>

                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={violet}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={blueLil}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={greenPlaksa}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={heartedPig}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={orange}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={yellow}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={redFinger}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={redCap}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={pinky}></img>
                                        </span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="dot">
                                        <span>
                                            <img src={pinkyPretty}></img>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="next">Next</div>
                            <div class="prev">Prev</div>
                        </div>
                    </div>
                </main>
            </div >
        )
    }
}