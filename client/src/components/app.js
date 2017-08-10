import React from 'react';
import * as Cookies from 'js-cookie';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import { Link } from 'react-router-dom';
import QuestionPage from './question-page';
import LoginPage from './login-page';
import DashBoard from './dashboard';
import Lesson from './lesson';
import {logon, getLessons} from '../actions'

// import LogOut from './logout';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }
    
       
    componentDidMount() {
 this.props.dispatch(logon())
      
    }

    render() {
        if (!this.props.currentUser) {
            return <LoginPage />;
        }
        // console.log(this.state.currentUser)
        return (
            <Router>
                <div className='app'>
                    <main>
                        <Route  exact path='/' component={DashBoard}  />
                        <Route  exact path='/questions' component={QuestionPage}/>
                        {/* <Route  exact path='/logout' component={LogOut}/> */}
                        <Route  exact path='/lesson' component={Lesson}/>
                    </main>
                </div>
            </Router>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        currentUser:state.currentUser,
        questions:state.questions,
        score:state.score
    }
}
export default connect(mapStateToProps)(App)