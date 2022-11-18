// // import { ADD_USER, DELETE_USER, FILTER_USERS } from './users-type';

// // export const usersReducer = (state = [], action) => {
// //   switch (action.type) {
// //     case ADD_USER:
// //       return [...state, action.payload];
// //     case DELETE_USER:
// //       return state.filter(user => user.id !== action.payload);
// //     default:
// //       return state;
// //   }
// // };

// // export const filterReducer = (state = '', action) => {
// //   switch (action.type) {
// //     case FILTER_USERS:
// //       return action.payload;
// //     default:
// //       return state;
// //   }
// // };

// import { createReducer } from '@reduxjs/toolkit';
// import { addUser, deleteUser, filterUsers } from './users-actions';

// export const contactsReducer = createReducer([], {
//   [addUser]: (state, action) => [...state, action.payload],
//   [deleteUser]: (state, action) =>
//     state.filter(user => user.id !== action.payload),
// });

// export const filterReducer = createReducer('', {
//   [filterUsers]: (state, action) => (state = action.payload),
// });
