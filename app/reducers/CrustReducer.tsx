"use client";

// Define action types
type ActionType = "SELECT_SMALL" | "SELECT_MEDIUM" | "SELECT_LARGE";

// Define action interface
interface Action {
  type: ActionType;
}

// Define state interface
interface State {
  selectedCrust: "small" | "medium" | "large";
}

// Initial state
export const initialCrustState: State = {
  selectedCrust: "small",
};

// Reducer function
export const crustReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SELECT_SMALL":
      return { ...state, selectedCrust: "small" };
    case "SELECT_MEDIUM":
      return { ...state, selectedCrust: "medium" };
    case "SELECT_LARGE":
      return { ...state, selectedCrust: "large" };
    default:
      return state;
  }
};
