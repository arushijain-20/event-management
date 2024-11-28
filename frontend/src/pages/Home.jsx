import React from "react";
import { useNavigate } from "react-router-dom";
// import '../css/Home.css'

function Home() {
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate("/user-login"); 
    };

    const handleAdminClick = () => {
        navigate("/admin-login"); 
    };

    const handleVendorClick = () => {
        navigate("/vendor-login"); 
    };

    return ( 
        <div className="flex flex-col items-center justify-center h-screen bg-slate-50">
            <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8"> 
                <div className="text-2xl font-bold text-center mb-6"> Event Management System </div> 
                <div className="flex flex-col space-y-4"> 
                    <button className="w-full px-4 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition duration-150 ease-in-out" onClick={handleAdminClick}> 
                        Admin Login </button> 
                    <button className="w-full px-4 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition duration-150 ease-in-out" onClick={handleUserClick}>
                        User Login </button> 
                    <button className="w-full px-4 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition duration-150 ease-in-out" onClick={handleVendorClick}> 
                        Vendor Login </button> 
                 </div> 
            </div> 
         </div>
     )
}



export default Home



    

