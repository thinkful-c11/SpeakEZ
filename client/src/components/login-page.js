import React from 'react';
import './login-page.css';
import Logo from './logo';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {logon, getLessons} from '../actions'
import * as actions from '../actions'


export class LoginPage extends React.Component {
   
    render() {

        return (
            <div className='container-login'>
                <div className='login-box'>
                    <a href={'/api/auth/google'}><button className='login-button'>Login with Google</button></a>
                </div>
                 <Logo />
                 

                <div className='about-us'>
                    <h2 className='about-heading'>About Us...</h2>
                    <div className='about-container'>
                    <p className='aboutUs'>Started as a week long project that has blossomed to an enhanced learning tool. Learn anything
                        from language, vocabluary and more with Learningo!
                    </p>
                    </div>
                    <h2>COME LEARN WITH US!</h2>
                </div>
            </div>
        )
    }
}

export const mapStateToProps = state => {
    return{

    }
}
export default connect(mapStateToProps)(LoginPage)