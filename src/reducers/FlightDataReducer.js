import { FETCH_GROUP_FLIGHTS, FETCH_PROMO_DETAIL_FLIGHTS, LOADING_FLIGHT } from '../actions/types';

const INITIAL_STATE = {flights: null, loading: false};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_GROUP_FLIGHTS:
            return {...state, flights: action.payload, loading: false};
        case FETCH_PROMO_DETAIL_FLIGHTS:
            return {...state, promoDetailFlights: action.payload, loading: false};
        case LOADING_FLIGHT:
            return {...state, loading: true};
        default:
            return state;
    }
}
