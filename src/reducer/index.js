import {combineReducers} from 'redux';
import counder from './counterReducer';
import articles from './articleReducer';

const rootReduxer = combineReducers({
    count: counder,
    articles
})

export default rootReduxer;