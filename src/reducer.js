/**
 * @typedef Action
 * @property {string} type 
 */

const isValidAction = (action) => {
    return 'type' in action && typeof action.type === 'string' && action.type.trim();
}

export const COUNTER_ACTION_TYPE = {
    PLUS: "plus",
    MINUS: "minus",
}

/**
 * @param {number} state
 * @param {Action} action 
 * @returns {number}
 */
export const counterReducer = (state, action) => {
    // switch(action.type) {
    //     case COUNTER_ACTION_TYPE.PLUS:
    //         return state+1;
    //     case COUNTER_ACTION_TYPE.MINUS:
    //         return state-1;
    //     default: 
    //         return state;
    // }
    
    if( !isValidAction(action) ) return state;   
    if( !Object.values(COUNTER_ACTION_TYPE).includes(action.type) )return state;
    const mapActionTypeToState = {
        [COUNTER_ACTION_TYPE.PLUS]: () => state + 1,
        [COUNTER_ACTION_TYPE.MINUS]: () => state - 1,
    } 
    return mapActionTypeToState[action.type]();
}