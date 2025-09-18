
import React, { useState } from "react";
import { Mail, User, Phone, MapPin, Info } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear fields
    setFormData({ email: "", name: "", message: "" });

    // Show confirmation
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="bg-gray-200 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-700 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Have questions about our event registration system? Reach out to us
            and we’ll get back to you!
          </p>
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 rounded-2xl shadow-lg p-8 sm:p-10 max-w-3xl mx-auto mb-16">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Email */}
            <div className="flex items-center bg-gray-800 rounded-lg px-4">
              <Mail className="text-neonBlue mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-transparent py-3 text-gray-200 focus:outline-none"
                required
              />
            </div>

            {/* Name */}
            <div className="flex items-center bg-gray-800 rounded-lg px-4">
              <User className="text-neonBlue mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-transparent py-3 text-gray-200 focus:outline-none"
                required
              />
            </div>

            {/* Message */}
            <div className="sm:col-span-2 flex items-start bg-gray-800 rounded-lg px-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="4"
                className="w-full bg-transparent py-3 text-gray-200 focus:outline-none resize-none"
                required
              />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2 text-center">
              <button
                type="submit"
                className="bg-neonBlue  text-gray-200  px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_15px_#00f7ff] hover:-translate-y-0.5"
              >
                Submit
              </button>

              {/* Success message */}
              {sent && (
                <p className="text-neonBlue mt-4 font-semibold">
                  ✅ Message Sent!
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 rounded-xl p-6 shadow-md hover:shadow-[0_0_20px_#00f7ff] transition">
            <Info className="mx-auto text-neonBlue w-10 h-10 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">About Us</h3>
            <p className="text-gray-400 text-sm">
              Event Registration System <br /> Workshops & Conferences
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 rounded-xl p-6 shadow-md hover:shadow-[0_0_20px_#00f7ff] transition">
            <Phone className="mx-auto text-neonBlue w-10 h-10 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
            <p className="text-gray-400 text-sm">
              +92 300 1234567 <br /> +92 311 9876543
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 rounded-xl p-6 shadow-md hover:shadow-[0_0_20px_#00f7ff] transition">
            <MapPin className="mx-auto text-neonBlue w-10 h-10 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Location</h3>
            <p className="text-gray-400 text-sm">
              Event HQ <br /> Karachi, Pakistan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

