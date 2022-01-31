import React, {useReducer} from 'react';
import { counterReducer, COUNTER_ACTION_TYPE } from '../reducer';
const ReducerCounter = () => {
    const [number, dispatch] = useReducer(counterReducer, 0);
    const onClickActionBtn = (type) => { dispatch({type}); }
    return (
        <>
            {number}
            <button onClick={() => onClickActionBtn(COUNTER_ACTION_TYPE.PLUS)} >+</button>
            <button onClick={() => onClickActionBtn(COUNTER_ACTION_TYPE.MINUS)} >-</button>
        </>
    )
}

export default ReducerCounter;