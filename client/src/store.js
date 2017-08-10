import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import learnReducer from './reducers';
const store = createStore(learnReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
export default store
