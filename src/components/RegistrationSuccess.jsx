import React from "react";
import { Link } from "react-router-dom";

const RegistrationSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white px-6">
      <h1 className="text-4xl font-bold mb-4">✅ Registration Successful!</h1>
      <p className="text-gray-400 mb-6">Thank you for registering. We will contact you soon.</p>
      <Link
        to="/eventspage"
        className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
      >
        Back to Events
      </Link>
    </div>
  );
};

export default RegistrationSuccess;
