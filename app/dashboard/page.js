"use client";

import { useState, useEffect } from "react";

// Manager Dashboard Page
export default function ManagerDashboardPage() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch("/data/artists.json")
      .then((res) => res.json())
      .then((data) => {
        setSubmissions(data);
      })
      .catch((err) => console.error("Error loading submissions:", err));
  }, []);

  const handleView = (artist) => {
    alert(`Viewing profile for: ${artist.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          📋 Manager Dashboard
        </h1>

        {submissions.length > 0 ? (
          <Table data={submissions} onView={handleView} />
        ) : (
          <p className="text-gray-500 text-center mt-10">No submissions yet.</p>
        )}
      </div>
    </div>
  );
}

// ✅ Reusable Table Component
function Table({ data, onView }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 text-sm text-left">
        <thead className="bg-indigo-100 text-indigo-800">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">City</th>
            <th className="px-4 py-3">Fee</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((artist, idx) => (
            <tr
              key={artist.id}
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-4 py-3 font-medium">{artist.name}</td>
              <td className="px-4 py-3">{artist.category}</td>
              <td className="px-4 py-3">{artist.location}</td>
              <td className="px-4 py-3">{artist.fee}</td>
              <td className="px-4 py-3">
                <button
                  onClick={() => onView(artist)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded text-sm"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
