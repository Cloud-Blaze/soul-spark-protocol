import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const AshwagandhaWarning = () => {
  return (
    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 my-4">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <div className="font-semibold text-orange-800 mb-1">⚠️ Important Safety Note</div>
          <p className="text-orange-700 mb-2">
            Ashwagandha isn't for everyone. If you're taking meds like Depakote, lithium, antipsychotics, sedatives, or if you've ever had mania or psychosis, please do not use ashwagandha.
          </p>
          <Link 
            to="/ashwagandha-warnings" 
            className="text-orange-800 underline hover:text-orange-900 font-medium"
          >
            Read the full details here →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AshwagandhaWarning;