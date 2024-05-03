import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const OurService = () => {

    const [service, setService] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    // console.log(service);

    return (
        <div>
            <h1 className="text-3xl text-center my-4 bg-slate-200 font-bold ">Our Service</h1>
            <div className="grid grid-cols-3  gap-5">
                {
                    service.map((data, index) => <div key={index} className="card  bg-base-100 shadow-xl">
                        <figure><img src={data.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{data.title}</h2>
                            <p>Price : {data.price}</p>
                            <div className="card-actions justify-end">
                             <Link to={`/check_out/${data._id}`} >    <button className="btn btn-primary">CheckOut</button> </Link>
                            </div>

                        </div>
                    </div>)
                }

            </div>

        </div>
    );
};

export default OurService;