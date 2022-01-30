import React, {useEffect} from 'react';

const SignIn = () => {
    useEffect(() => {console.log(__filename, "SignIn-Component mounted.")}, [])
    return(
        <>
            SignIn-Component
        </>
    )
}
export default SignIn;