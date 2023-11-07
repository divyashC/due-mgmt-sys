import React, { useState, useEffect } from "react";

const LabEquimentsList = ({ labName }) => {
    const [duesData, setDuesData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
  
    useEffect(() => {
      // Make an API call to fetch dues data
      fetch("http://localhost:8000/getDues")
        .then((response) => response.json())
        .then((data) => {
          const initialData = data.map((item) => ({ ...item, quantity: 0 }));
          setDuesData(initialData);
          setFilteredData(initialData);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []); // Make sure to include an empty dependency array to trigger the effect only once
    
    useEffect(() => {
      if (duesData.length > 0) {
        const updatedData = duesData.reduce((acc, current) => {
          const x = acc.find((item) => item.item === current.item);
          if (!x) {
            return acc.concat({ ...current, quantity: 1 });
          } else {
            return acc.map((item) =>
              item.item === current.item
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          }
        }, []);
        setFilteredData(updatedData);
      }
    }, [duesData]);
  
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
                  Sl No.
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">Laboratory</div>
                </th> */}
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">Item Damaged</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">Quantity</div>
                </th>
              </tr>
            </thead>
            <tbody>
            {filteredData.map((data, index) => {
            if (data.labName === labName) {
              // Use a local index counter for each laboratory
              const localIndex = filteredData
                .filter((item) => item.labName === labName)
                .indexOf(data) + 1;
              return (
                <tr className="bg-white border-b" key={index}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {localIndex}
                  </th>
                  {/* <td className="px-6 py-4">{data.labName}</td> */}
                  <td className="px-6 py-4">{data.item}</td>
                  <td className="px-6 py-4">{data.quantity}</td>
                </tr>
              );
            }
            return null; // Return null for data of other laboratories
          })}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default LabEquimentsList