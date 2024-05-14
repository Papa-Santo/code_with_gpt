"use client";

export const toppings: ToppingType[] = [
  {
    id: 1,
    name: "pepperoni",
    price: 2,
    category: "meat",
  },
  {
    id: 2,
    name: "green pepper",
    price: 1.5,
    category: "vegetable",
  },
  {
    id: 3,
    name: "sausage",
    price: 3,
    category: "meat",
  },
  {
    id: 4,
    name: "mushroom",
    price: 2.5,
    category: "vegetable",
  },
  {
    id: 5,
    name: "bacon",
    price: 3.5,
    category: "meat",
  },
  {
    id: 6,
    name: "onion",
    price: 1,
    category: "vegetable",
  },
  {
    id: 7,
    name: "anchovies",
    price: 2,
    category: "fish",
  },
  {
    id: 8,
    name: "olives",
    price: 1.5,
    category: "fruit",
  },
  {
    id: 9,
    name: "ham",
    price: 3.5,
    category: "meat",
  },
  {
    id: 10,
    name: "pineapple",
    price: 2,
    category: "fruit",
  },
  {
    id: 11,
    name: "shrimp",
    price: 4,
    category: "fish",
  },
];

// Define action types
type ActionType = "ADD_TOPPING" | "REMOVE_TOPPING";

// Define action interface
interface Action {
  type: ActionType;
  payload: ToppingType;
}

// Define topping interface
export interface ToppingType {
  id: number;
  name: string;
  price: number;
  category: string;
}

// Define state interface
interface State {
  selectedToppings: ToppingType[];
}

// Initial state
export const initialToppingState: State = {
  selectedToppings: [],
};

// Reducer function
export const toppingReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOPPING":
      return {
        ...state,
        selectedToppings: [...state.selectedToppings, action.payload],
      };
    case "REMOVE_TOPPING":
      return {
        ...state,
        selectedToppings: state.selectedToppings.filter(
          (topping) => topping.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
