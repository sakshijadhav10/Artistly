"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";
import FilterBlock from "./FilterBlock";
import ArtistModal from "./ArtistModal";

export default function ArtistListingPage() {
  const searchParams = useSearchParams();
  const defaultCategory = searchParams.get("category");

  const [artists, setArtists] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState(defaultCategory || "All");
  const [location, setLocation] = useState("All");
  const [fee, setFee] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/data/artists.json")
      .then((res) => res.json())
      .then((data) => {
        setArtists(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    const result = artists.filter((a) => {
      const matchCategory = category === "All" || a.category === category;
      const matchLocation = location === "All" || a.location === location;
      const matchFee = fee === "All" || a.fee === fee;
      const matchSearch =
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.bio?.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchLocation && matchFee && matchSearch;
    });
    setFiltered(result);
  }, [category, location, fee, search, artists]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center text-indigo-700">
          🎨 Browse Artists
        </h1>

        <input
          type="text"
          placeholder="Search by name or bio..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 px-4 py-2 border rounded"
        />

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <FilterBlock
            label="Category"
            value={category}
            setValue={setCategory}
            options={["All", "Singer", "Dancer", "DJ", "Speaker"]}
          />
          <FilterBlock
            label="Location"
            value={location}
            setValue={setLocation}
            options={["All", "Mumbai", "Delhi", "Bangalore", "Pune"]}
          />
          <FilterBlock
            label="Fee"
            value={fee}
            setValue={setFee}
            options={["All", "₹5,000 - ₹10,000", "₹10,000 - ₹20,000", "₹20,000+"]}
          />
        </div>

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} onClick={() => setSelected(artist)} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">No matching artists.</p>
        )}

        {selected && <ArtistModal artist={selected} onClose={() => setSelected(null)} />}
      </div>
    </div>
  );
}
