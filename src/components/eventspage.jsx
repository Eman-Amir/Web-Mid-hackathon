
import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
    const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔹 One-time seed data
  const seedEvents = async () => {
    const sampleEvents = [
      {
        title: "React Workshop",
        date: "2025-09-15",
        description: "Learn React fundamentals in this 3-hour session.",
        location: "Saylani Tech Center, FSD",
      },
      {
        title: "AI Bootcamp",
        date: "2025-09-20",
        description: "Hands-on introduction to Artificial Intelligence.",
        location: "Tech Valley, Islamabad",
      },
      {
        title: "Cloud Computing Summit",
        date: "2025-09-25",
        description: "Explore the future of cloud solutions with experts.",
        location: "Expo Center, Karachi",
      },
      {
        title: "JavaScript Hackathon",
        date: "2025-09-30",
        description: "Compete in teams to build the best JS apps in 24 hours.",
        location: "LUMS, Lahore",
      },
      {
        title: "UI/UX Design Meetup",
        date: "2025-10-05",
        description: "Discuss modern UI/UX trends with industry leaders.",
        location: "NED University, Karachi",
      },
      {
        title: "Cybersecurity Conference",
        date: "2025-10-10",
        description: "Stay ahead of hackers with the latest security tools.",
        location: "FAST University, Islamabad",
      },
    ];

    try {
      const eventsRef = collection(db, "events");
      const snapshot = await getDocs(eventsRef);

      if (snapshot.empty) {
        console.log("🌱 Seeding sample events...");
        for (let ev of sampleEvents) {
          await addDoc(eventsRef, ev);
        }
        console.log("✅ Sample events added!");
      }
    } catch (err) {
      console.error("Error seeding events:", err);
    }
  };

  // 🔹 Fetch events
  const fetchEvents = async () => {
    try {
      await seedEvents();

      const querySnapshot = await getDocs(collection(db, "events"));
      let eventsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Shuffle and pick 6 random events
      eventsList = eventsList.sort(() => Math.random() - 0.5).slice(0, 6);

      console.log("Random 6 events:", eventsList);
      setEvents(eventsList);
    } catch (error) {
      console.error("Error fetching events: ", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // 🔹 Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "registrations"), {
        ...formData,
        eventId: selectedEvent.id,
        eventTitle: selectedEvent.title,
        createdAt: new Date(),
      });

      // Redirect to success page
      navigate("/success");
    } catch (error) {
      console.error("Error registering: ", error);
      alert("❌ Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white px-6 md:px-12 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Upcoming Events</h1>

      {events.length === 0 ? (
        <p className="text-center text-gray-400">No events available yet.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gradient-to-br from-purple-700/20 via-purple-900/20 to-black border border-purple-600/30 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300"
            >
              {/* Card Body */}
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                <p className="text-sm text-gray-300">📍 {event.location}</p>
                <p className="text-sm text-gray-400 mt-2">📅 {event.date}</p>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3 bg-black/30 border-t border-purple-600/20 text-sm flex justify-between items-center">
                <span className="text-gray-400">Free Entry</span>
                <button
                  onClick={() => {
                    setSelectedEvent(event);
                    setShowForm(true);
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

{showForm && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-gray-900 p-6 rounded-2xl w-full max-w-md border border-purple-600/40">
      <h2 className="text-2xl font-bold mb-4">
        Register for {selectedEvent?.title}
      </h2>
      <form onSubmit={handleRegister} className="space-y-4">
        {/* Selected Event Field (Read-only) */}
        <input
          type="text"
          name="eventTitle"
          value={selectedEvent?.title || ""}
          readOnly
          className="w-full p-3 rounded-lg bg-black/40 border border-purple-600/30 text-gray-300 focus:outline-none cursor-not-allowed"
        />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-black/40 border border-purple-600/30 text-white focus:outline-none"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-black/40 border border-purple-600/30 text-white focus:outline-none"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone"
          required
          className="w-full p-3 rounded-lg bg-black/40 border border-purple-600/30 text-white focus:outline-none"
        />

        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
          >
            {loading ? "Registering..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default EventsPage;

