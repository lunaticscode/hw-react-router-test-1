import React, {useEffect} from 'react';

const Home = () => {
    useEffect(() => {console.log('Main-Component mounted')}, []);
    
    return (
        <>
            Main-Component
        </>
    )
}

export default Home;