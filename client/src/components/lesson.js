import React from 'react';
import {connect} from 'react-redux';
// import Spinner from 'react-spinkit';
import Logo from './logo';
import {Link} from 'react-router-dom'
import {getLessons, startLesson, nextQuestion, enqueueIt, logon} from '../actions';
import lesson from './lesson.css';
import floatGrid from './float-grid.css';

class Lesson extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display:'none',
            switchDisplay: () =>{
                if (this.state.display === 'none' ){
                   return this.setState({display:'inline-block'})
                }
                else if (this.state.display === 'inline-block') {
                   return this.setState({display:'none'})
                }
            }
        }
    }

    componentDidMount() {
        this.props.dispatch(logon())
            this.props.dispatch(startLesson())
          
    }
    

 
    render() {
        let question = this.props.currentQuestion ;
        let lessonPlan;
        let q = this.props.questionQueue;
        const hintStyle = {
            display:this.state.display,
            marginBottom:'-105px'
        }
        if (this.props.questions) {
            lessonPlan = this.props.questions.map(lesson => lesson.language)
        }

       
        
        return (
            <div id='question-container'>
                 <div className='logout-box'>
                    <a href={'/api/auth/logout'}><button className='logout-button'>Logout</button></a>
                </div>
               
                <Logo />
                <div className='lesson-box'>
                    
                    <ul className="question-list">
                         
                         <h2>{this.props.lesson}</h2>
                    </ul>
                    <h3>{question}</h3>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        
                        let element = document.getElementById("answer")
                        if (this.state.display === 'inline-block') {
                            this.state.switchDisplay()
                        }
                        if (this.props.answer != element.value) {
                            console.log(element.value,'this question was queued')

                            this.props.dispatch(enqueueIt(q))
                            this.props.dispatch(nextQuestion()) 
                            element.value = ''
                        }
                       
                        this.props.dispatch(nextQuestion()) 
                        element.value = '' }}>
                    <input id='answer'placeholder='answer' style={{color:'black', fontFamily:"'Roboto', sans-serif"}} ></input>
                    <input id="button" type="submit" value="Submit" />
                    </form>
                    <p className='hint' style={hintStyle}>{this.props.translation}</p>
                    <div className='blank'></div>
                    <Link id='hint' type='text' to='#' onClick={() => this.state.switchDisplay()}>Need a hint?</Link>
                    
                    <Link to='#'onClick={() =>{ console.log(this.props)}}><p className='next-link'>next</p></Link>
                    
                    
                    
                    
                    <h4>Special Characters</h4>
                    <h5 style={	{fontFamily:"'Roboto', sans-serif"}}>á é í ó ú ü</h5> 
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
        currentQuestion:state.currentQuestion,
        questionQueue:state.questionQueue,
        translation:state.translation,
        answer:state.answer

    }
}

export default connect(mapStateToProps)(Lesson)