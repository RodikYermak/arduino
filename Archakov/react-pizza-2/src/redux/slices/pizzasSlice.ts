import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type FetchPizzasArgs = Record<string, string>

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzasStatus',
    async ({ currentPage, category, sortBy, order, search }: FetchPizzasArgs, thunkApi) => {
        const { data } = await axios.get(
            `https://65dd02b5e7edadead7ed4cb6.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
        );

        if (data.length === 0) {
            return thunkApi.rejectWithValue('error');
        }

        return thunkApi.fulfillWithValue(data);
    }
);

type Pizza = {
    id: string;
    title: string;
    imageUrl: string;
    price: number;
    types: number[];
    sizes: number[];
    category: number;
    rating: number;
};

interface PizzaSliceState {
    items: Pizza[];
    status: 'loading' | 'success' | 'error';
}

const initialState: PizzaSliceState = {
    items: [],
    status: 'loading', // loading, success, error
};

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.status = 'loading';
                state.items = [];
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success';
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.status = 'error';
                state.items = [];
            });
    },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;