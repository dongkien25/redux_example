import {combineReducers} from 'redux'
import calc from './calculator'
import appData from './dataReducer'
const rootReducer = combineReducers({
    appData,
    calc,
});
export default rootReducer;