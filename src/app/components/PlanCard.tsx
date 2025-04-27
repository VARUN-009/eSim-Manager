import { Plan } from "../types/esim";

interface PlanCardProps {
  plan: Plan;
  selected: boolean;
  onSelect: () => void;
}

const PlanCard = ({ plan, selected, onSelect }: PlanCardProps) => (
  <div
    className={`p-6 border rounded-xl transition-all transform duration-300 ease-in-out ${
      selected
        ? "border-blue-600 bg-blue-50 scale-105"
        : "border-gray-200 hover:border-blue-400 hover:scale-105 hover:shadow-lg"
    }`}
  >
    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
    <p className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</p>
    <div className="space-y-2 text-gray-600">
      <p>Data: {plan.data}</p>
      <p>Validity: {plan.validity}</p>
      {plan.speed && <p>Speed: {plan.speed}</p>}
      {plan.support && <p>Support: {plan.support}</p>}
      {plan.roaming && <p className="text-green-600">🌍 Roaming Included</p>}
    </div>

    <button
      onClick={onSelect}
      className="mt-4 w-full cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg 
               hover:bg-blue-700 transition-colors duration-300 
               transform hover:scale-[1.02]"
    >
      Select This Plan
    </button>
  </div>
);

export default PlanCard;
