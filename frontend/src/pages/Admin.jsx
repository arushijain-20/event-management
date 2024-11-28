import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
// import '../css/Admin.css'
import { useLocation } from "react-router-dom";


function Admin() {
  const [adminName, setAdminName] = useState("");
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
      navigate("/");
    }
    useEffect(() => {
      const name = localStorage.getItem("adminName");
      if (name) {
        setAdminName(name);
      } else {
        // Handle case if vendorName is not in localStorage (e.g., redirect to login page)
        // navigate("/login");
      }
    }, []);
        return (
          <div className="flex flex-col h-screen justify-between bg-slate-50 px-20"> 
          <div className="flex justify-between p-4"> 
            <button className="border border-black bg-black text-white px-6 py-2 rounded w-48" onClick={handleHome}>
              Home</button> 
            <button className="border border-black bg-black text-white px-6 py-2 rounded w-48" onClick={handleLogout}>
              LogOut</button> 
            </div> 
            <div className="flex flex-col items-center justify-center flex-grow space-y-4"> 
              <h1 className="text-2xl font-bold border border-black bg-white text-black px-8 py-3 rounded">Welcome {adminName}</h1>
               <button className="border border-black bg-black text-white px-8 py-2 rounded w-64" onClick={handleUser}>
                Maintain User</button> 
               <button className="border border-black bg-black text-white px-8 py-2 rounded w-64" onClick={handleVendor}>
                Maintain Vendor</button> 
               </div>
                </div>
                  );
    
}

export default Admin
