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

import posterImg0 from '../../images/gameImages/posterImg0.png'
import posterImg1 from '../../images/gameImages/posterImg1.png'
import posterImg2 from '../../images/gameImages/posterImg2.png'
import posterImg3 from '../../images/gameImages/posterImg3.png'
import posterImg4 from '../../images/gameImages/posterImg4.png'
import posterImg5 from '../../images/gameImages/posterImg5.png'
import posterImg6 from '../../images/gameImages/posterImg6.png'

import greenPlaksa from '../../images/greenPlaksa.png'

import knowItAll from '../../images/knowItAll.png'
import boyaka from '../../images/boyaka.png'
import redWithCup from '../../images/redWithCup.png'
import greenIhtiandr from '../../images/greenIhtiandr.png'

import pinkInsect from '../../images/pinkInsect.png'
import greenZabiyaka from '../../images/greenZabiyaka.png'
import pinkObayash from '../../images/pinkObayash.png'
import violetTriangle from '../../images/violetTriangle.png'

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
                    posterImg: posterImg0,
                    gameName: 'Collect puzzle #0',
                    gameDescription: 'Some description #0 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: gameLogo1,
                    gameNumber: 1,
                    gameImg: gameImg0,
                    posterImg: posterImg1,
                    gameName: 'Collect puzzle #1',
                    gameDescription: 'Some description #1 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: gameLogo2,
                    gameNumber: 2,
                    gameImg: gameImg0,
                    posterImg: posterImg2,
                    gameName: 'Collect puzzle #2',
                    gameDescription: 'Some description #2 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: gameLogo3,
                    gameNumber: 3,
                    gameImg: gameImg0,
                    posterImg: posterImg3,
                    gameName: 'Collect puzzle #3',
                    gameDescription: 'Some description #3 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: gameLogo4,
                    gameNumber: 4,
                    gameImg: gameImg0,
                    posterImg: posterImg4,
                    gameName: 'Collect puzzle #4',
                    gameDescription: 'Some description #4 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: gameLogo5,
                    gameNumber: 5,
                    gameImg: gameImg0,
                    posterImg: posterImg5,
                    gameName: 'Collect puzzle #5',
                    gameDescription: 'Some description #5 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: gameLogo6,
                    gameNumber: 6,
                    gameImg: gameImg0,
                    posterImg: posterImg6,
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
                    <div className='gameGrass'>
                        <div className='game-grass-1'></div>
                        <div className='game-grass-2'></div>
                    </div>
                    <CloudsComponent />
                </div>
                <div className='gamesWindowText'>
                    <h4 className='header smaller lined'>ИГРАЙ С ПРИЛИПАЛАМИ</h4>
                    <p className='text-data'>Даже Ворчун не сможет удержаться с такими веселыми играми. Распечатывай, раскрашивай, складывай и играй с друзьями!</p>
                    
                </div>
                <div className='gameMechanic'>
                    <div className={isNeedAnimate ? "leave" : 'stay'}>
                        <img src={currentGame.gameImg} alt='gameImg' className='gameImg'/>
                        <img src={currentGame.posterImg} alt='posterImg' className='posterImg' />
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
                <div className='gamesWindowBottomText'>
                    <h4 className='header smaller lined'>ПОВТОРЯЮТСЯ? ОБМЕНЯЙСЯ!</h4>
                    <p className='text-data'>Описание группа Вконтакте в которой можно обменяться повторными прилипалами</p>
                    <a className='header' href='#'>VKONTAKTE</a>
                    <div className='plaksaImages'>
                        <img
                            src={greenPlaksa}
                            alt='plaksa'
                        />
                        <img
                            src={greenPlaksa}
                            alt='plaksa'
                        />
                    </div>
                    
                </div>
                <div className='gamesPrilipaliLeft'>
                    <img
                        src={knowItAll}
                        alt='prilipala'
                    />
                    <img
                        src={boyaka}
                        alt='prilipala'
                    />
                    <img
                        src={redWithCup}
                        alt='prilipala'
                    />
                    <img
                        src={boyaka}
                        alt='prilipala'
                    />
                    <img
                        src={greenIhtiandr}
                        alt='prilipala'
                    />
                </div>
                <div className='gamesPrilipaliRight'>
                    <img
                        src={pinkInsect}
                        alt='prilipala'
                    />
                    <img
                        src={greenZabiyaka}
                        alt='prilipala'
                    />
                    <img
                        src={pinkObayash}
                        alt='prilipala'
                    />
                    <img
                        src={greenZabiyaka}
                        alt='prilipala'
                    />
                    <img
                        src={violetTriangle}
                        alt='prilipala'
                    />
                </div>
            </div>
        )
    }
}