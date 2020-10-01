// FIRST WRITE OUR ACTIONS HERE
//This is the action we'll dispatch when the user clicks "Add to cart".
//this is the definition

export const addItem = (item) => ({
  // returning an object that goes into the dispatch
  type: "ADD_ITEM",
  item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});

export const updateQuantity = (item) => ({
  type: "UPDATE_QUANTITIES",
  item,
});

export const emptyCart = () => ({
  type: "EMPTY_CART",
});

export const receiveItems = (items) => ({
  type: "RECEIVE_ITEMS",
  items,
})

export const selectSort = (option) => ({
  type: "SELECT-SORT",
  option,
});

export const selectBodyPart = (option) => ({
  type: "SELECT-BODYPART",
  option,
});

export const requestShoppingItems = () => ({
  type: "REQUEST_ITEMS",
})

export const receiveShoppingItemsError = () => ({
  type: "RECEIVE_ITEMS_ERROR",
})

export const receiveShoppingItems = (items) => ({
  type: "RECEIVE_SHOPPING_ITEMS",
  items,
})

export const requestPurchase = () => ({
  type: "REQUEST_PURCHASE",
})

export const receivePurchase = () => ({
  type: "RECEIVE_PURCHASE",
})

export const purchaseError = (error) => ({
  type: "PURCHASE_ERROR",
  error,
})