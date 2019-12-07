import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rocket from "./reducer";

const store = createStore(rocket, applyMiddleware(thunk));

export default store;
