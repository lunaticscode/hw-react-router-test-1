import React, {useEffect} from 'react';
const CounterResultInnerView = ({number}) => {
    useEffect(() => {
        //console.log('CounterResultInnerView-component mounted');
    })
    return(
        <div>
            inner_number : {number}
        </div>
    )
}
export default CounterResultInnerView;