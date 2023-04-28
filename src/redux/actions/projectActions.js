import * as projectActions from './actions'

export const setProject = (project) => {
    return {
        type:projectActions.SET_PROJECT,
        payload : project
    }
}

export const updateProject = (project) => {
    return {
        type:projectActions.UPDATE_PROJECT,
        payload:project
    }
}