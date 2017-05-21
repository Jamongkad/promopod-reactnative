import React, { Component } from 'react';
import { View, ListView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { fetchGroupFlights, toggleSearchBar, searchFlights  } from './actions';
import ListItem from './components/ListItem';
import Spinner from 'react-native-loading-spinner-overlay';
import Search from 'react-native-search-box';
import Icon from 'react-native-vector-icons/FontAwesome';


class HomeScreen extends Component {

    static navigationOptions = ({ navigation }) => {

        const {state, setParams} = navigation;

        return {
            title: 'Promo Pod',
            headerRight: (
                <TouchableHighlight style={{alignItems:'center', justifyContent:'center', paddingRight:15}}
                                    onPress = { () => state.params.toggleSearch() }
                                    underlayColor = 'transparent'>
                    <View>
                        <Icon name="search" size = {20} color = "#fff" />
                    </View>
                </TouchableHighlight>
            )
        }
    };

    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
    }

    componentDidMount() {
        //dynamically bind local method to React Navigation right button
        this.props.navigation.setParams({ toggleSearch: this.toggleSearch });
    }

    toggleSearch = () => {
        this.props.toggleSearchBar();
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
                {this.renderSearchBox()}
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
                <Spinner visible={loading} textContent={"Loading Promos..."} textStyle={{color: '#FFF'}} />
            </View>
        );
    }

    renderSearchBox() {
        if(this.props.show_searchbar) {
            return (
                <Search
                    ref="search_box"
                    onChangeText={this.onChangeText}
                />
            );
        }
    }

    onChangeText = (text) => {
        return new Promise((resolve, reject) => {
            this.props.searchFlights(text);
            resolve();
        });
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
    const { flights, loading, show_searchbar  } = flightData;
    return { flights, loading, show_searchbar };
}

export default connect(mapStateToProps, { fetchGroupFlights, toggleSearchBar, searchFlights })(HomeScreen);
