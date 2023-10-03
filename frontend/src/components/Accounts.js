import React from 'react'

const Accounts = () => {
  return (
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
  )
}

export default Accounts