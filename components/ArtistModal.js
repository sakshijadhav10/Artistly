export default function ArtistModal({ artist, onClose }) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-xl relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
          >
            ×
          </button>
          <h2 className="text-2xl font-bold text-indigo-700">{artist.name}</h2>
          <p className="mt-2 text-gray-700">{artist.bio}</p>
          <ul className="mt-4 text-sm text-gray-600">
            <li><strong>Category:</strong> {artist.category}</li>
            <li><strong>Location:</strong> {artist.location}</li>
            <li><strong>Fee:</strong> {artist.fee}</li>
          </ul>
          <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Request Booking
          </button>
        </div>
      </div>
    );
  }
  