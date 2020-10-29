const initialState = {};

// in component we call a dispatch that is given an action and then reducer executes that action
export const getCartItemArray = (state) => Object.values(state.cart);
//THE CART ARRAY WILL BE MADE WITH VALUES OF THE CART
//getCartItemArray gets put into cart
// keep selector functions _colocated_ with the reducers.
//USE REDUCERS TO CHANGE THE STATE
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item._id]: {
          //KEY: VALUE
          //state contains a bunch of items by id so item.id
          //adding above by id to whatever item already there thus ...action.item
          ...action.item,
          quantity: state[action.item._id]
            ? state[action.item._id].quantity + 1
            : 1,
            //TERNIARY CHECKS IF IT EXISTS ALREADY 
            //ADDS ONE TO EXISTING QUANTITY: ELSE QUANTITY 1
        },
      };
    }
    case "REMOVE_ITEM": {
      // New object we CAN mutate
      const stateCopy = { ...state };
      //this item.id is just ONE OBJECT
      delete stateCopy[action.item._id];
      return {
        ...stateCopy,
      };
    }
    case "UPDATE_QUANTITIES": {
      return {
        ...state,
        [action.item._id]: {
          ...state[action.item._id],
          quantity: action.item.quantity,
          //KEY: NEW VALUE
          // WE ARE RECEIVING AN ACTION WITH .ITEM IN IT AND .QUANTITY IN THAT
        },
      };
    }
    case "EMPTY_CART": {
      return {};
    }
    default:
      return state;
  }
}
//Here we updated our reducer to handle this action. Remember, _actions describe a change_, but they aren't opinionated about what should happen as a result.
///All the `...` : we aren't allowed to mutate the state object, we have to produce a brand new object.
