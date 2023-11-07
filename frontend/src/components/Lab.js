import React, { useState, useEffect } from "react";
import Avatar from "../assets/images/Avatar.png";
import axios from "axios";
import LabEquimentsList from "./LabEquimentsList";

const Lab = ({ labName }) => {
  const [labIncharge, setLabIncharge] = useState(null);

  useEffect(() => {
    // Send a GET request to fetch users
    axios
      .get("http://localhost:8000/getUsers")
      .then((response) => {
        // Find the lab incharge whose role matches labName
        const incharge = response.data.find(
          (user) => user.role === `${labName} Incharge`
        );
        if (incharge) {
          setLabIncharge(incharge);
        }
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [labName]);

  if (!labIncharge) {
    return <div>Loading lab incharge details...</div>;
  }

  return (
	<div>
	<h1 className="text-3xl font-bold text-center">{labName}</h1>
	<div className="relative pt-24 mt-10 mb-10 ml-14">
	  {/* Overlapping image */}
	  <img
		src={Avatar}
		className="absolute w-40 rounded-full -top-4 -left-4"
		alt="User Avatar"
	  />
	  <div className="flex flex-col items-center justify-center h-full p-4 ml-8 space-y-4 bg-gray-200 w-min rounded-3xl">
		<p className="mt-8 text-2xl font-semibold text-gray-950">
		  {labIncharge.fullName}
		</p>
		<div className="flex flex-col justify-center w-full h-full p-4 space-y-1 bg-gray-100 rounded-3xl">
		  <p className="text-lg text-gray-700">{labIncharge.email}</p>
		  <p className="text-lg text-gray-700">{labIncharge.department}</p>
		  <p className="text-lg text-gray-700">{labIncharge.role}</p>
		  <p className="text-lg text-gray-700">{labIncharge.phoneNo}</p>
		  <a
			className="text-lg text-gray-700"
			href={`mailto:${labIncharge.email}`}
		  >
			{labIncharge.email}
		  </a>
		</div>
	  </div>
	</div>
	<div><LabEquimentsList/></div>
  </div>
 
  
  );
};

export default Lab;
