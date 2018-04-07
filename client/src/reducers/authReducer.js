import { FETCH_USER } from '../actions/types';

export default (state = null, action) => {
   
    switch (action.type) {
        case FETCH_USER:
            // if empty return false!!!
            return action.payload || false;
        default:
            return state;
    }
}