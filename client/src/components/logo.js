import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import './login-page.css';
import './float-grid.css';
export class Logo extends React.Component  {
    render() {
        return (
                <div id='logo' className='col-12 logo-box'>
                        <a href='/questions' style={{textDecoration:'none'}}><h1 id='appName'>Learningo!</h1></a>
                        <ul>
                            <li>/lear-níngo/</li>
                            <li>/learn-n-Go/</li>
                            <li>/learning-Ohh/</li>
                        </ul>
                </div>
        )
    }

}

export default connect()(Logo)
