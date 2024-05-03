import { useContext } from "react";
import Navbar from "../SheredComponent/Navbar";
import { AuthContext } from "../../../AuthProvider/AuthProvider";




const Register = () => {
    const { user, userRegister } = useContext(AuthContext);

    const loginHandel = (e) => {
        e.preventDefault()

        const form = e.target 
        const email = form.email.value
        const password = form.password.value

        const formData = {
            email,password
        }

console.log(formData);
        userRegister(email,password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log('okkk');
                alert("create success full")

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    }





    return (
        <div>
            <Navbar></Navbar>

            <h1 className="text-3xl text-center ">Register</h1>

            <div className="card shrink-0 w-full m-auto shadow-2xl bg-base-100">
                <form onSubmit={loginHandel} className="card-body m-auto w-full">
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
                            <a href="#" className="label-text-alt link link-hover">Already have an Account</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;