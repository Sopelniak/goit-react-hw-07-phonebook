import { contactsReducer } from './users/contactsSlice';
import { filterReducer } from './users/filterSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  
});