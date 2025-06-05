import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type SortItem = {
    name: string;
    sortProperty: 'title' | 'rating' | 'price' | '-title' | '-rating' | '-price';
};

interface FilterSliceState {
    categoryId: number;
    searchValue: string;
    pageCount: number;
    currentPage?: number;
    sort: SortItem;
}

const initialState: FilterSliceState = {
    categoryId: 0,
    searchValue: '',
    pageCount: 1,
    sort: {
        name: 'популярности(DESC)',
        sortProperty: 'rating',
    },
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setSort: (state, action: PayloadAction<SortItem>) => {
            state.sort = action.payload;
        },
        setPageCount: (state, action: PayloadAction<number>) => {
            state.pageCount = action.payload;
        },
        setFilters: (state, action) => {
            if (Object.keys(action.payload).length) {
                state.currentPage = Number(action.payload.currentPage);
                state.sort = action.payload.sort;
                state.categoryId = Number(action.payload.categoryId);
            } else {
                state.currentPage = 1;
                state.categoryId = 0;
                state.sort = {
                    name: 'популярности(DESC)',
                    sortProperty: 'rating',
                };
            }
        },
    },
});

export const { setCategoryId, setSort, setPageCount, setFilters, setSearchValue } =
    filterSlice.actions;

export default filterSlice.reducer;
