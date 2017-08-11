import request from "superagent";
import * as Cookies from 'js-cookie';
import Queue from '../queue';

export const REQUEST_LESSON = 'REQUEST_LESSON';
export const requestLesson = () => ({
    type:REQUEST_LESSON,
});

export const REQUEST_LESSON_SUCCESS = 'REQUEST_LESSON_SUCCESS';
export const requestLessonSuccess = questions => ({
    type: REQUEST_LESSON_SUCCESS,
    questions
});

export const REQUEST_LESSON_ERROR = 'REQUEST_LESSON_ERROR';
export const requestLessonError = error => ({
    type: REQUEST_LESSON_ERROR,
    error
});

export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
export const getCurrentUserSuccess = user => ({
    type: GET_CURRENT_USER_SUCCESS,
    user
})

export const GET_CURRENT_USER_ERROR = 'GET_CURRENT_USER_ERROR';
export const getCurrentUserError = error => ({
    type: GET_CURRENT_USER_ERROR,
    error
});

export const GET_CURRENT_USER_REQUEST = 'GET_CURRENT_USER_REQUEST';
export const getCurrentUserRequest = () => ({
    type: GET_CURRENT_USER_REQUEST,
});

export const SET_USER_ANSWER = 'SET_USER_ANSWER';
export const setUserAnswer = answer => ({
  type: SET_USER_ANSWER,
  answer
});

export const CORRECT = 'CORRECT';
export const correct = question => ({
  type: CORRECT,
  question
});

export const LOGON_REQUEST = 'LOGON_REQUEST';
export const logonRequest = () => ({
    type:LOGON_REQUEST
})

export const LOGON_SUCCESS = 'LOGON_SUCCESS';
export const logonSuccess = () =>({
    type:LOGON_SUCCESS
})


export const CURRENT_USER = 'CURRENT_USER';
export const getUser = currentUser => ({
    type:CURRENT_USER,
    currentUser
})

export const getLessons = () => dispatch => {
    const accessToken = Cookies.get('accessToken');
    dispatch(requestLesson())
    request
        .get('/api/speakez')
        .set({'Authorization':`Bearer ${accessToken}`})
        .then(res =>{
          dispatch(requestLessonSuccess(res.body))
        })
        .catch(err => dispatch(requestLessonError(err)))
}

export const postThis = () => dispatch => {
    const accessToken = Cookies.get('accessToken');
    let obj;
    return fetch('/api/speakez',{
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
      'Authorization':`Bearer ${accessToken}`
    },
    body: JSON.stringify(obj)
  })
  .catch(error => {
   console.log(error)
  });
}
export const getCurrentUser = () => dispatch => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
        dispatch(getCurrentUserRequest());
        request
            .get('/api/me')
            .set({'Authorization':`Bearer ${accessToken}`})
            .then(res => {
                if (!res.ok) {  
                    if (res.status === 401) {
                    Cookies.remove('accessToken');
                return;
                    }
              throw new Error(res.statusText)
                }
            dispatch(getCurrentUserSuccess(res.body))
            })
            .catch(err => dispatch(getCurrentUserError(err)))
    }
}

export const updateScore = (score,id) => dispatch => {
    const accessToken = Cookies.get('accessToken');
    let body = {score:score, id:id}
        return fetch('/api/score', {
            method: 'PUT',
            headers: {Authorization: `Bearer ${accessToken}`},
            body:JSON.stringify(body)
        })
        .then(res => console.log("This is what i want to look at: ", res));
}

export const logon = () => dispatch =>{
     const accessToken = Cookies.get('accessToken');
     fetch('/api/me', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }).then(res => {
        if (!res.ok) {
            if (res.status === 401) {
                Cookies.remove('accessToken');
                return;
            }
            throw new Error(res.statusText);
        }
        return res.json();
    }).then(currentUser => {
        dispatch(getUser(currentUser))
        dispatch(logonRequest())}
    )
    .then(() => dispatch(logonSuccess()));
}

export const PICK_LESSON = 'PICK_LESSON';
export const pickLesson = lesson => ({
    type:PICK_LESSON,
    lesson
})

export const START_LESSON = 'START_LESSON';
export const startLesson = () =>({
    type:START_LESSON
})

export const NEXT_QUESTION = 'NEXT_QUESTION';
export const nextQuestion = () =>({
    type:NEXT_QUESTION
})

export const ENQUEUE_IT = 'ENQUEUE_IT';
export const enqueueIt = (q) =>({
    type:ENQUEUE_IT,
    q
})