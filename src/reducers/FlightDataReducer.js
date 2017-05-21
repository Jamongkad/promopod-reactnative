import { FETCH_GROUP_FLIGHTS, FETCH_PROMO_DETAIL_FLIGHTS, LOADING_FLIGHT, TOGGLE_SEARCHBAR, SEARCH_RESULTS } from '../actions/types';

const INITIAL_STATE = {flights: null, loading: false, show_searchbar: false};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_GROUP_FLIGHTS:
            return {...state, flights: action.payload, loading: false};
        case FETCH_PROMO_DETAIL_FLIGHTS:
            return {...state, promoDetailFlights: action.payload, loading: false};
        case LOADING_FLIGHT:
            return {...state, loading: true};
        case TOGGLE_SEARCHBAR:
            return {...state, show_searchbar: !state.show_searchbar};
        case SEARCH_RESULTS:
            return {...state, flights: action.payload, loading: false};
        default:
            return state;
    }
}
