const initialState = {
  status: "idle",
};

export default function cartPurchaseReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_PURCHASE": {
      return {
        ...state,
        status: "process",
            //KEY: VALUE
      };
    }
    case "RECEIVE_PURCHASE": {
      return {
        ...state,
        status: "success",
      };
    }
    case "PURCHASE_ERROR": {
      return {
        ...state,
        status: "error",
        error: action.error,
      };
    }
    default:
      return state;
  }
}
