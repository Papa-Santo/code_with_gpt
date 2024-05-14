"use client";

import { useReducer } from "react";
import { crustReducer, initialCrustState } from "../reducers/CrustReducer";

const Crust = () => {
  // Initialize state with useReducer
  const [state, dispatch] = useReducer(crustReducer, initialCrustState);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-bold mb-4">Choose your pizza crust size:</h2>
      <div className="flex gap-4">
        <button
          className={`${
            state.selectedCrust === "small"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } px-4 py-2 rounded-md transition-colors duration-300`}
          onClick={() => dispatch({ type: "SELECT_SMALL" })}
        >
          Small
        </button>
        <button
          className={`${
            state.selectedCrust === "medium"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } px-4 py-2 rounded-md transition-colors duration-300`}
          onClick={() => dispatch({ type: "SELECT_MEDIUM" })}
        >
          Medium
        </button>
        <button
          className={`${
            state.selectedCrust === "large"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } px-4 py-2 rounded-md transition-colors duration-300`}
          onClick={() => dispatch({ type: "SELECT_LARGE" })}
        >
          Large
        </button>
      </div>
      <p className="mt-4">Selected Crust: {state.selectedCrust}</p>
    </div>
  );
};

export default Crust;
