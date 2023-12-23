import storage from "redux-persist/lib/storage"
import { persistReducer } from 'redux-persist'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as codeReducers } from "./code/code.slice";

const rootPersistConfig = {
    key: 'root',
    storage: storage,
}

const codePersistConfig = {
    key: 'code',
    storage: storage,
}
const reducers = combineReducers({
    code: persistReducer(codePersistConfig ,codeReducers)
});

const persistedReducer = persistReducer(rootPersistConfig, reducers)


export const store = configureStore({
     reducer: reducers,
})