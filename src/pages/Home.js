import React, {useEffect, useReducer, createContext} from 'react';
import { counterReducer } from '../reducer';
import ContextCounterActionView from '../components/test_context/CounterActionView';
import ContextCounterResultView from '../components/test_context/CounterResultView';
export const CounterDispatch = createContext(null);
const Home = () => {
    const [number, dispatch] = useReducer(counterReducer, 0);
    useEffect(() => {console.log('Home-Component mounted')}, []);
    return (
        <>
        <CounterDispatch.Provider value={dispatch}>
            <>  
                Home-Component
                <ContextCounterActionView/>
                <ContextCounterResultView number={number}/>
            </>
        </CounterDispatch.Provider>
        </>
    )
}

export default Home;