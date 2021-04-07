import { useReducer } from 'react';
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of `UPDATE_PRODUCTS`,
    // return a new state object with an updated products array
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    // if action type value is the value of `UPDATE_CATEGORIES`,
    // return a new state object with an updated categories array

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    // if action type value is the value of `UPDATE_CURRENT_CATEGORY`,
    // return a new state object with an updated currentCategory
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    // if action type value is the value of 'ADD_TO_CART',
    // return a new state with an updated cart
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product]
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products]
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      })
      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    // if it's none of these actions, do not update state at all and keep things the same!
    default:
      return state;
  }
};
export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}