import React from 'react'
import './index.css'
import { slider } from '../../scripts/slider'
import { prilipalyData } from "../../constants/prilipaly";


export default class SliderRound extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isNeedAnimated: false,
            prilipalaInfo: prilipalyData,
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
                        <div className="circle-carousel" data-speed="1000">
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
                                <div className="slide">
                                    <h2>Slide 20</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 20</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 20</h2>
                                </div>
                                <div className="slide">
                                    <h2>Slide 20</h2>
                                </div>
                            </div>
                            <div className="pagination">
                                {prilipalaInfo.map(item => (
                                    <div className="item">
                                        <div className="dot">
                                            <span>
                                                <img onClick={() => this.handleSetCurrentGame(item.numberId)} src={item.img}></img>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div onClick={() => this.setState({ curPrilipala: (this.state.curPrilipala + 1) % 24 })}className="next shadowViolet"></div>
                            <div className="prilipalyInfo">
                                <h4 className="yellowText lined">
                                    {currentGame.name}
                                </h4>
                                <p>
                                    {currentGame.infoData}
                                </p>
                            </div>
                           
                        <div onClick={() => this.setState({ curPrilipala: this.state.curPrilipala === 0 ? 23 : this.state.curPrilipala - 1 })} className="prev shadowViolet" ></div>
                        </div>
                    </div>
                </main>
            </div >
        )
    }
}