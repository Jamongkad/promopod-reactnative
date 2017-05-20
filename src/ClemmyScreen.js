import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ClemmyScreen extends Component {
    static navigationOptions = {
        title: 'Clemmy is cute!!',
    };

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>She really is!! {params.flights}</Text>
            </View>
        );
    }
}

export default ClemmyScreen;
