import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState =[];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addUser: (state, action) => {return [...state, action.payload]},
    deleteUser: (state, action) => {return state.filter(user => user.id !== action.payload)},
  },
});

export const {addUser, deleteUser} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;


