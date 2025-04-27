"use client"; // ← mark this file as a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation"; // ← import from next/navigation
import Layout from "../app/components/Layout";

export default function HomePage() {
  const [bookingId, setBookingId] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/dashboard?bookingId=${bookingId}`);
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold text-center mb-6">eSIM Manager</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              onChange={(e) => setBookingId(e.target.value)}
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
