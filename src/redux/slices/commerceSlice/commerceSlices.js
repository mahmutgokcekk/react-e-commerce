import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    auth: "",
    favorites: [],
    basket: [],
    totalAmount: 0,
    isHave: false
};


export const commerceSlice = createSlice({
    name: "commerce",
    initialState,
    reducers: {
        addFavorites: (state, action) => {
            const isHave = state.favorites.some((favorite) => {
                return favorite.id === action.payload.id;
            });

            if (isHave) {
                state.isHave = isHave;
            } else {
                state.favorites.push(action.payload);
            }
        },
        deleteFavorite: (state, action) => {
            const findIndexNumber = state.favorites.findIndex((favorite) => favorite.id === action.payload);
            console.log(findIndexNumber);
            state.favorites.splice(findIndexNumber, 1);
        },
        addBasket: (state, action) => {
            const isHave = state.basket.some((product) => {
                return product.id === action.payload.id;
            });

            if (isHave) {
                state.isHave = isHave;
            } else {
                state.basket.push(action.payload);
            }

            state.totalAmount += action.payload.price;

        },
        deleteBasket: (state, action) => {
            const findIndexNumber = state.basket.findIndex((basket) => basket.id === action.payload.id);
            state.basket.splice(findIndexNumber, 1);
            state.totalAmount = state.totalAmount - action.payload.price;
        },
        addAuth: (state, action) => {
            state.auth = action.payload;
            console.log(state.auth)
        }

    }
});

export const { addFavorites, deleteFavorite, addBasket, deleteBasket, addAuth } = commerceSlice.actions;
export default commerceSlice.reducer;