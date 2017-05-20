import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import reducers from './reducers';
import HomeScreen from './HomeScreen';
import ClemmyScreen from './ClemmyScreen';
import FlightPromosScreen from './FlightPromosScreen';
import FlightDetailsScreen from './FlightDetailsScreen';

const NavigationItems = StackNavigator({
    Home: { screen: HomeScreen },
    FlightPromos: { screen: FlightPromosScreen },
    FlightDetails: { screen: FlightDetailsScreen },
    Clemmy: { screen: ClemmyScreen }
},{
    navigationOptions: {
        headerTitleStyle: {
            color: 'white'
        },
        headerStyle: {
            backgroundColor: '#2A9BD7',
            paddingTop: 20,
            height: 72,
        },
        headerTintColor: 'white',
        gesturesEnabled: false
    }
});

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <NavigationItems />
            </Provider>
        );
    }
}

export default App;