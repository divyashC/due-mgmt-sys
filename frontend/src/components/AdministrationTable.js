import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar.js";

const AdministrationTable = () => {
    const [duesData, setDuesData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        // Make an API call to fetch dues data
        fetch("http://localhost:8000/getDues")
            .then((response) => response.json())
            .then((data) => setDuesData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const filteredDuesData = duesData.filter(
        (data) =>
            data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            data.stdNo.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="flex items-center justify-center mt-8 mb-10">
                <SearchBar
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="relative mx-12 mt-10 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                SL No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Name</div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Student No.</div>
                            </th>
                            {/* Add more table headers as needed */}
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Lab</div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Amount</div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Status</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDuesData.map((data, index) => (
                            <tr className="bg-white border-b" key={index}>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4">{data.name}</td>
                                <td className="px-6 py-4">{data.stdNo}</td>
                                {/* Add more table cells as needed */}
                                <td className="px-6 py-4">{data.labName}</td>
                                <td className="px-6 py-4">Nu. {data.amount}</td>
                                <td className="px-6 py-4 text-start">{data.dues}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AdministrationTable;
