// 여러 개의 reducer 를 하나로 합침
import { combineReducers } from 'redux';
import counter from "./counter";

const rootReducer = combineReducers({
    counter
});

export default rootReducer;