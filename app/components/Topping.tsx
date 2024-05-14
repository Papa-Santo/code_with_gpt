"use client";

import { useReducer } from "react";
import {
  ToppingType,
  initialToppingState,
  toppingReducer,
  toppings,
} from "../reducers/ToppingReducer";

const Topping = () => {
  // Initialize state with useReducer
  const [state, dispatch] = useReducer(toppingReducer, initialToppingState);

  const handleToppingSelection = (topping: ToppingType) => {
    if (
      state.selectedToppings.some(
        (selectedTopping) => selectedTopping.id === topping.id
      )
    ) {
      dispatch({ type: "REMOVE_TOPPING", payload: topping });
    } else {
      dispatch({ type: "ADD_TOPPING", payload: topping });
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Choose your toppings:</h2>
      <div className="grid grid-cols-3 gap-4">
        {toppings.map((topping) => (
          <button
            key={topping.id}
            className={`${
              state.selectedToppings.some(
                (selectedTopping) => selectedTopping.id === topping.id
              )
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } px-4 py-2 rounded-md transition-colors duration-300`}
            onClick={() => handleToppingSelection(topping)}
          >
            {topping.name}
          </button>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-bold mt-4">Selected Toppings:</h3>
        <ul>
          {state.selectedToppings.map((topping) => (
            <li key={topping.id} data-testid={topping.name}>
              {topping.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Topping;
