"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

// Validation Schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  categories: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
});

const categoryOptions = ["Singer", "Dancer", "DJ", "Speaker"];
const languageOptions = ["English", "Hindi", "Marathi", "Punjabi"];
const feeOptions = ["₹5,000 - ₹10,000", "₹10,000 - ₹20,000", "₹20,000+"];

export default function OnboardArtistPage() {
  const [image, setImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      categories: [],
      languages: [],
      feeRange: "",
      location: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Submitted data:", { ...data, image });
    alert("Artist submitted! Check console.");
    reset();
    setImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-white to-indigo-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          🎭 Artist Onboarding Form
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              {...register("name")}
              placeholder="Enter artist name"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              {...register("bio")}
              placeholder="Short artist bio"
              rows="3"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <p className="text-red-500 text-sm">{errors.bio?.message}</p>
          </div>

          {/* Categories (checkbox group) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categories
            </label>
            <div className="grid grid-cols-2 gap-3">
              {categoryOptions.map((cat) => (
                <label key={cat} className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" value={cat} {...register("categories")} />
                  {cat}
                </label>
              ))}
            </div>
            <p className="text-red-500 text-sm">{errors.categories?.message}</p>
          </div>

          {/* Languages (checkbox group) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Languages Spoken
            </label>
            <div className="grid grid-cols-2 gap-3">
              {languageOptions.map((lang) => (
                <label key={lang} className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" value={lang} {...register("languages")} />
                  {lang}
                </label>
              ))}
            </div>
            <p className="text-red-500 text-sm">{errors.languages?.message}</p>
          </div>

          {/* Fee Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fee Range
            </label>
            <select
              {...register("feeRange")}
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="">Select range</option>
              {feeOptions.map((fee) => (
                <option key={fee} value={fee}>
                  {fee}
                </option>
              ))}
            </select>
            <p className="text-red-500 text-sm">{errors.feeRange?.message}</p>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              {...register("location")}
              placeholder="City or state"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <p className="text-red-500 text-sm">{errors.location?.message}</p>
          </div>

          {/* Profile Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Image (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="block w-full"
            />
            {image && <p className="text-sm text-green-600 mt-1">Selected: {image.name}</p>}
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md text-lg shadow"
            >
              Submit Artist
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
