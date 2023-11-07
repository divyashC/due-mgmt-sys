import React, { useState, useEffect } from "react";

const StudentTable = ({ stdNo }) => {
	const [studentDues, setStudentDues] = useState([]);

	useEffect(() => {
		// Make an API call to fetch student dues based on the stdNo
		fetch(`http://localhost:8000/getDueByStudentNo/${stdNo}`)
			.then((response) => response.json())
			.then((data) => setStudentDues(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, [stdNo]);

	return (
		<>
			<div className="relative mx-12 mt-10 overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3">
								Sl No.
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Laboratory</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Incharge</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Amount</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Item Damaged</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Remarks</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<span className="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{studentDues.map((due, index) => (
							<tr className="bg-white border-b" key={due._id}>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
								>
									{index + 1}
								</th>
								<td className="px-6 py-4">{due.labName}</td>
								<td className="px-6 py-4">{due.labInchargeName}</td>
								<td className="px-6 py-4">{due.amount}</td>
								<td className="px-6 py-4">{due.item}</td>
								<td className="px-6 py-4">{due.remarks}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default StudentTable;
