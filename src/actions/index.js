import axios from 'axios';
import { Linking } from 'react-native';
import { FETCH_GROUP_FLIGHTS, FETCH_PROMO_DETAIL_FLIGHTS, LOADING_FLIGHT, TOGGLE_SEARCHBAR } from './types';

export const testFetch = () => {
    return {
        type: "test_fetch",
    }
};

export const fetchGroupFlights = () => {
   return (dispatch) => {
       loadingFlight(dispatch);
       axios.get('http://promopod.gearfish.com/group_flights')
           .then( ({ data }) => {
               dispatch({
                   type: FETCH_GROUP_FLIGHTS,
                   payload: data,
               })
           });
   }
};

export const fetchPromoDetailFlights = (flights) => {
    return (dispatch) => {
        loadingFlight(dispatch);
        axios.get(`http://promopod.gearfish.com/flights/${flights}`)
            .then( ({ data }) => {
                dispatch({
                    type: FETCH_PROMO_DETAIL_FLIGHTS,
                    payload: data,
                });
            });
    }
};

export const openWebsite = (flights) => {
    return (dispatch) => {
        const { provider } = flights;

        let url = '';
        if(provider === 'airasia') {
            url = 'http://www.airasia.com';
        }

        if(provider === 'cebupac') {
            url = 'http://www.cebupacificair.com';
        }

        if(provider === 'jetstar') {
            url = 'http://www.jetstar.com';
        }

        if(provider === 'tigerair') {
            url= 'http://www.tigerair.com';
        }

        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        });
    }
}

export const toggleSearchBar = () => {
    return { type: TOGGLE_SEARCHBAR };
}

const loadingFlight = (dispatch) => {
    dispatch({ type: LOADING_FLIGHT });
}
