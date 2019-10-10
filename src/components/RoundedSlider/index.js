import React from 'react'
import './index.css'
import { slider } from '../../scripts/slider'

import img1 from '../../images/prilipaly/1.png'
import img2 from '../../images/prilipaly/2.png'
import img3 from '../../images/prilipaly/3.png'
import img4 from '../../images/prilipaly/4.png'
import img5 from '../../images/prilipaly/5.png'
import img6 from '../../images/prilipaly/6.png'
import img7 from '../../images/prilipaly/7.png'
import img8 from '../../images/prilipaly/8.png'
import img9 from '../../images/prilipaly/9.png'
import img10 from '../../images/prilipaly/10.png'
import img11 from '../../images/prilipaly/11.png'
import img12 from '../../images/prilipaly/12.png'
import img13 from '../../images/prilipaly/13.png'
import img14 from '../../images/prilipaly/14.png'
import img15 from '../../images/prilipaly/15.png'
import img16 from '../../images/prilipaly/16.png'
import img17 from '../../images/prilipaly/17.png'
import img18 from '../../images/prilipaly/18.png'
import img19 from '../../images/prilipaly/19.png'
import img20 from '../../images/prilipaly/20.png'
import img21 from '../../images/prilipaly/21.png'
import img22 from '../../images/prilipaly/22.png'
import img23 from '../../images/prilipaly/23.png'
import img24 from '../../images/prilipaly/24.png'



export default class SliderRound extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isNeedAnimated: false,
            prilipalaInfo: [
                {
                    numberId: 0,
                    name: 'name0',
                    infoData: 'Some description #0 for some game i don no what can i write here so all gonna well',
                    img: img1
                },
                {
                    numberId: 1,
                    name: 'name1',
                    infoData: 'Some description #1 for some game i don no what can i write here so all gonna well',
                    img: img2
                },
                {
                    numberId: 2,
                    name: 'name2',
                    infoData: 'Some description #2 for some game i don no what can i write here so all gonna well',
                    img: img3
                },
                {
                    numberId: 3,
                    name: 'name3',
                    infoData: 'Some description #3 for some game i don no what can i write here so all gonna well',
                    img: img4
                },
                {
                    numberId: 4,
                    name: 'name4',
                    infoData: 'Some description #4 for some game i don no what can i write here so all gonna well',
                    img: img5
                },
                {
                    numberId: 5,
                    name: 'name5',
                    infoData: 'Some description #5 for some game i don no what can i write here so all gonna well',
                    img: img6
                },
                {
                    numberId: 6,
                    name: 'name6',
                    infoData: 'Some description #6 for some game i don no what can i write here so all gonna well',
                    img: img7
                },
                {
                    numberId: 7,
                    name: 'name7',
                    infoData: 'Some description #7 for some game i don no what can i write here so all gonna well',
                    img: img8
                },
                {
                    numberId: 8,
                    name: 'name8',
                    infoData: 'Some description #8 for some game i don no what can i write here so all gonna well',
                    img: img9
                },
                {
                    numberId: 9,
                    name: 'name9',
                    infoData: 'Some description #9 for some game i don no what can i write here so all gonna well',
                    img: img10
                },
                {
                    numberId: 10,
                    name: 'name10',
                    infoData: 'Some description #10 for some game i don no what can i write here so all gonna well',
                    img: img11
                },
                {
                    numberId: 11,
                    name: 'name11',
                    infoData: 'Some description #11 for some game i don no what can i write here so all gonna well',
                    img: img12
                },
                {
                    numberId: 12,
                    name: 'name12',
                    infoData: 'Some description #12 for some game i don no what can i write here so all gonna well',
                    img: img13
                },
                {
                    numberId: 13,
                    name: 'name13',
                    infoData: 'Some description #13 for some game i don no what can i write here so all gonna well',
                    img: img14
                },
                {
                    numberId: 14,
                    name: 'name14',
                    infoData: 'Some description #14 for some game i don no what can i write here so all gonna well',
                    img: img15
                },
                {
                    numberId: 15,
                    name: 'name15',
                    infoData: 'Some description #15 for some game i don no what can i write here so all gonna well',
                    img: img16
                },
                {
                    numberId: 16,
                    name: 'name16',
                    infoData: 'Some description #16 for some game i don no what can i write here so all gonna well',
                    img: img17
                },
                {
                    numberId: 17,
                    name: 'name17',
                    infoData: 'Some description #17 for some game i don no what can i write here so all gonna well',
                    img: img18
                },
                {
                    numberId: 18,
                    name: 'name18',
                    infoData: 'Some description #18 for some game i don no what can i write here so all gonna well',
                    img: img19
                },
                {
                    numberId: 19,
                    name: 'name19',
                    infoData: 'Some description #19 for some game i don no what can i write here so all gonna well',
                    img: img20
                },
                {
                    numberId: 20,
                    name: 'name20',
                    infoData: 'Some description #20 for some game i don no what can i write here so all gonna well',
                    img: img21
                },
                {
                    numberId: 21,
                    name: 'name21',
                    infoData: 'Some description #21 for some game i don no what can i write here so all gonna well',
                    img: img22
                },
                {
                    numberId: 22,
                    name: 'name22',
                    infoData: 'Some description #22 for some game i don no what can i write here so all gonna well',
                    img: img23
                },
                {
                    numberId: 23,
                    name: 'name23',
                    infoData: 'Some description #23 for some game i don no what can i write here so all gonna well',
                    img: img24
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