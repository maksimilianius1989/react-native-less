import React, {Component} from 'react';
import axios from "axios"
import {FlatList, Image, StyleSheet, TextInput, View} from "react-native"
import RestaurantRow from 'components/RestaurantRow'
import PizzaImage from 'images/star.png'
import Header from 'components/Header'

export default class RestaurantList extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        search: null,
        restaurants: []
    }

    componentDidMount() {
        // axios.get('http://192.168.0.104/restaurants.php')
        axios.get('http://10.0.3.2:3000/restaurants')
            .then(result => this.setState({restaurants: result.data}))
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#ffffff'
            }}>

                <View style={{
                    alignItems: 'center',
                    marginTop: 0
                }}>
                    <Image source={PizzaImage} />
                </View>
                <Header />

                <TextInput
                    style={styles.input}
                    placeholder="Live Search"
                    onChangeText={text => {
                        this.setState({search: text})
                    }}
                    value={this.state.search}
                />

                <FlatList
                    data = {
                        this.state.restaurants.filter(place => {
                            return !this.state.search
                                || place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
                        })
                    }
                    renderItem={({item, index}) =>
                        <RestaurantRow
                            place={item}
                            index={index}
                            navigation={this.props.navigation}
                        />
                    }
                    keyExtractor={item => item.name}
                    initialNumToRender={16}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#F5F5F5'
    }
})
