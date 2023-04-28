import initialState from './initialState.json';
import * as projectActions from '../actions/actions';

const projectReducer = (state=initialState.project,action) => {
    switch(action.type){
        case projectActions.SET_PROJECT : 
            return {...action.payload}
        case projectActions.UPDATE_PROJECT : 
            return {...action.payload}
        default : return state
    }
}

export default projectReducer