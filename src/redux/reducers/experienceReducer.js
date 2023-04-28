import initialState from './initialState.json';
import * as experienceActions from '../actions/actions';

const experienceReducer = (state=initialState.experience,action) => {
    switch(action.type){
        case experienceActions.SET_EXPERIENCE : 
            return {...action.payload}
        case experienceActions.UPDATE_EXPERIENCE : 
            return {...action.payload}
        default : return state
    }
}

export default experienceReducer