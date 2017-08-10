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
                    <a href={'/api/auth/google'}><button onClick={() => console.log(this)}>Login with Google</button></a>
                </div>
                 <Logo />
                 

                <div className='about-us'>
                    <h2>About Us...</h2>
                    <p>Learn a language with us</p>
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