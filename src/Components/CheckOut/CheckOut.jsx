import { useLoaderData } from "react-router-dom";
import Navbar from "../SheredComponent/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const CheckOut = () => {
    const serviceData = useLoaderData()
    const { user } = useContext(AuthContext);
    console.log(serviceData);

    const checkOutHandel = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const phone = form.phone.value
        const date = form.date.value
        const message = form.message.value


        const formData = {
            email, name, message, phone, date
        }
        console.log(formData);
        fetch(`http://localhost:3000/services/check_out`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)


        })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    alert('added booking')
                }
            })


    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl text-center my-4 bg-slate-200 font-bold ">CheckOut</h1>

            <div className="w-8/12 m-auto">


                <div>
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>{serviceData?.service_id}</p>
                            <h2 className="card-title">{serviceData?.title}</h2>
                            <p>{serviceData?.description}</p>


                        </div>

                    </div>
                </div>


            </div>

            <div className=" my-12 ">
                <h1 className="text-center text-2xl font-bold">CheckOut</h1>
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={checkOutHandel} className="card-body m-auto w-full">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" defaultValue={user?.email} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone No </span>
                            </label>
                            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date </span>
                            </label>
                            <input type="date" name="date" placeholder="" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" className="input input-bordered h-32"></textarea>

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Check Out</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default CheckOut;