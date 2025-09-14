
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admindashboard");
    } catch (error) {
      alert("Login failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white space-y-6">
      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-6 rounded-xl w-full max-w-md space-y-4 border border-purple-600/40"
      >
        <h1 className="text-2xl font-bold text-center mb-4">Admin Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 rounded-lg bg-black/40 border border-purple-600/30 text-white focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 rounded-lg bg-black/40 border border-purple-600/30 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* UI Box for showing entered email & password */}
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-md border border-purple-600/40 shadow-lg">
        <h2 className="text-xl font-semibold text-purple-400 mb-3">Entered Credentials</h2>
        <p className="text-gray-300">
          <span className="font-medium text-purple-400">Email:</span>{" "}
          {email || "Not entered"}
        </p>
        <p className="text-gray-300">
          <span className="font-medium text-purple-400">Password:</span>{" "}
          {password || "Not entered"}
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;

