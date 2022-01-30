import React, {useEffect} from 'react';
import SignUpInput from '../components/signup/SignUpInput';
const SignUp = () => {
    useEffect(() => {console.log("SignUp-Component mounted.")}, [])
    
    const sumbitJoinData = (value) => {
        console.log('SignUp Component', value);
        
    }
    
    return(
        <>
            <SignUpInput
                sumbitJoinData={sumbitJoinData}
            />
        </>
    )
}
export default SignUp;