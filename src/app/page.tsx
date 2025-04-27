"use client"; // mark this file as a Client Component

import { useState } from "react"; // import useState hook
import { useRouter } from "next/navigation"; // import useRouter for navigation
import Layout from "../app/components/Layout"; // import Layout component

export default function HomePage() {
  const [bookingId, setBookingId] = useState(""); // create state for booking ID
  const router = useRouter(); // get router to navigate pages

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent page refresh
    router.push(`/dashboard?bookingId=${bookingId}`); // navigate to dashboard with booking ID
  };

  return (
    <Layout> {/* Layout wrapper for page */}
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold text-center mb-6">eSIM Manager</h1>
        <form onSubmit={handleSubmit} className="space-y-4"> {/* form to submit booking ID */}
          <div>
            <label
              htmlFor="bookingId"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter Booking ID
            </label>
            <input
              id="bookingId"
              type="text"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)} // update booking ID on input change
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="esim_12345678"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}
