export default function UpcomingEvent() {
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'workshop':
        return 'bg-blue-100 text-blue-800';
      case 'mentoring':
        return 'bg-purple-100 text-purple-800';
      case 'seminar':
        return 'bg-pink-100 text-pink-800';
      case 'bootcamp':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "English everyday",
      date: "1 Feb 2025",
      time: "13:00 - 15:00",
      location: "Online via Zoom",
      category: "Workshop",
      image: "https://placehold.co/600x400",
      price: "Free"
    },
    {
      id: 2,
      title: "Mentoring AI untuk orang IT",
      date: "15 Mar 2025",
      time: "09:00 - 12:00",
      location: "Lab Komputer UNIPI",
      category: "Mentoring",
      image: "https://placehold.co/600x400",
      price: "Rp 75.000"
    },
    {
      id: 3,
      title: "Design software",
      date: "5 Apr 2025",
      time: "14:00 - 17:00",
      location: "Aula UNIPI",
      category: "Workshop",
      image: "https://placehold.co/600x400",
      price: "Rp 50.000"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
      {upcomingEvents.map((event) => (
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
              <span className={`${getCategoryColor(event.category)} text-xs font-medium px-2.5 py-0.5 rounded`}>
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
              className="inline-block w-full text-white text-center px-6 py-2 rounded-lg transition-all duration-300 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:scale-[1.02] hover:shadow-lg hover:from-green-500 hover:via-green-600 hover:to-green-700 transform hover:-translate-y-0.5"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}