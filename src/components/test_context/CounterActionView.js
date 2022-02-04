import React, {  useEffect, useContext } from 'react';
import { COUNTER_ACTION_TYPE } from '../../reducer';
import { CounterDispatch } from '../../pages/Home';
const CounterActionView = () => {
    useEffect(() => {
        //console.log('CounterActionView-component mounted');
    })
    const dispatch = useContext(CounterDispatch);
    return (
        <>  
            <button onClick={() => dispatch({type: COUNTER_ACTION_TYPE.PLUS})} >+</button>
            <button onClick={() => dispatch({type: COUNTER_ACTION_TYPE.MINUS})}>-</button>
        </>
    )
}
export default CounterActionView;