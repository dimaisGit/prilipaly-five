import React from 'react'
import './index.css'
import CloudsComponent from "../CloudsComponent";

export default class GamesComponent extends React.Component {
    render() {
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
            </div>
        )
    }
}