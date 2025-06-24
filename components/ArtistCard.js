export default function ArtistCard({ artist, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white shadow-md p-4 rounded hover:shadow-xl transition"
    >
      <h2 className="text-xl font-semibold">{artist.name}</h2>
      <p className="text-gray-500">{artist.category}</p>
      <p className="text-gray-500">{artist.location}</p>
      <p className="text-gray-500">{artist.fee}</p>
      <button className="mt-2 text-indigo-600 hover:underline text-sm">
        Ask for Quote
      </button>
    </div>
  );
}
