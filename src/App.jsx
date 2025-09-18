import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import EventsPage from "./components/eventspage"; 
import About from "./pages/about";
import Gallery from "./pages/Gallery";
import Speakers from "./pages/Speakers";
import Schedule from "./pages/Schedule";
import Contact from "./pages/contact";

import AdminLogin from "./pages/Adminloginpage";
import AdminDashboard from "./pages/Admindashboard";
import Footer from "./components/footer";
import RegistrationSuccess from "./components/RegistrationSuccess";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventspage" element={<EventsPage />} /> {/* ✅ */}
        <Route path="/success" element={<RegistrationSuccess />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminloginpage" element={<AdminLogin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        
      </Routes>
     
    <Footer/>

    </Router>
  );
}

export default App;




