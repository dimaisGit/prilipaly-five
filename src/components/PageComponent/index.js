import React from 'react'
import './index.css'
import WelcomeComponent from "../WelcomeComponent";

export default class PageComponent extends React.Component {
    render() {
        return (
            <div>
             <WelcomeComponent />
            </div>
        )
    }
}