import React from 'react'
import './index.css'

export default class StartComponent extends React.Component {
    render() {
        const { handleCloseWindow } = this.props
        return(
            <div className='startWindow'>
                This is the start window. Click the NEXT to skip
                <div className='startWindowClose' onClick={handleCloseWindow}>
                    NEXT
                </div>
            </div>
        )
    }
}