import React from "react";

const Table = () => {
	return <div>
		
		Dues< br>
		</br>
		
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Student ID Number" required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
<br></br>
<br></br>
		
		
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
                        Item Damaged 

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
                    Physics Lab
                </td>
                <td class="px-6 py-4">
                    Sonam Thinley
                </td>
                <td class="px-6 py-4">
                   Nu.340
                </td>
				<td class="px-6 py-4">
                   2 Magnifying Class <br>
						</br>

					Sonometer
                </td>
				
                <td class="px-6 py-4 text-right">
                Not Paid

				
                </td>
            </tr>
            
			<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td class="px-6 py-4">
                    Physics Lab
                </td>
                <td class="px-6 py-4">
                    Sonam Thinley
                </td>
                <td class="px-6 py-4">
                   Nu.340
                </td>
				<td class="px-6 py-4">
                   2 Magnifying Class <br>
						</br>

					Sonometer
                </td>
				
                <td class="px-6 py-4 text-right">
                Not Paid

				
                </td>
            </tr>
            
            
        </tbody>
    </table>
</div>

		
		</div>;



};

export default Table;
