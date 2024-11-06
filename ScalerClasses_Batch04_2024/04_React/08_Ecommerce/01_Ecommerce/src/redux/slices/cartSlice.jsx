import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cartSliceName",
    initialState: {
        cartQuantity: 0,
        // array of objecy -> [{Details of Product, Individual Quantity}]
        cartProducts: []
    },
    reducers: {
        addToCart: (state, action) => {
            const ProductToBeAdded = action.payload;
            if (ProductToBeAdded === undefined || ProductToBeAdded === null) {
                console.log("It is beign called without product which is not possible something is fisy!")
                return;
            }

            state.cartQuantity++;
            const cartProduct = state.cartProducts.find((currentProduct) => currentProduct.id === ProductToBeAdded.id)

            if (cartProduct != undefined) {
                // Already present in cart just increase its individual quantity.
                cartProduct.individualQuantity++;
            } else {
                // Not present in cart.
                ProductToBeAdded.individualQuantity = 1;
                state.cartProducts.push(ProductToBeAdded);
            }
        },
        deleteFromCart: (state, action) => {
            const ProductToBeAdded = action.payload;
            if (ProductToBeAdded === undefined || ProductToBeAdded === null) {
                console.log("It is beign called without product which is not possible something is fisy!")
                return;
            }

            const cartProductIndex = state.cartProducts.findIndex((currentProduct) => currentProduct.id === ProductToBeAdded.id);

            if (cartProductIndex != -1) {
                state.cartQuantity--;

                let currentProduct = state.cartProducts[cartProductIndex];

                if (currentProduct.individualQuantity === 1) {
                    state.cartProducts.splice(cartProductIndex, 1);
                } else {
                    currentProduct.individualQuantity--;
                }
            }
        },
    }
});

export const actions = cartSlice.actions;
export default cartSlice;