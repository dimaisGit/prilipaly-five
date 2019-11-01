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

import a from '../../games/letuchie.pdf'
import b from '../../games/komnata.pdf'
import c from '../../games/Puzzles.pdf'
import d from '../../games/vlublennoe.pdf'
import e from '../../games/labirint.pdf'
import f from '../../games/teny.pdf'
import x from '../../games/HeroesBWflat.pdf'




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
                    gameName: 'Влюбленное послание',
                    gameDescription: 'Влюбляка просто обожает обниматься и дарить подарки. А еще она любит комплименты и добрые пожелания! Напиши в этой открытке все самые лучшие слова и подари любимому другу!',
                    linkForPdf: d
                }, {
                    gameLogo: gameLogo1,
                    gameNumber: 1,
                    gameImg: gameImg0,
                    posterImg: posterImg1,
                    gameName: 'Летучие прилипучие',
                    gameDescription: 'Складываем из бумаги по инструкции фигурку самолета, запускаем по всей квартире или на улице!',
                    linkForPdf: a
                }, {
                    gameLogo: gameLogo2,
                    gameNumber: 2,
                    gameImg: gameImg0,
                    posterImg: posterImg2,
                    gameName: 'Прилипальная комната',
                    gameDescription: 'Нихочуха тот еще вредина! Любит разгонять прилипал подальше. Поэтому они решили проучить Нихочуху и спрятаться куда подальше! Сможешь теперь их отыскать?',
                    linkForPdf: b
                }, {
                    gameLogo: gameLogo3,
                    gameNumber: 3,
                    gameImg: gameImg0,
                    posterImg: posterImg3,
                    gameName: 'Секретная вкусняшка',
                    gameDescription: 'Кто из прилипал больше всех любит вкусно поесть? Собери кусочки и узнай любимую вкусняшку прилипучего Обжоры!',
                    linkForPdf: c
                }, {
                    gameLogo: gameLogo4,
                    gameNumber: 4,
                    gameImg: gameImg0,
                    posterImg: posterImg4,
                    gameName: 'ЗЛЮЧНЫЙ ЛАБИРИНТ',
                    gameDescription: 'Злюка — любитель подшутить над прилипалами. Но иногда эти шутки бывают действительно злыми! Вот и сейчас, он завел друзей в лабиринт и забыл, как из него выбираться! Только ты ему можешь помочь',
                    linkForPdf: e
                }, {
                    gameLogo: gameLogo5,
                    gameNumber: 5,
                    gameImg: gameImg0,
                    posterImg: posterImg5,
                    gameName: 'ИГРА ТЕНЕЙ',
                    gameDescription: 'Страх просто до ужаса боится темноты! А в остальное время пугается собственной тени. Пора показать ему, что все это совсем не страшно! Кстати, а где его тень? Помоги прилипалам разобраться с этой незадачей!',
                    linkForPdf: f
                }, {
                    gameLogo: gameLogo6,
                    gameNumber: 6,
                    gameImg: gameImg0,
                    posterImg: posterImg6,
                    gameName: 'Раскрась прилипал',
                    gameDescription: 'Раскрась прилипал',
                    linkForPdf: x
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
        return (
            <div className='gamesWindow' id="game">
                <div className='gamesWindowBg'>
                    <CloudsComponent />
                    <div className="pril-bg"></div>
                </div>
                <div className="gamingData">
                    <div className='gamesWindowText'>
                        <h4 className='header smaller lined'>ИГРАЙ С ПРИЛИПАЛАМИ</h4>
                        <p className='text-data'>Даже Ворчун не сможет удержаться с такими веселыми играми. Распечатывай, раскрашивай, складывай и играй с друзьями!</p>

                    </div>
                    <div className='gameMechanic'>
                        <div className="imgContainer">
                            <div className={isNeedAnimate ? 'gameData leave' : 'gameData stay'}>
                                <img src={currentGame.gameImg} alt='gameImg' className='gameImg' />
                                <img src={currentGame.posterImg} alt='posterImg' className={isNeedAnimate ? 'posterImg leave' : 'posterImg stay'} />
                                <p className='gameName'>
                                    {currentGame.gameName}
                                </p>
                                <p className='gameDescription'>
                                    {currentGame.gameDescription}
                                </p>
                                <a className='playLink' href={currentGame.linkForPdf} target="_blank">
                                    ИГРАТЬ
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
                <div className='gamesWindowBottomText' id="exchange">
                    <h4 className='header smaller lined'>ПОВТОРЯЮТСЯ? ОБМЕНЯЙСЯ!</h4>
                    <p className='text-data'>Одинаковые прилипалы? Отличный повод найти новых друзей! Скорее заходи в группу и меняйся прилипалами с другими!</p>
                    <a className='header' href='https://vk.com/prilipaly5' target="_blank"><i className="fab fa-vk"></i></a>
                </div>

            </div>
        )
    }
}