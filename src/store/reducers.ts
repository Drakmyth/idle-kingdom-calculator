import { combineReducers } from 'redux'
import { SET_RESEARCH_LEVEL, ActionTypes } from './actions'

export interface ResearchLevelState {
    [building: string]: number
}

const initialResearchLevelState: ResearchLevelState = {}

const researchLevel = (state = initialResearchLevelState, action: ActionTypes): ResearchLevelState => {
    switch(action.type) {
        case SET_RESEARCH_LEVEL:
            return {
                ...state,
                [action.building]: action.level
            }
        default:
            return state
    }
}

export default combineReducers([researchLevel])