import React from 'react'
import './index.css'

export default class GamesComponent extends React.Component {
    render() {
        return(
            <div className='gamesWindow'>
                <div className='gamesWindowBg'>
                    <div className='gamesWindowSand'></div>
                    <div className='gamesWindowSky'></div>
                </div>
                <div className='gamesWindowText'>
                    <p className='header'>ИГРАЙ С ПРИЛИПАЛАМИ</p>
                    <p className='text-data'>Даже Ворчун не сможет удержаться с такими веселыми играми. Распечатывай, раскрашивай, складывай и играй с друзьями!</p>
                </div>
            </div>
        )
    }
}