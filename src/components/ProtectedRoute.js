import {Navigate, Outlet, Route} from 'react-router-dom'

// Step 1: Our protected route accepts the component and other route details as props
const ProtectedRoute = ({conponent: Component, ...otherProps}) =>{
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    // Now based on authenticated value, we will either show 
    // if authenticated, show Dashboard else redirect to login page

    return isAuthenticated ? <Outlet/>: <Navigate to="/" />

    //--------
    // This code os for V5 router
    //-------
    // return (
    //     <Route  
    //         {...otherProps}
    //         render={(props)=>
    //             isAuthenticated ? <Component {...props}/> : <Navigate replace to="/"/>}
    //     />
    // )
}

export default ProtectedRoute;
