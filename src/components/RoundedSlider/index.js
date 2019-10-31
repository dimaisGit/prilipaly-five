import React from 'react'
import './index.css'
import { slider } from '../../scripts/slider'
import { prilipalyData } from "../../constants/prilipaly";
import LazyLoad from "vanilla-lazyload";
import lazyloadConfig from "./config/lazyload";


if (!document.lazyLoadInstance) {
    document.lazyLoadInstance = new LazyLoad(lazyloadConfig);
  }


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
        this.setState({
            isNeedAnimate: true
        })
        setTimeout(() => this.setState({
            isNeedAnimate: false,
            curPrilipala: gameIndex
        }), 300)
    }
    componentDidMount() {
        document.lazyLoadInstance.update();
        slider()
    }
    componentDidUpdate() {
        document.lazyLoadInstance.update();
      }
    render() {
        const { prilipalaInfo, isNeedAnimate, alt, src, srcset } = this.state
        let currentGame = prilipalaInfo.filter((item) => item.numberId === this.state.curPrilipala)[0];
        return (
            <div className="sliderRounded">
                <main className="page">
                    <div className="container">
                        <div className="circle-carousel" data-speed="5000" data-autoplay="">
                            <div className="slides">
                                {prilipalaInfo.map((item, index) => (
                                    <div className='slide' key={index}>
                                        <h2>{index + 1} из  24</h2>
                                    </div>
                                ))}
                            </div>
                            <div className="pagination">
                                {prilipalaInfo.map(item => (
                                    <div className="item" key={item.numberId}>
                                        <div className="dot">
                                            <span>
                                                <img onClick={() => this.handleSetCurrentGame(item.numberId)} src={item.img }/>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div onClick={() => this.setState({ curPrilipala: (this.state.curPrilipala + 1) % 24 })}className="next "></div>
                            <div className="prilipalyInfo">
                                <h4 className="yellowText lined">
                                    {currentGame.name}
                                </h4>
                                <p>
                                    {currentGame.infoData}
                                </p>
                            </div>

                            <div onClick={() => this.setState({ curPrilipala: this.state.curPrilipala === 0 ? 23 : this.state.curPrilipala - 1 })} className="prev " ></div>
                        </div>
                    </div>
                </main>
            </div >
        )
    }
}