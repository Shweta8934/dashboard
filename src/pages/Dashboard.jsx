// import React, { useState } from "react";
// import axios from "axios";

// const Dashboard = () => {
//     const [location, setLocation] = useState(null);
//     const [error, setError] = useState(null);
//     const API_KEY = "YOUR_OPENCAGE_API_KEY"; // Replace with your OpenCage API key

//     const getLocation = () => {
//         if ("geolocation" in navigator) {
//             navigator.geolocation.getCurrentPosition(
//                 async (position) => {
//                     const { latitude, longitude } = position.coords;
//                     try {
//                         const response = await axios.get(
//                             `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`
//                         );
//                         const { results } = response.data;
//                         if (results.length > 0) {
//                             setLocation(results[0].formatted);
//                         } else {
//                             setError("Location not found.");
//                         }
//                     } catch (err) {
//                         setError("Failed to fetch location.");
//                     }
//                 },
//                 (err) => {
//                     setError(err.message);
//                 }
//             );
//         } else {
//             setError("Geolocation is not supported by your browser.");
//         }
//     };

//     return (
//         <div className="p-4">
//             <button onClick={getLocation} className="px-4 py-2 bg-blue-500 text-white rounded">
//                 Get My Location
//             </button>
//             {location && <p className="mt-2">📍 {location}</p>}
//             {error && <p className="text-red-500">{error}</p>}
//         </div>
//     );
// };

// export default Dashboard;
