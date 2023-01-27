import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PreventSignIn = (props) => { 
    const users = useSelector(state => state.users);
    let location = useLocation();
  

    if(users.auth){
        return <Navigate to="/dashboard" state={{ from:location }} replace/>
    }

    return props.children   // return children cuz will wrap whatever route that need to be guarded.
}

export default PreventSignIn;