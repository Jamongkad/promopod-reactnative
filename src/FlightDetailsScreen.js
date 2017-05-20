import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight  } from 'react-native';
import { connect } from 'react-redux';
import { openWebsite } from './actions';
import moment from 'moment';

class FlightDetailsScreen extends Component {

    static navigationOptions = {
        title: 'Flight Details',
    };

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={{flex: 1, backgroundColor: '#FFF'}}>
                <ScrollView>
                    <View>
                        <View style={[styles.airportContainer, styles.flightBorder]}>
                            <Text style={styles.flightLabels}>Departing Flight</Text>
                            <Text style={styles.airportLabels}>{params.origin_airport}</Text>
                        </View>
                        <View style={styles.airportContainer}>
                            <Text style={styles.flightLabels}>Arriving Flight</Text>
                            <Text style={styles.airportLabels}>{params.destination_airport}</Text>
                        </View>
                        <View style={[{height:60}, styles.flightDetailsContainer]}>
                            <Text style={styles.infoLabels}>Airline</Text>
                            <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>{params.provider_fullname}</Text>
                        </View>
                        <View style={[{height:110}, styles.flightDetailsContainer]}>
                            <Text style={[styles.infoLabels, {paddingBottom:5}]}>Travel Period</Text>
                            <Text style={styles.flightDetailsLabel}>{this.formatMyDate(params.travel_period_from)}</Text>
                            <Text style={styles.flightDetailsDatesLabel}>{this.formatMyDay(params.travel_period_from)}</Text>
                            <Text style={styles.flightDetailsLabel}>{this.formatMyDate(params.travel_period_to)}</Text>
                            <Text style={styles.flightDetailsDatesLabel}>{this.formatMyDay(params.travel_period_to)}</Text>
                        </View>
                    </View>
                    <View style={{paddingRight: 15, paddingTop: 5, alignItems: 'flex-end'}}>
                        <Text style={[styles.infoLabels]}>Price/Person</Text>
                        <Text style={{color: '#000', fontSize: 27, fontWeight: 'bold'}}>PHP{params.price}</Text>
                    </View>
                </ScrollView>
                <TouchableHighlight underlayColor="white" onPress={() => this.props.openWebsite(params) }>
                    <View style={{height: 55, backgroundColor: '#E97C37', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#FFF', fontWeight: 'bold'}}>Go to {params.provider_fullname} Website</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    formatMyDate(my_date) {
        return moment.utc(my_date, 'YYYY-MM-DD HH:mm:ss').local().format('MMMM d, YYYY');
    }

    formatMyDay(my_date) {
        return moment.utc(my_date, 'YYYY-MM-DD HH:mm:ss').local().format('dddd');
    }
}

const styles = {
    airportContainer: {
        backgroundColor: '#2081B6', height: 70, justifyContent: 'center', paddingLeft: 15
    },
    flightDetailsContainer: {
        justifyContent: 'center', paddingLeft: 15, backgroundColor: '#FFF', borderBottomWidth:1, borderBottomColor: '#D1D1D1'
    },
    flightDetailsLabel: {
        color: '#000', fontSize: 20, fontWeight: 'bold'
    },
    flightDetailsDatesLabel: {
        color: '#D0D0D0', fontSize: 12
    },
    flightLabels: {
        color: '#74A5C2', fontSize: 12
    },
    infoLabels: {
        color: '#D1D1D1', fontSize: 12
    },
    airportLabels: {
        color: '#fff', fontWeight: 'bold', fontSize: 17
    },
    flightBorder: {
        borderBottomWidth: 1, borderColor: '#6D98B3'
    }
}

export default connect(null, { openWebsite })(FlightDetailsScreen);
