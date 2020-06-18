export const SET_RESEARCH_LEVEL = 'SET_RESEARCH_LEVEL'

interface SetResearchLevelAction {
    type: typeof SET_RESEARCH_LEVEL
    building: string
    level: number
}

export type ActionTypes = SetResearchLevelAction

export const setResearchLevel = (building: string, level: number): ActionTypes => {
    return {
        type: SET_RESEARCH_LEVEL,
        building,
        level
    }
}
