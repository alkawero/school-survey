import { combineReducers } from 'redux';
import user from './userReducer';
import ui from './uiReducer';
import survey from './surveyReducer';
import question from './questionReducer';

const rootReducer = combineReducers({
    user,
    ui,
    survey,
    question
  });
export default rootReducer;
