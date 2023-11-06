import React from 'react'

const Lab = () => {
    // Retrieve user data from local storage
	const userData = JSON.parse(localStorage.getItem("userDetails"));

	if (!userData) {
		// Handle the case when userData is not available in local storage
		return <div>No user data available</div>;
	}

  return (


    
    <div>
	<div className="relative pt-24 mt-10 mb-10 ml-14">
			{/* Overlapping image */}
			<img
				src={Avatar}
				className="absolute w-40 rounded-full -top-4 -left-4"
				alt="User Avatar"
			/>
			<div className="flex flex-col items-center justify-center h-full p-4 ml-8 space-y-4 bg-gray-200 w-min rounded-3xl">
				<p className="mt-8 text-2xl font-semibold text-gray-950">
					{userData.fullName}
				</p>
				<div className="flex flex-col justify-center w-full h-full p-4 space-y-1 bg-gray-100 rounded-3xl">
					{userData.userType === "Student" ? (
						<p className="text-lg text-gray-700">
							{userData.email.split("@")[0].split(".")[0]}
						</p>
					) : null}
					<p className="text-lg text-gray-700">{userData.department}</p>
					<p className="text-lg text-gray-700">{userData.role}</p>
					<p className="text-lg text-gray-700">{userData.phoneNo}</p>
					<a
						className="text-lg text-gray-700"
						href={`mailto:${userData.email}`}
					>
						{userData.email}
					</a>
				</div>
			</div>
		</div>
        <div>

<br></br>
        </div>
        <div>
        <h1>Equipment</h1>
        		<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3">
								SL No.
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Equipments</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Quantity</div>
							</th>
						
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
							>
								1
							</th>
							<td className="px-6 py-4">Equipmentname</td>
							<td className="px-6 py-4">12</td>
							
							
						</tr>

						<tr className="bg-white border-b">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
							>
								2
							</th>
							<td className="px-6 py-4">Equipmentname</td>
							<td className="px-6 py-4">12</td>
						</tr>
					</tbody>
				</table>
                </div>
                <div>
                    <br></br>
        <h1>Damaged Item Details</h1>
        		<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3">
								SL No.
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Equipments</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Quantity</div>
							</th>
						
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
							>
								1
							</th>
							<td className="px-6 py-4">Equipmentname</td>
							<td className="px-6 py-4">12</td>
							
							
						</tr>

						<tr className="bg-white border-b">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
							>
								2
							</th>
							<td className="px-6 py-4">Equipmentname</td>
							<td className="px-6 py-4">12</td>
						</tr>
					</tbody>
				</table>
                </div>
    </div>
    


  )
}

export default Lab;