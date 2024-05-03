import { Link } from "react-router-dom";
import Login from "../Authentication/Login";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {
    const nav = <>
            <Link to={'/'}><li><a>Home</a></li></Link>
            <Link to={'/check_out_list'}><li><a>Check Out List </a></li></Link>
      
          
        </>

const {user,userLogout}=useContext(AuthContext)

const handelLogin =()=>{

    userLogout()
    .then((userCredential) => {

        alert("logout full")

    })
    .catch((error) => {
      
        const errorMessage = error.message;
        console.log(errorMessage);
   
    });
}


    return (
        <div>
            
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {nav}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Car Doctor</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {nav}
                    </ul>
                </div>
                <div className="navbar-end">
                    <h1>{user?.email}</h1>
                   <Link to={'/login'}> <button className="btn">Login </button> </Link>
                   <Link to={'/register'}> <button className="btn">Register </button> </Link>
                   <button onClick={()=>handelLogin()} className="btn bg-red-400">LogOut </button> 
                </div>
            </div>

        </div>
    );
};

export default Navbar;