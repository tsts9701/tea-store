import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            let isProductAlreadyInCart = false;
            let payload = action.payload;

            for (let prd of state.cartItems) {
                if (prd.name === payload.product.name) {
                    let productPrice = (payload.pricePer100g * payload.selectedWeight) / 100;

                    isProductAlreadyInCart = true;
                    prd.weight += payload.selectedWeight;
                    prd.totalPrice += productPrice;

                    break;
                }
            }
            

            if (!isProductAlreadyInCart) {
                let productPrice = (payload.pricePer100g * payload.selectedWeight) / 100;
                let product = {};

                product.product = payload.product;
                product.weight = payload.selectedWeight;
                product.name = product.product.name;
                product.totalPrice = productPrice;

                state.cartItems.push(product);
            }
        },
        updateCart: (state, action) => {
            for (let prd of state.cartItems) {
                let payload = action.payload;

                if (prd.id === payload.id && prd.selectedSize === payload.currentSize) {
                    if (action.payload.key === "quantity") {
                        prd.quantity = +payload.val;
                    } else {
                        prd.selectedSize = payload.val;
                    }
                }
            }
        },

        removeFromCart: (state, action) => {
           if (state.cartItems.length === 1) {
                state.cartItems = [];

                return;
            }
            let newCartItems = [];

            for (let prd of state.cartItems) {
                if (prd.name !== action.payload.name) {
                    newCartItems.push(prd);
                }
            }

            state.cartItems = newCartItems;
        },
        getCart: (state) => {
            return state;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart, getCart } = cartSlice.actions;

export default cartSlice.reducer;
