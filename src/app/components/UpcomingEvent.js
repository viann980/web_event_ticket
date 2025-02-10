export default function UpcomingEvent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
      {[
        {
          title: "English everyday",
          date: "SENIN, 1 FEBRUARI 2025",
          image: "https://placehold.co/600x400"
        },
        {
          title: "Mentoring AI untuk orang IT",
          date: "RABU, 15 MARET 2025",
          image: "https://placehold.co/600x400"
        },
        {
          title: "Design software",
          date: "SABTU, 5 APRIL 2025",
          image: "https://placehold.co/600x400"
        }
      ].map((event, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
          <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <p className="text-orange-500 text-sm">{event.date}</p>
            <h3 className="font-semibold mt-2 text-lg">{event.title}</h3>
            <a href="#" className="mt-4 inline-block">
              <span className="text-2xl">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}