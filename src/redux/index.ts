import { replyReducer } from './reducers/replyReducer';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

export const store = createStore(replyReducer, applyMiddleware(thunk))
