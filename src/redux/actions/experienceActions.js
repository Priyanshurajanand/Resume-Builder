import * as experienceActions from './actions'

export const setExperience = (experience) => {
    return {
        type:experienceActions.SET_EXPERIENCE,
        payload : experience
    }
}

export const updateExperience = (experience) => {
    return {
        type:experienceActions.UPDATE_EXPERIENCE,
        payload : experience
    }
}