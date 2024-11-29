import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function DelVendor() {
  const [users, setUsers] = useState([]); // State to store fetched users
  const [selectedUserId, setSelectedUserId] = useState(""); // State to store selected user's ID
  const [error, setError] = useState(""); // State for error messages
  const [message, setMessage] = useState(""); // State for success messages
  const navigate = useNavigate();
  const handleLogout = ()=>{
    navigate("/");
  }
  const handleHome = ()=>{
    navigate("/admin");
  }
  // Fetch all users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/vendors"); // API to fetch users
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch vendors.");
        }

        setUsers(data); // Set the users state
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  // Handle form submission to delete the selected user
  const handleDelete = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setMessage(""); // Clear previous success messages

    if (!selectedUserId) {
      setError("Please select a vendor.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/vendors/${selectedUserId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete user.");
      }

      setMessage("Vendor deleted successfully!");
      setUsers(users.filter((user) => user._id !== selectedUserId)); // Update the user list
      setSelectedUserId(""); // Reset the dropdown
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50">
        <div className="flex justify-between p-4"> 
            <button className="border border-black bg-black text-white px-6 py-2 rounded w-48" onClick={handleHome}>
              Home</button> 
            <button className="border border-black bg-black text-white px-6 py-2 rounded w-48" onClick={handleLogout}>
              LogOut</button> 
            </div> 
    <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
      <div className="text-2xl font-bold text-center mb-6">
        Delete Vendor
      </div>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>} {/* Error message */}
      {message && <div className="text-green-500 text-center mb-4">{message}</div>} {/* Success message */}

      <form onSubmit={handleDelete} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="user">
            Select Vendor to Delete
          </label>
          <select
            id="user"
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            required
          >
            <option value="">-- Select Vendor --</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.email}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition duration-150 ease-in-out"
          >
            Delete Vendor
          </button>
        </div>
      </form>
    </div>
    
  </div>
  );
}

export default DelVendor;

 
