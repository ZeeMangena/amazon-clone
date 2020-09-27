export const initialState = {
  //initialize State Variables here
  basket: [],
};

//Selector (*KEY*)
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET": //Action Command goes here
      return {
        //State Altering action below
        ...state,
        basket: [...state.basket, action.item],
        //basket+=item
        //action (an object) is the output produced by 'dispatch', sent directly to the reducer
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        //i.e an element index was found
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as it is not in the basket `
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state; //in case the app action request matches none of the know commands
  }
};

export default reducer;
