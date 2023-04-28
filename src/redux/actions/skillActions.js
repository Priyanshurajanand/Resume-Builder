import * as skillActions from './actions'

export const setSkill = (skill) => {
    return {
        type:skillActions.SET_SKILL,
        payload : skill
    }
}

export const updateSkill = (skill) => {
    return {
        type:skillActions.UPDATE_SKILL,
        payload:skill
    }
}