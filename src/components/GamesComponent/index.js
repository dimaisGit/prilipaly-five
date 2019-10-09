import React from 'react'
import './index.css'
import CloudsComponent from "../CloudsComponent";
import gameImg0 from '../../images/gameImages/gameImg0.png'

import gameLogo0 from '../../images/gameImages/gameLogo0.png'
import gameLogo1 from '../../images/gameImages/gameLogo1.png'
import gameLogo2 from '../../images/gameImages/gameLogo2.png'
import gameLogo3 from '../../images/gameImages/gameLogo3.png'
import gameLogo4 from '../../images/gameImages/gameLogo4.png'
import gameLogo5 from '../../images/gameImages/gameLogo5.png'
import gameLogo6 from '../../images/gameImages/gameLogo6.png'

export default class GamesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNeedAnimated: false,
            gamesData: [
                {
                    gameLogo: gameLogo0,
                    gameNumber: 0,
                    gameImg: gameImg0,
                    gameName: 'Collect puzzle #0',
                    gameDescription: 'Some description #0 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: gameLogo1,
                    gameNumber: 1,
                    gameImg: gameImg0,
                    gameName: 'Collect puzzle #1',
                    gameDescription: 'Some description #1 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: gameLogo2,
                    gameNumber: 2,
                    gameImg: gameImg0,
                    gameName: 'Collect puzzle #2',
                    gameDescription: 'Some description #2 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: gameLogo3,
                    gameNumber: 3,
                    gameImg: gameImg0,
                    gameName: 'Collect puzzle #3',
                    gameDescription: 'Some description #3 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: gameLogo4,
                    gameNumber: 4,
                    gameImg: gameImg0,
                    gameName: 'Collect puzzle #4',
                    gameDescription: 'Some description #4 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: gameLogo5,
                    gameNumber: 5,
                    gameImg: gameImg0,
                    gameName: 'Collect puzzle #5',
                    gameDescription: 'Some description #5 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: gameLogo6,
                    gameNumber: 6,
                    gameImg: gameImg0,
                    gameName: 'Collect puzzle #6',
                    gameDescription: 'Some description #6 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                }
            ],
            currentGame: 0
        }
    }
    handleSetCurrentGame = gameIndex => {
        console.log(gameIndex)
        this.setState({
            isNeedAnimate: true
        })
        setTimeout(() => this.setState({
            isNeedAnimate: false,
            currentGame: gameIndex
        }), 300)
    }
    render() {
        const { gamesData, isNeedAnimate } = this.state
        let currentGame = gamesData.filter((item) => item.gameNumber === this.state.currentGame)[0];
        console.log(currentGame);
        return(
            <div className='gamesWindow Background-bot'>
                <div className='gamesWindowBg'>
                    <div className='gamesWindowSand'></div>
                    <div className='gamesWindowSky'></div>
                    <CloudsComponent />
                </div>
                <div className='gamesWindowText'>
                    <p className='header'>ИГРАЙ С ПРИЛИПАЛАМИ</p>
                    <p className='text-data'>Даже Ворчун не сможет удержаться с такими веселыми играми. Распечатывай, раскрашивай, складывай и играй с друзьями!</p>
                </div>
                <div className='gameMechanic'>
                    <div className={isNeedAnimate ? "leave" : 'stay'}>
                        <img src={currentGame.gameImg} alt='gameImg' className='gameImg'/>
                        <div className='gameData'>
                            <p className='gameName'>
                                {currentGame.gameName}
                            </p>
                            <p className='gameDescription'>
                                {currentGame.gameDescription}
                            </p>
                            <a className='playLink' href={currentGame.linkForPdf}>
                                Play
                            </a>
                        </div>
                    </div>
                </div>
                <div className='gameButtons'>
                    {gamesData.map((item) => (
                        <img
                            className='gameLogo'
                            key={item.gameNumber}
                            src={item.gameLogo}
                            alt='game logo'
                            onClick={(e) => this.handleSetCurrentGame(item.gameNumber)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}