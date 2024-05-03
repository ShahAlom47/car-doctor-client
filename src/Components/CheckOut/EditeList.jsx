import { useLoaderData } from "react-router-dom";
import Navbar from "../SheredComponent/Navbar";


const EditeList = () => {
const previeusData= useLoaderData()

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
    
        fetch(`http://localhost:3000/update/${previeusData._id}`,{

        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'  
        },
        body: JSON.stringify(formData),
    })
    
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    if(data.modifiedCount>0){
    alert('update successfully')
    
    }
    
    })


    }
    return (
        <div>
             <Navbar></Navbar>
            <h1 className="text-3xl text-center my-4 bg-slate-200 font-bold ">CheckOut List Edit</h1>
            <div>
            <div className=" my-12 ">
           
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={checkOutHandel} className="card-body m-auto w-full">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" defaultValue={previeusData.name} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" defaultValue={previeusData.email}  required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone No </span>
                            </label>
                            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered" defaultValue={previeusData.phone} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date </span>
                            </label>
                            <input type="date" name="date" placeholder="" className="input input-bordered" required defaultValue={previeusData.date} />
                        </div>
                        <div className="form-control">
                            <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" className="input input-bordered h-32" defaultValue={previeusData.message}></textarea>

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Check Out</button>
                        </div>
                    </form>
                </div>

            </div>

            </div>
            
        </div>
    );
};

export default EditeList;