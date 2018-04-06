import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'
import authReducer from './authReducer';


export default combineReducers({
    // whatever we put inside represents a key that exists inside state 
    auth: authReducer,
    form: reduxForm
});