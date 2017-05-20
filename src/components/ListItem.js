import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { numberWithCommas } from '../helpers';

class ListItem extends Component {
    render() {
        const { flight, rowID, whenPress } = this.props;

        let backgroundColor = {backgroundColor: '#fff'};
        if(rowID%2 === 0) {
            backgroundColor = {backgroundColor: '#f7f7f7'};
        }

        return (
            <TouchableWithoutFeedback onPress={() => whenPress()}>
                <View style={[styles.rowStyle, backgroundColor]}>
                    <View style={styles.topPortion}>
                        <Text style={{fontWeight:'bold'}}>{flight.displayFlights}</Text>
                        <Text style={styles.infoLabels}>{flight.numberOfFlights} flights available</Text>
                    </View>
                    <View style={{paddingBottom:7, paddingRight:10, alignItems: 'flex-end'}}>
                        <Text style={styles.infoLabels}>lowest promo for <Text style={styles.priceLabel}>PHP{numberWithCommas(flight.startingFrom)}</Text></Text>
                        <Text style={styles.infoLabels}>by <Text style={styles.providerLabel}>{flight.cheapestProvider}</Text></Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    rowStyle: {
        flex:1, height: 100
    },
    topPortion: {
        justifyContent:'flex-start', flexDirection:'column', flex:1, paddingTop:10, paddingLeft:10
    },
    providerLabel: {
        color: '#52A1C8'
    },
    infoLabels: {
        color: '#B2BFBF', fontSize: 12
    },
    priceLabel: {
        fontSize:15,fontWeight:'bold', color: '#4B6496'
    }
}

export default ListItem;
