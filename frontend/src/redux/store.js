import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// ✅ Avoid restoring removed state like 'theme'
const persistConfig = {
  key: "root",
  storage,
  version: 1,
  blacklist: ["theme"],
};

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
