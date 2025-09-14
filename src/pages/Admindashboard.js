

import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { signOut } from "firebase/auth";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", description: "", location: "", date: "" });

  // Fetch events from Firebase
  const fetchEvents = async () => {
    const snapshot = await getDocs(collection(db, "events"));
    setEvents(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  // Fetch users from Firebase
  const fetchUsers = async () => {
    const snapshot = await getDocs(collection(db, "registrations"));
    setUsers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Add Event
  const handleAddEvent = async () => {
    if (!newEvent.title || !newEvent.date) return alert("Title and Date are required");
    await addDoc(collection(db, "events"), { ...newEvent });
    setNewEvent({ title: "", description: "", location: "", date: "" });
    setShowAddEvent(false);
    fetchEvents();
  };

  // Delete Event
  const handleDeleteEvent = async (id) => {
    await deleteDoc(doc(db, "events", id));
    fetchEvents();
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/"; // redirect to login page
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-12 flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-gray-400 mt-1">Manage your events and registrations</p>
          </div>
          <div className="ml-auto">
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-pink-600 px-4 py-2 rounded-xl text-white font-medium hover:from-red-600 hover:to-pink-700 transition-all duration-200 shadow-md"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div
            onClick={() => setShowAddEvent(!showAddEvent)}
            className="group cursor-pointer bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{showAddEvent ? "Cancel" : "Add Event"}</h3>
                  <p className="text-gray-400 text-sm">Create new event</p>
                </div>
              </div>
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          <div
            onClick={async () => { await fetchUsers(); setShowUsers(!showUsers); }}
            className="group cursor-pointer bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-600/30 transition-all duration-300">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{showUsers ? "Hide Users" : "View Users"}</h3>
                  <p className="text-gray-400 text-sm">Manage registrations</p>
                </div>
              </div>
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Add Event Form */}
        {showAddEvent && (
          <div className="mb-8 animate-in slide-in-from-top duration-300">
            <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Create New Event</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-medium">Event Title *</label>
                  <input
                    type="text"
                    placeholder="Enter event title"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    className="w-full p-4 rounded-2xl bg-black/40 border border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-medium">Date *</label>
                  <input
                    type="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full p-4 rounded-2xl bg-black/40 border border-gray-600/50 text-white focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-medium">Location</label>
                  <input
                    type="text"
                    placeholder="Enter event location"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    className="w-full p-4 rounded-2xl bg-black/40 border border-gray-600/50 text-white placeholder-gray-400 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-medium">Description</label>
                  <input
                    type="text"
                    placeholder="Event description"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    className="w-full p-4 rounded-2xl bg-black/40 border border-gray-600/50 text-white placeholder-gray-400 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  />
                </div>
              </div>

              <button
                onClick={handleAddEvent}
                className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-2xl text-white font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl"
              >
                Create Event
              </button>
            </div>
          </div>
        )}

        {/* Users Table */}
        {showUsers && (
          <div className="mb-8 animate-in slide-in-from-top duration-300">
            <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Registered Users</h3>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm font-medium">{users.length} users</span>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-700/50">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gradient-to-r from-gray-800/60 to-gray-900/60">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Phone</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Event</th>
                      </tr>
                    </thead>
                    <tbody className="bg-black/20 divide-y divide-gray-700/50">
                      {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-800/30 transition-colors duration-200">
                          <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                              {user.name.charAt(0)}
                            </div>
                            <span className="text-white font-medium">{user.name}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-300">{user.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-300">{user.phone}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">{user.eventTitle}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Events Table */}
        <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">Events Management</h3>
              <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 text-sm font-medium">{events.length} events</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-700/50">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-gray-800/60 to-gray-900/60">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-black/20 divide-y divide-gray-700/50">
                  {events.map((ev) => (
                    <tr key={ev.id} className="hover:bg-gray-800/30 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-white font-semibold">{ev.title}</div>
                        {ev.description && <div className="text-gray-400 text-sm">{ev.description}</div>}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">{ev.date}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">{ev.location || "TBD"}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleDeleteEvent(ev.id)}
                          className="bg-gradient-to-r from-red-500 to-pink-600 px-4 py-2 rounded-xl text-white font-medium hover:from-red-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
