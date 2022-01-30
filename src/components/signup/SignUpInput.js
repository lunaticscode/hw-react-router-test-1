import React, {useEffect, useState} from 'react';

const SignUpInput = ({sumbitJoinData}) => {
    const [inputs, setInput] = useState({}); 

    const onChangeInput = ({target}) => {
        setInput({ ...inputs, [target.name]: target.value })    
    }
    const onClickSubmit = () => {
        //console.log(input)
        sumbitJoinData(inputs)
    }

    return (
        <>        
        <input name={"id"} onChange={onChangeInput} />
        <input name={"pw"} onChange={onChangeInput} />
        <button onClick={() => onClickSubmit()} >submit</button>
        </>

    )
}

export default SignUpInput;