import React from 'react'
import './index.css'
import { slider } from '../../scripts/slider'

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
                                    <div class="dot"><span>1</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>2</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>3</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>4</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>5</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>6</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>7</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>8</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>9</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>10</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>11</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>12</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>13</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>14</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>15</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>16</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>17</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>18</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>19</span></div>
                                </div>
                                <div class="item">
                                    <div class="dot"><span>20</span></div>
                                </div>
                            </div>
                            <div class="next">Next</div>
                            <div class="prev">Prev</div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}