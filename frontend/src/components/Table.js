import React from "react";

const Table = () => {
	return <div>
		
		Dues< br>
		</br>
		
		
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   SL No.
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                       Laboratory
                        <a href="#"><svg class="w-3 h-3 ml-1.5" aria-hidden="true"  fill="currentColor" viewBox="0 0 24 24">
    <path/>
  </svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Incharge
                        <a href="#"><svg class="w-3 h-3 ml-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
    <path />
  </svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Amount
                        <a href="#"><svg class="w-3 h-3 ml-1.5" aria-hidden="true"  fill="currentColor" viewBox="0 0 24 24">
    <path />
  </svg></a>
                    </div>
                </th>
				<th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Remarks
                        <a href="#"><svg class="w-3 h-3 ml-1.5" aria-hidden="true"  fill="currentColor" viewBox="0 0 24 24">
    <path />
  </svg></a>
                    </div>
                </th>
				<th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Action
                        <a href="#"><svg class="w-3 h-3 ml-1.5" aria-hidden="true"  fill="currentColor" viewBox="0 0 24 24">
    <path />
  </svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>

				
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
				<td class="px-6 py-4">
                    $2999
                </td>
				
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2
                </th>
                <td class="px-6 py-4">
                    White
                </td>
				<td class="px-6 py-4">
                    $2999
                </td>
				
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

		
		</div>;



};

export default Table;
