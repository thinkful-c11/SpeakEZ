import Queue from '../queue';
const initialState = {
    currentUser: null,
    currentQuestion: undefined,
    lesson:null,
    questions:[],
    nextQuestion: null,
    score:null,
    loading:false,
    questionQueue: null,
    userAnswer: ''
}

export const learnReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'GET_SCORE_REQUEST':
            return Object.assign({}, state, {
                error:null,
                loading:true
            })
        case 'GET_SCORE_SUCCESS':
            return Object.assign({}, state, {
                score:action.score,
                loading:false
            })
        case 'GET_CURRENT_USER_SUCCESS':
            return Object.assign({}, state, {
                currentUser: action.user
            })
        case 'SET_USER_ANSWER':
            const userAnswer = action.answer
            return {...state, userAnswer}
        case 'CORRECT':
            const questionQueue = state.questionQueue;
            current = questionQueue.dequeue();
            questionQueue.enqueue(action.question);
            return Object.assign({}, state, {
              currentQuestion: current,
              questionQueue,
              userAnswer: ''
            })
        case 'CURRENT_USER':
            return Object.assign({}, state, {
                currentUser:action.currentUser
            })
        case 'LOGON_REQUEST':
            return Object.assign({}, state, {
                loading:true
            })
        case 'LOGON_SUCCESS':
            return Object.assign({}, state, {
                loading:false
            })
        case 'PICK_LESSON':
            return Object.assign({}, state,{
                lesson:action.lesson
                
            })
        case 'REQUEST_LESSON':
            return Object.assign ({}, state, {

            })
        case 'REQUEST_LESSON_SUCCESS':
            let queue = new Queue();
            action.questions.forEach(question => {
              queue.enqueue(question); 
            })
            console.log(queue);
            let current = queue.dequeue();
            console.log(current);
            return Object.assign({}, state, {
                questions: action.questions,
                questionQueue: queue,
                currentQuestion: current
            })
        case 'REQUEST_LESSON_ERROR':
            return Object.assign({}, state, {
                error:action.error
            })
        default:
            return state
    }
}

export default learnReducer;
  case 'PICK_LESSON':
            for (let i = 0; i < state.questions; i++) {
                if (state.questions[i].language === aciton.lesson) {
                    let queue = new Queue();
                    state.questions[i].forEach(question => {
                    queue.enqueue(question); 
                    console.log(queue)
                    })

                    
                }
            }
            
            
            
            let current = queue.dequeue();
            console.log(current);
            return Object.assign({}, state,{
                lesson:action.lesson,
                questionQueue: queue,
                currentQuestion: current
            })