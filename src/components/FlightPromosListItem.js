import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { numberWithCommas, formatMyDate } from '../helpers';

class FlightPromosListItem extends Component {
    render() {

        const { data, rowID } = this.props;

        let backgroundColor = {backgroundColor: '#fff'};
        if(rowID%2 === 0) {
            backgroundColor = {backgroundColor: '#f7f7f7'};
        }

        return (
            <TouchableWithoutFeedback onPress={() => this.next()}>
                <View style={[{flexDirection: 'row', flex: 1.0, height: 100}, backgroundColor]}>
                    <View style={{flex: 0.3, borderRightWidth: 1, borderColor: "#909FBB", justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#47A0D0', fontWeight: '500'}}>PHP{numberWithCommas(data.price)}</Text>
                    </View>
                    <View style={{flex: 0.7}}>
                        <View style={{flex: 0.35}}>
                            <Text style={{color: '#47A0D0', fontWeight: '600', paddingLeft: 10, paddingTop: 10, fontSize: 25}}>{data.provider_fullname}</Text>
                        </View>
                        <View style={{flex: 0.175, flexDirection: 'row', paddingLeft: 10, top:7}}>
                            <Text style={{color: '#C1C1C1', fontSize: 10, alignSelf: 'flex-end'}}>Travel Period:</Text>
                        </View>
                        <View style={{flex: 0.175, flexDirection: 'row', paddingLeft: 10, paddingBottom: 6}}>
                            <Text style={{alignSelf: 'flex-end'}}>
                                {formatMyDate(data.travel_period_from)} to {formatMyDate(data.travel_period_to)}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    next() {
        const { navigate, data } = this.props;
        navigate('FlightDetails', data);
    }
}

export default FlightPromosListItem;
