import React from 'react'
import './index.css'
import Parallax from 'parallax-js'

export default class StartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.scene = React.createRef();
    }

    componentDidMount() {
        console.log(this.scene);
        //this.parallax = new Parallax(this.scene);
    }

    componentWillUnmount() {
        //this.parallax.disable();
    }

    render() {
        const { handleCloseWindow } = this.props
        return(
            <div
                className='startWindow'
            >
                <div className="logoContainer">
                    <div className="logo-d bounceInDown"></div>
                    <div className="logo-p bounceInDown"></div>
                </div>
                <h2>C 1 ноября по 15 декабря во всех магазинах Дикси</h2>
                <div className='startWindowClose' onClick={handleCloseWindow}>
                   ПОЧУДИМ?
                </div>
                <div className="Background-bot">
                    <div className="cloudsContainer">
                        <div className="cloud cloud-1"></div>
                        <div className="cloud cloud-2"></div>
                    </div>
                    <div className="sandContainer">
                        <div className="grassContainer">
                            <div className="grass grass-1"></div>
                            <div className="grass grass-2"></div>
                            <div className="grass grass-3"></div>
                            <div className="grass grass-4"></div>

                        </div>
                        <div className="sand sand-1"></div>
                        <div className="sand sand-2"></div>
                        <div className="sand sand-3"></div>
                    </div>
                </div>
            </div>
        )
    }
}