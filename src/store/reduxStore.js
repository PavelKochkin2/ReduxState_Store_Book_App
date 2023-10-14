import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const ui = createSlice({
  name: "uiSlice",
  initialState: { cartIsVisible: false },
  reducers: {
    toogleCartIsVisible(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

const cart = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, totalPrice: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.totalPrice =
          parseInt(existingItem.totalPrice) + parseInt(newItem.price);
        existingItem.quantity++;
      }
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        existingItem.quantity--;
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
        existingItem.totalPrice =
          parseInt(existingItem.totalPrice) + parseInt(existingItem.price);
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity--;
        state.totalQuantity--;
        existingItem.totalPrice =
          parseInt(existingItem.totalPrice) - parseInt(existingItem.price);
      }
    },
  },
});

const store = configureStore({
  reducer: { uiSlice: ui.reducer, cartSlice: cart.reducer },
});

export const uiSliceActions = ui.actions;
export const cartSliceActions = cart.actions;

export default store;
