import React, {useEffect} from 'react';

const Home = () => {
    useEffect(() => {console.log('Home-Component mounted')}, []);
    
    return (
        <>
            Home-Component
        </>
    )
}

export default Home;