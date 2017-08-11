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
    constructor(props){
        super(props);
        this.state = {
            lesson:null
        }
    }

    componentDidMount() {
       
            this.props.dispatch(logon())
            this.props.dispatch(getLessons())
    }
        

    render() {
        let lesson;
        let questions ;
        let lessonPlan;
        if (this.props.questions) {
            lessonPlan = this.props.questions.map((lesson,index) =>  <option onClick={(e) => console}key={lesson.language} 
                value={index} className='lesson' style={{ color:'black'}}>{lesson.language}</option>)
            // 
            //lesson.language
        }

        return (
            <div id='question-container'>
                 <div className='logout-box'>
                    <a href={'/api/auth/logout'}><button className='logout-button'>Logout</button></a>
                </div>
                <Logo />
                <div className='question-box' >
                    <h3>What would you like to practice today?</h3>
                    <div className='inner-container' style={{display:'block'}}>
                        <select style={{color:'black'}}onChange={(e) =>this.props.dispatch(pickLesson(e.target.value))}>
                            <option style={{listStyle:'none', color:'black'}} value="''">Choose A Lesson From Below</option>
                            {lessonPlan}
                        </select>
                        <Link to='/lesson' onClick={(e) =>console.log(lessonPlan)}><button >Start</button></Link>
                        <button onClick={() => {
                                    console.log(lessonPlan)}}>CLICK</button>
                    </div>    
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
        lesson:state.lesson,
        questionQueue:state.questionQueue



    }
}

// export default QuestionPage;
export default connect(mapStateToProps)(QuestionPage)
