import { combineReducers } from 'redux';
import TestReducer from './TestReducer';
import FlightDataReducer from './FlightDataReducer';

export default combineReducers({
    test: TestReducer,
    flightData: FlightDataReducer,
});
