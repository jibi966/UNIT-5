import { combineReducers, createStore } from "redux";
import { loginReducer } from "./Login/reducer";

import { todoReducer } from "./Todo/reducer";

const rootRuducer =combineReducers({
    todo:todoReducer,
    login:loginReducer,

})

export const store = createStore(rootRuducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


