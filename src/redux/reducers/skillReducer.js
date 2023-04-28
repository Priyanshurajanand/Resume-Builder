import initialState from './initialState.json';
import * as skillActions from '../actions/actions';

const skillReducer = (state=initialState.skill,action) => {
    switch(action.type){
        case skillActions.SET_SKILL : 
            return {...action.payload}
        case skillActions.UPDATE_SKILL : 
            return {...action.payload}
        default : return state
    }
}

export default skillReducer