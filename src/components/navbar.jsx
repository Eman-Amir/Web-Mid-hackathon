
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 py-4 flex items-center justify-between shadow-md relative">
      {/* Logo */}
      <h1 className="text-2xl font-bold">Event Registration System</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
        <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-purple-400">About</Link></li>
        <li><Link to="/gallery" className="hover:text-purple-400">Gallery</Link></li>
        <li><Link to="/speakers" className="hover:text-purple-400">Speakers</Link></li>
        <li><Link to="/schedule" className="hover:text-purple-400">Schedule</Link></li>
        <li><Link to="/contact" className="hover:text-purple-400">Contact</Link></li>
      </ul>

      {/* Admin Login Button (Desktop) */}
      <div className="hidden md:block">
        <Link
          to="/Adminloginpage"
          className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 transition"
        >
          Admin Login
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-gray-300 flex flex-col items-center space-y-4 py-6 md:hidden z-50">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-purple-400">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-purple-400">About</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-purple-400">Gallery</Link>
          <Link to="/speakers" onClick={() => setIsOpen(false)} className="hover:text-purple-400">Speakers</Link>
          <Link to="/schedule" onClick={() => setIsOpen(false)} className="hover:text-purple-400">Schedule</Link>          
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-purple-400">Contact</Link>
          <Link
            to="/Adminloginpage"
            onClick={() => setIsOpen(false)}
            className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Admin Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
