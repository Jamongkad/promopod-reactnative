import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchPromoDetailFlights } from './actions';
import Spinner from 'react-native-loading-spinner-overlay';
import FlightPromosListItem from "./components/FlightPromosListItem";

class FlightPromosScreen extends Component {

    static navigationOptions = {
        title: 'Flight Promos',
    };

    componentWillMount() {
        const { params } = this.props.navigation.state;
        this.props.fetchPromoDetailFlights(params.flights);
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ promoDetailFlights }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(promoDetailFlights || []);
    }

    render() {

        const { params } = this.props.navigation.state;
        const { loading } = this.props;

        return (
            <View style={{flex:10}}>
                <View style={styles.departureContainer}>
                    <Text style={styles.departureLabel}>Select Departure</Text>
                </View>
                <View style={styles.departureContainer}>
                    <Text style={styles.flightLabel}>{params.flights}</Text>
                </View>
                <View style={{flex: 9.0}}>
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                        renderHeader={this.renderHeader}
                    />
                </View>
                <Spinner visible={loading} textContent={"Loading Flights..."} textStyle={{color: '#FFF'}} />
            </View>
        );
    }

    renderHeader = () => {
        return (
            <View style={{flexDirection: 'row', flex: 1.0, backgroundColor: '#fff'}}>
                <View style={{flex: 0.3, borderRightWidth: 1, borderColor: "#909FBB", height:70, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#A2ADAD', fontWeight: '800'}}>One Way</Text>
                    <Text style={{color: '#ACB1B4', fontSize: 12}}>price/person</Text>
                </View>
                <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#A2ADAD', fontWeight: '700', fontSize: 20}}>Airlines</Text>
                </View>
            </View>
        );
    }

    renderRow = (data, sectionID, rowID, highlightRow) => {
        return <FlightPromosListItem data={data}
                                     rowID={rowID}
                                     navigate={this.props.navigation.navigate}/>
    }
}

const styles = {
    departureContainer: {
        flex: 0.5, backgroundColor: '#2A9BD7', flexDirection:'row', alignItems: 'flex-end'
    },
    departureLabel: {
        left:12, color:'#84B5D4', fontSize:12
    },
    flightLabel: {
        left:12, color:'#FFF', fontSize:15, fontWeight: 'bold', alignSelf: 'flex-start'
    }
}

const mapStateToProps = ({ flightData }) => {
   const { promoDetailFlights, loading } = flightData;
   return { promoDetailFlights, loading };
}

export default connect(mapStateToProps, { fetchPromoDetailFlights })(FlightPromosScreen);