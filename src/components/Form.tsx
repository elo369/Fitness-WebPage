import React, { useState } from "react";
import axios from "axios";

const JoinMemberForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  let url = import.meta.env.VITE_DB_ROUTE

  const handleJoin = async (e) => {
    
   try {
     e.preventDefault()
     console.log("Join clicked");
     console.log("Name:", name);
     console.log("Phone:", phone);
     let post = await axios.post(`http://localhost:5000/api/submit`,{
        name,
        number:phone
      })
      console.log(post)
 
   } catch (error) {
    console.log(error)
   }
  };




  return (
    <div className="flex flex-col items-center p-5 max-w-sm mx-auto bg-gradient-to-b from-orange-600 to-slate-900 rounded-2xl shadow-md  mb-6">
      <h2 className="text-xl font-semibold mb-4">Join Us</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded-md p-2 w-full mb-3 bg-transparent text-white font-semibold"
      />

      <input
        type="tel"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full mb-4 bg-transparent text-white font-semibold"
      />            

      <div className="flex gap-4">
        <button
          onClick={handleJoin}
          className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-bold"
        >
          Join Member
        </button>

       
      </div>
    </div>
  );
};

export default JoinMemberForm;
