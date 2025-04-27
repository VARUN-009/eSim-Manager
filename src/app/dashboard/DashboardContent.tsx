"use client"; // Add this at the top for client components

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // Updated imports
import UsageBar from "../components/UsageBar";
import data from "../data/esimData.json";
import { ESimData } from "../types/esim";

const DashboardContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // New way to get search params
  const [esimData, setEsimData] = useState<ESimData | null>(null);

  // Get bookingId from URL search params
  const bookingId = searchParams.get("bookingId");

  useEffect(() => {
    if (bookingId === data.bookingId) {
      setEsimData(data as ESimData);
    }
  }, [bookingId]); // Watch bookingId instead of router.query

  if (!esimData) return <p>New SIM data will come by API and updated data will be shown here.</p>;

  return (
       
      <div className="space-y-8">
        {/* Current Plan Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Current Plan</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-xl font-semibold">{esimData.plan.name}</p>
              <p className="text-gray-600">{esimData.plan.price}</p>
            </div>
            <div>
              <p className="text-gray-600">
                Valid: {esimData.plan.validFrom} - {esimData.plan.validUntil}
              </p>
              <p className="text-lg font-semibold text-blue-600">
                Remaining Data: {esimData.plan.remainingData}
              </p>
            </div>
          </div>
        </div>

        {/* Usage Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Usage Details</h2>
          <div className="space-y-6">
            <UsageBar
              used={parseFloat(esimData.usage.usedData)}
              total={parseFloat(esimData.usage.totalData)}
              label="Data Usage"
              />
            <UsageBar
              used={esimData.usage.smsUsed}
              total={esimData.usage.smsTotal}
              label="SMS Usage"
              />
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Voice Usage</h3>
              <p className="text-gray-600">
                {esimData.usage.voiceUsed} used of {esimData.usage.voiceTotal}
              </p>
            </div>
          </div>
        </div>

        {/* Current Session */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Current Session</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Session ID:</p>
              <p className="text-gray-600">
                {esimData.currentSession.sessionId}
              </p>
            </div>
            <div>
              <p className="font-semibold">Started:</p>
              <p className="text-gray-600">
                {new Date(esimData.currentSession.started).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="font-semibold">Usage:</p>
              <p className="text-gray-600">
                {esimData.currentSession.usageMB} MB
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => router.push("/recharge")}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
            >
            Recharge Plan
          </button>
        </div>
      </div>
  );
};

export default DashboardContent;
