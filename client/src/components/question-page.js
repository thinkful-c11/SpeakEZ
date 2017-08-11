import React from 'react';
import * as Cookies from 'js-cookie';
import {connect} from 'react-redux';
// import Spinner from 'react-spinkit';
import Logo from './logo';
import {Link} from 'react-router-dom'
import {getLessons, getScore, postThis, logon, pickLesson} from '../actions';
import questionpage from './question-page.css'
import floatGrid from './float-grid.css';

class QuestionPage extends React.Component {
    

    componentDidMount() {
       
            this.props.dispatch(logon())
            this.props.dispatch(getLessons())
    }
        

    render() {
        let questions ;
        let lessonPlan;
        if (this.props.questions) {
            lessonPlan = this.props.questions.map(lesson => <li className='lesson'>{lesson.language}</li>)
        }

        return (
            <div id='question-container'>
                 <div className='logout-box'>
                    <a href={'/api/auth/logout'}><button className='logout-button'>Logout</button></a>
                </div>
               
                <Logo />
                <div className='question-box'>
                    <h3>What would you like to practice today?</h3>
                    <ul className="question-list">
                         {questions} 
                         <Link to='/lesson' onClick={(e) =>{this.props.dispatch(pickLesson( lessonPlan))}}>{lessonPlan}</Link>
                    </ul>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        score:state.score,
        loading:state.loading,
        currentUser:state.currentUser,
        lesson:state.lesson

    }
}

// export default QuestionPage;
export default connect(mapStateToProps)(QuestionPage)
