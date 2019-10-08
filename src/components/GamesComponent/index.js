import React from 'react'
import './index.css'
import CloudsComponent from "../CloudsComponent";
import gameImg0 from '../../images/gameImages/gameImg0.png'

export default class GamesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gamesData: [
                {
                    gameLogo: 'someImgHere',
                    gameNumber: 0,
                    gameImg: gameImg0,
                    gameName: 'Collect puzzle #0',
                    gameDescription: 'Some description #0 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: 'someImgHere',
                    gameNumber: 1,
                    gameImg: gameImg0,
                    gameName: 'Collect puzzle #1',
                    gameDescription: 'Some description #1 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: 'someImgHere',
                    gameNumber: 2,
                    gameImg: gameImg0,
                    gameName: 'Collect puzzle #2',
                    gameDescription: 'Some description #2 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: 'someImgHere',
                    gameNumber: 3,
                    gameImg: gameImg0,
                    gameName: 'Collect puzzle #3',
                    gameDescription: 'Some description #3 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: 'someImgHere',
                    gameNumber: 4,
                    gameImg: gameImg0,
                    gameName: 'Collect puzzle #4',
                    gameDescription: 'Some description #4 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: 'someImgHere',
                    gameNumber: 5,
                    gameImg: gameImg0,
                    gameName: 'Collect puzzle #5',
                    gameDescription: 'Some description #5 for some game i don no what can i write here so all gonna well',
                    linkForPdf: '#'
                },{
                    gameLogo: 'someImgHere',
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
        this.setState({
            currentGame: gameIndex
        })
    }
    render() {
        let currentGame = this.state.gamesData.filter((item) => item.gameNumber === this.state.currentGame)[0];
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
        )
    }
}