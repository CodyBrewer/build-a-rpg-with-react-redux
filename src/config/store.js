import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import playerReducer from "../features/player/reducer.js";

const rootReducer = combineReducers({
  player: playerReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default store;
