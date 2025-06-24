import { Suspense } from "react";
import ArtistListingPage from "@/components/ArtistListingPage";

export const dynamic = "force-dynamic"; // (optional) if you're using dynamic data

export default function ArtistsPage() {
  return (
    <Suspense fallback={<div className="text-center mt-20 text-gray-500">Loading artists...</div>}>
      <ArtistListingPage />
    </Suspense>
  );
}
