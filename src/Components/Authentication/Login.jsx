import { useContext } from "react";
import Navbar from "../SheredComponent/Navbar";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";



const Login = () => {
  const { user, userLogin } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()



  const registerHandel = (e) => {
    e.preventDefault()

    const form = e.target
    const email = form.email.value
    const password = form.password.value

    const formData = {
      email, password
    }

    console.log(formData);
    userLogin(email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        const userEmail = {email}

        axios.post('http://localhost:3000/jwt', userEmail, { withCredentials: true })
          .then(function (response) {
            console.log(response.data);
            if (response.data.success) {
              alert("create success full")
              navigate(location?.state ? location?.state : '/')
            }
          })
          .catch(function (error) {
            console.log(error);
          });



      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  }




  return (
    <div className="m-auto">
      <Navbar></Navbar>

      <h1 className="text-3xl text-center ">Login</h1>

      <div className="card shrink-0 w-full shadow-2xl bg-base-100">
        <form onSubmit={registerHandel} className="card-body m-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Login;