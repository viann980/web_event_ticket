"use client";
import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Events() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample event data - replace with real data later
  const events = [
    {
      id: 1,
      title: "Workshop UI/UX Design",
      date: "15 Feb 2025",
      time: "09:00 - 12:00",
      location: "Online via Zoom",
      category: "Workshop",
      image: "https://placehold.co/600x400",
      price: "Rp 50.000"
    },
    {
      id: 2,
      title: "Seminar Artificial Intelligence",
      date: "20 Feb 2025",
      time: "13:00 - 16:00",
      location: "Aula UNIPI",
      category: "Seminar",
      image: "https://placehold.co/600x400",
      price: "Free"
    },
    {
      id: 3,
      title: "Bootcamp Web Development",
      date: "1 Mar 2025",
      time: "09:00 - 17:00",
      location: "Lab Komputer UNIPI",
      category: "Bootcamp",
      image: "https://placehold.co/600x400",
      price: "Rp 150.000"
    },
    // Add more events here
  ];

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Event HMSE"
        description="Temukan berbagai event menarik dari HMSE UNIPI"
      />

      <div className="container mx-auto px-4 py-12 md:py-32">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4 bg-white p-2 rounded-2xl shadow-lg">
            <input
              type="text"
              placeholder="Cari event berdasarkan nama, kategori, atau lokasi"
              className="flex-1 px-4 py-3 text-gray-600 text-base sm:text-lg focus:outline-none placeholder:text-gray-300 rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="px-6 sm:px-12 py-3 bg-orange-400 text-white rounded-xl hover:bg-orange-500 transition-colors uppercase text-base sm:text-lg font-medium tracking-wide w-full sm:w-auto">
              Cari
            </button>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "Workshop", "Seminar", "Bootcamp"].map((category) => (
            <button
              key={category}
              onClick={() => setSearchQuery(category === "All" ? "" : category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                (category === "All" && searchQuery === "") || 
                searchQuery === category
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {event.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded shadow">
                    {event.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p className="flex items-center">
                    <i className="fas fa-calendar-alt w-5"></i>
                    {event.date}
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-clock w-5"></i>
                    {event.time}
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-map-marker-alt w-5"></i>
                    {event.location}
                  </p>
                </div>
                <a
                  href={`/events/${event.id}`}
                  className="inline-block w-full bg-green-500 text-white text-center px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">
              Tidak ada event yang ditemukan
            </h3>
            <p className="text-gray-500 mt-2">
              Coba cari dengan kata kunci lain
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
