interface UsageBarProps {
  used: number;
  total: number;
  label: string;
}

const UsageBar = ({ used, total, label }: UsageBarProps) => {
  const percentage = (used / total) * 100;

  return (
    <div className="mb-4">


      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">
          {used} of {total} {
            label == "Data Usage" ? "GB" : ""
          }
        </span>
      </div>

      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full"
          style={{ 
            width: `${percentage}%`,
            animation: 'scaleProgress 0.8s ease-out forwards',
            transformOrigin: 'left'
          }}
        />
      </div>
    </div>
  );
};

export default UsageBar;