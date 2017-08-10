import React from 'react';
import * as Cookies from 'js-cookie';
import {connect} from 'react-redux';
// import Spinner from 'react-spinkit';
import Logo from './logo';
import {Link} from 'react-router-dom'
import {getLessons, getScore, postThis} from '../actions';
import lesson from './lesson.css'

class Lesson extends React.Component {
    

    componentDidMount() {
       
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
        }

        // if (this.props.questions) {
        //     questions = this.props.questions.find( lesson => {

        //     })
        // }
        
        return (
            <div id='question-container'>
                 <div className='logout-box'>
                    <a href={'/api/auth/logout'}><button className='logout-button'>Logout</button></a>
                </div>
               
                <Logo />
                <div className='lesson-box'>
                    <p> you made it</p>
                    <ul className="question-list">
                         
                         <Link to='#' onClick={this.props.pickLesson}>{lessonPlan}</Link>
                         {/* {questions}  */}
                    </ul>
                    <input placeholder='answer'></input>
                    <Link to='#'onClick={() =>{this.props.dispatch(getLessons())}}><p className='next-link'>next</p></Link> 
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
        currentQuestion:state.currentQuestion

    }
}

export default connect(mapStateToProps)(Lesson)