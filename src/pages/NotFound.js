import React, {useEffect} from 'react';
const NotFound = () => {
    useEffect(() => {console.log("NotFound-Component mounted");})
    return (
        <>Not Found 404 Error page</>
    )
}
export default NotFound;