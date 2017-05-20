import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

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
                        <Text>{flight.numberOfFlights} flights available</Text>
                    </View>
                    <View style={{justifyContent:'flex-end', flexDirection:'column', paddingBottom:7, paddingRight:10}}>
                        <Text style={{alignSelf:'flex-end'}}>lowest promo for
                            <Text style={{fontSize:15,fontWeight:'bold'}}>PHP{flight.startingFrom}</Text>
                        </Text>
                        <Text style={{alignSelf:'flex-end'}}>by {flight.cheapestProvider}</Text>
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
    }
}

export default ListItem;
