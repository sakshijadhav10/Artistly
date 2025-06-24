import Link from "next/link";

export default function HomePage() {
  const categories = [
    { name: "Singers", color: "bg-pink-100", emoji: "🎤" },
    { name: "Dancers", color: "bg-yellow-100", emoji: "💃" },
    { name: "DJs", color: "bg-blue-100", emoji: "🎧" },
    { name: "Speakers", color: "bg-green-100", emoji: "🎙️" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🎭 Artistly</h1>
          <nav className="space-x-4 text-sm font-medium">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/artists" className="hover:text-gray-300">Explore Artists</Link>
            <Link href="/onboard" className="hover:text-gray-300">Onboard Artist</Link>
            <Link href="/dashboard" className="hover:text-gray-300">
  
    Manager Dashboard
  
</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Book the Perfect Performing Artist for Your Next Event
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Explore a variety of artists and connect directly with managers.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/artists">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium">
                Explore Artists
              </button>
            </Link>
            <Link href="/onboard">
              <button className="bg-white text-indigo-700 border border-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-full font-medium">
                Onboard an Artist
              </button>
            </Link>
          
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6 bg-white">
  <div className="max-w-5xl mx-auto text-center">
    <h3 className="text-3xl font-bold text-gray-800 mb-4">Explore by Category</h3>
    <p className="text-gray-500 mb-10">
      Find talented professionals across a wide variety of categories.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          href={`/artists?category=${cat.name}`}
          className="block"
        >
          <div className={`p-6 border rounded-lg shadow hover:shadow-lg text-center cursor-pointer ${cat.color}`}>
            <div className="text-3xl mb-2">{cat.emoji}</div>
            <p className="text-lg font-medium text-gray-800">{cat.name}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

    </main>
  );
}
