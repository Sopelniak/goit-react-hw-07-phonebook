// import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers /* , createStore */ } from 'redux';
import { contactsReducer } from './users/contactsSlice';
import { filterReducer } from './users/filterSlice';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter']
}


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);