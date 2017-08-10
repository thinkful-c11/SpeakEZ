import React from 'react';
import Logo from './logo';
import './login-page.css';
import './dashboard.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


export class DashBoard extends React.Component {
    render() {
        return (

            <div className='dashboard-container'>


                <div className='logout-box'>
                    <Link to={'/api/auth/logout'}>
                    <button className='logout-button'>Logout</button></Link>
                </div>
                <Logo />
                <div className='question-container'>
                     <p>ready to begin learning francais?</p>
                     <Link to='/questions'><p>next</p></Link>
                </div>
            </div>
        )
    } 
}

export default connect()(DashBoard)