import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../SheredComponent/Navbar';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link, Navigate } from 'react-router-dom';

const CheckOutList = () => {
    const { user } = useContext(AuthContext);
    const [checkOut, setCheckOut] = useState([])


    const url = (`http://localhost:3000/check_out?email=${user?.email}`);
    useEffect(() => {
        fetch(`http://localhost:3000/check_out?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                
                setCheckOut(data)
                // setLoading(true)
            })
    }, [])
    console.log(checkOut);

     const  handelDelete =(id)=>{
        const isConfirm = confirm('are your sure ')
        // setLoading(true)

        if(isConfirm){
            fetch(`http://localhost:3000/delete/${id}`,
            {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
              }
        )
            .then(res=>res.json())
            .then(data=>
            {
                console.log(data);
                if(data.deletedCount>0){

                    const reaminig =checkOut.filter(data=>data._id!==id)
                    console.log(reaminig);
                   setCheckOut(reaminig)
              
                   alert('delete success')
                  
                }
            })
        }



    }


    const handelEdit=(id)=>{

        <Navigate to={'/check_out_list/edit'}></Navigate>

        
    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl text-center my-4 bg-slate-200 font-bold ">CheckOut List</h1>

            <div className="">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                           checkOut.map((data, index) => <tr key={data._id}>
                                    <th>{index + 1}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.date}</td>

                                    <td><button onClick={()=>handelDelete(data._id)} className='btn btn-error'>Delete</button></td>
                                    <td> <Link to={`/check_out_list/edit/${data._id}`}><button onClick={()=>handelEdit(data._id)} className='btn btn-error'>Edit</button></Link></td>
                                </tr>)   }

                        </tbody>
                    </table>
                </div>


            </div>

        </div>
    );
};

export default CheckOutList;