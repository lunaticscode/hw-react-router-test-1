import React, {useEffect} from 'react';
import CounterResultInnerView from './CounterResultInnerView';
const CounterResultView = ({number}) => {
    useEffect( () => {
        //console.log('ContextCounterResultView-component mounted');
    })
    return (
        <>
        <div>{number}</div>
        <CounterResultInnerView number={number} />
        </>
    )
}

export default CounterResultView;