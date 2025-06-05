import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { get } from 'http';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

export type CartItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
};

interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
}

const cartData = getCartFromLS();

const initialState: CartSliceState = {
    totalPrice: calcTotalPrice(cartData),
    items: cartData,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const findItem = state.items.find((item) => item.id === action.payload.id);

            if (findItem) {
                findItem.count += 1;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }

            state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0);
        },

        plusItem: (state, action: PayloadAction<string>) => {
            const findItem = state.items.find((item) => item.id === action.payload);
            if (findItem) {
                findItem.count += 1;
                state.totalPrice = state.items.reduce(
                    (acc, item) => acc + item.price * item.count,
                    0
                );
            }
        },

        minusItem: (state, action: PayloadAction<string>) => {
            const findItem = state.items.find((item) => item.id === action.payload);
            if (findItem) {
                findItem.count -= 1;
                state.totalPrice = state.totalPrice - findItem.price;
            }
        },

        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0);
        },

        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const selectCart = (state: RootState) => state.cart;
export const selectSort = (state: RootState) => state.filter.sort;

export const { addItem, removeItem, clearItems, plusItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
