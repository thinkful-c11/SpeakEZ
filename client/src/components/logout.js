import React from 'react';
import Logo from './logo';
import floatGrid from './float-grid.css';

class LogOut extends React.Component  {
    render() {
        return (
                <div id='logout' className='logout-box'>
                     <Logo />
                </div>
        )
    }

}

export default LogOut;
