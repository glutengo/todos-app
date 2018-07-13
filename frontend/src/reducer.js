import {RECEIVE_TODOS} from './actions';

export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_TODOS:
            return action.payload;
        default:
            return state
    }
}