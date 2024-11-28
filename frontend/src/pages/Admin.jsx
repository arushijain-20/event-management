import React from 'react'
import { useNavigate } from "react-router-dom";
import '../css/Admin.css'

function Admin() {
    const navigate = useNavigate();

    const handleUser = () => {
      navigate("/admin/maintainUser");
    }

    const handleVendor = ()=>{
      navigate("/admin/maintainVendor");
    }
    const handleLogout = ()=>{
      navigate("/");
    }
    const handleHome = ()=>{
      navigate("/admin");
    }
        return (
          <div className="flex flex-col h-screen justify-between bg-slate-50 px-20"> 
          <div className="flex justify-between p-4"> 
            <button className="border border-black bg-black text-white px-6 py-2 rounded w-48" onClick={handleHome}>
              Home</button> 
            <button className="border border-black bg-black text-white px-6 py-2 rounded w-48" onClick={handleLogout}>
              LogOut</button> 
            </div> 
            <div className="flex flex-col items-center justify-center flex-grow space-y-4"> 
              <h1 className="text-2xl font-bold border border-black bg-white text-black px-8 py-3 rounded">Welcome Admin</h1>
               <button className="border border-black bg-black text-white px-8 py-2 rounded w-64" onClick={handleUser}>
                Maintain User</button> 
               <button className="border border-black bg-black text-white px-8 py-2 rounded w-64" onClick={handleVendor}>
                Maintain Vendor</button> 
               </div>
                </div>
                  );
    
}

export default Admin
