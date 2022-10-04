import {newProducts} from '../data/productsData'

export const initialState = {
  basket: [],
  user: null,
  address: [],
  chosenAddress: {},
  products: newProducts
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return { ...state, user: action.user };

    case "ADD_NEW_ADDRESS":
      return { ...state, address: [...state.address, action.address] };

    case "EDIT_ADDRESS":
      let newStateAddress = state.address.map((item) => {
        if (item.id === action.address.id) {
          return { ...action.address };
        }
        return item;
      });
      return { ...state, address: [...newStateAddress] };

    case "SET_CHOSEN_ADDRESS":
      return { ...state, chosenAddress: action.chosenAddress };

    case "SHIFT_PRODUCT":
      const newState = state.products.map((prod)=>{
        if(prod.id === action.payload){
          return {...prod, isRendered: true}
        }
        return prod
      })
      console.log(newState)
      return {...state, products: [...newState]}

    default:
      return state;
  }
};

export default reducer;
