import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { commerceApi } from './services/commerce';
import commerceReducer from './slices/commerceSlice/commerceSlices';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, commerceReducer);

export const store = configureStore({
    reducer: {
        commerce: persistedReducer,
        // commerce: commerceReducer,
        [commerceApi.reducerPath]: commerceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }).concat(commerceApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);