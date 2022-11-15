import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {kataReducer} from "./kataReducer";

export const store = createStore(kataReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>;
