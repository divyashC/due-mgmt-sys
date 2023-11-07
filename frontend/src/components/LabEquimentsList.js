import React from 'react'

const LabEquimentsList = () => {
  return (
    <>
   

    

    <div className="relative mx-12 mt-10 overflow-x-auto shadow-md sm:rounded-lg">
  <h1 className="mb-4 font-bold text-center text-1xl">Equipments Damaged</h1>
  <table className="w-full text-sm text-left text-gray-500">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3">
          SL No.
        </th>
        <th scope="col" className="px-6 py-3">
          <div className="flex items-center">Equipment Name</div>
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
        <td className="px-6 py-4">Sonometer</td>
        <td className="px-6 py-4">22</td>
      </tr>
      {/* Add a new row for the second student */}
    </tbody>
  </table>
</div>


    
  
  
    </>
  )
}

export default LabEquimentsList