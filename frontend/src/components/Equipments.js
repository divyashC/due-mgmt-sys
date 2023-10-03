import React from "react";

const Equipments = () => {
	return (
		<div className="flex flex-col items-center align-middle">
			<h2 className="my-10 text-2xl font-semibold text-sky-950">
				List of Damaged Equipments
			</h2>
			<div className="relative w-full mb-20 overflow-x-auto shadow-md mx-30 sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3">
								SL No.
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Laboratory</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Item Damaged</div>
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
							<td className="px-6 py-4">Chemistry Lab</td>
							<td className="px-6 py-4">Beaker</td>
							<td className="px-6 py-4">20</td>
						</tr>
						<tr className="bg-white border-b">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
							>
								2
							</th>
							<td className="px-6 py-4">Physics Lab</td>
							<td className="px-6 py-4">Sono Meter</td>
							<td className="px-6 py-4">3</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Equipments;
