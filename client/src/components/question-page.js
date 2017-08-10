import React from 'react';
import * as Cookies from 'js-cookie';
import {connect} from 'react-redux';
// import Spinner from 'react-spinkit';
import Logo from './logo';
import {Link} from 'react-router-dom'
import {getLessons, getScore, postThis, logon, pickLesson} from '../actions';
import questionpage from './question-page.css'

class QuestionPage extends React.Component {
    

    componentDidMount() {
       
            this.props.dispatch(logon())
            this.props.dispatch(getLessons())
    }
    componentWillUnmount(){
        console.log('finish score',this.props.score)
    }

    // renderResults/(){
    //     if (this.props.loading) {
    //         return <Spinner spinnerName='circle' noFadeIn/>;
    //     }
    // }
    //use that^ for your spinner loading icon
    render() {
        console.log(this.props.questions)
        let questions ;
        let lessonPlan;
        if (this.props.questions) {
            lessonPlan = this.props.questions.map(lesson => lesson.language)
            console.log(lessonPlan)
        }

        
        return (
            <div id='question-container'>
                 <div className='logout-box'>
                    <a href={'/api/auth/logout'}><button className='logout-button'>Logout</button></a>
                </div>
               
                <Logo />
                <div className='question-box'>
                    
                    <ul className="question-list">
                         {questions} 
                         <Link to='/lesson' onClick={(e) =>{this.props.dispatch(pickLesson(e.target.value))}}>{lessonPlan}</Link>
                    </ul>
                    <input ></input>
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
