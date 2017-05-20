import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import { fetchGroupFlights } from './actions';
import ListItem from './components/ListItem';
import Spinner from 'react-native-loading-spinner-overlay';


class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Promo Pod',
    };

    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
    }

    componentWillMount() {
        this.props.fetchGroupFlights();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ flights }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(flights || []);
    }

    render() {

        const { loading } = this.props;

        return (
            <View style={{flex: 1, paddingTop:0, backgroundColor: '#FFF'}}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
                <Spinner visible={loading} textContent={"Loading Promos..."} textStyle={{color: '#FFF'}} />
            </View>
        );
    }

    renderRow(flight, sectionID, rowID, highlightRow) {
        return <ListItem flight={flight} rowID={rowID} whenPress={() => {this.navigateToFlightDetail(flight)}}/>;
    }

    navigateToFlightDetail(flight) {
        const { navigate } = this.props.navigation;
        navigate('FlightPromos', flight);
    }
}

const mapStateToProps = ({ flightData }) => {
    const { flights, loading } = flightData;
    return { flights, loading };
}

export default connect(mapStateToProps, { fetchGroupFlights })(HomeScreen);
