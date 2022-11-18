import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        filterUsers: (state, action) => {return state = action.payload},
    },
  });

export const {filterUsers} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;


