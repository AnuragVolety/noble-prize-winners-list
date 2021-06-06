import { combineReducers } from "redux";

import reducer from "./Prizes/prizes.reducer";

const rootReducer = combineReducers({ prizes: reducer });

export default rootReducer;
