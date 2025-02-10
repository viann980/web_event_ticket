import PageHeader from "../components/PageHeader";

export default function Blog() {
  const blogPosts = Array(9).fill({
    title: "Belajar Microsoft Excel dalam 7 Hari",
    category: "Excel",
    image: "https://placehold.co/600x400",
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Halaman Blog"
        description="Kami menyediakan blog seputar teknologi"
      />

      <div className="container mx-auto px-4  py-12 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-4">{post.title}</h3>
                <a
                  href="#"
                  className="inline-block text-2xl transition-transform hover:translate-x-2"
                >
                  →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
