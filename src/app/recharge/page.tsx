"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "../components/Layout";
import PlanCard from "../components/PlanCard";
import data from "../data/esimData.json";
import { ESimData, Plan } from "../types/esim";

const RechargePage = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isRecharged, setIsRecharged] = useState(false);
  const router = useRouter();
  const esimData = data as ESimData;

  const handleRecharge = () => {
    setIsRecharged(true);
    setTimeout(() => router.push("/dashboard"), 2000);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">


      <button
          onClick={() => router.back()}
          className="inline-flex items-center space-x-2 cursor-pointer text-blue-600 hover:text-blue-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>Back to Dashboard</span>
        </button>


        <h1 className="text-3xl font-bold">Available Plans</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {esimData.availablePlans.map((plan) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              selected={selectedPlan?.name === plan.name}
              onSelect={() => setSelectedPlan(plan)}
            />
          ))}
        </div>

        {selectedPlan && !isRecharged && (
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Confirm Recharge</h2>
            <p className="text-lg mb-4">
              Selected Plan:{" "}
              <span className="font-semibold">{selectedPlan.name}</span>
            </p>
            <button
              onClick={handleRecharge}
              className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Confirm Payment
            </button>
          </div>
        )}

        {isRecharged && (
          <div className="bg-green-100 p-6 rounded-xl text-green-800 text-center animate-fade-in">
            <p className="text-xl font-semibold">🎉 Recharge Successful!</p>
            <p>Redirecting to dashboard...</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default RechargePage;
