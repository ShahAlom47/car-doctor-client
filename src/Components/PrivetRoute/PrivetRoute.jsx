import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(user?.email){

        return children
    }
    if(loading){

        return (
            <div className=" my-7 text-center text-3xl font-bold text-red-600 ">
                Loading....
            </div>
            );
    }
  
    return(
        <Navigate state={location.pathname} to={'/login'} replace></Navigate>
    )
    
};

export default PrivetRoute;