import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const middleware = [thunk];

// create store
const store = createStore(rootReducer, applyMiddleware(...middleware));

// export default
export default store;
