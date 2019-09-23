import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView
} from 'react-native';
import Header from 'components/Header'

const restaurants = [
    {id: 1, name: 'React Cafe', address: '123 Anywhere St', image: 'circle.png', rating: 5},
    {id: 2, name: 'Fancy Restaurant', address: '799 Main St', image: 'square.png', rating: 3.5},
    {id: 3, name: 'Taco Place', address: '550 Maple Rd', image: 'star.png', rating: 4.5},
    {id: 4, name: "Tony's Diner", address: '4101 College St', image: 'triangle.png', rating: 4},
    {id: 5, name: 'Pasta Central', address: '706 Harper St', image: 'circle.png', rating: 3},
    {id: 6, name: 'Burger Builder', address: '4869 Hamilton Dr', image: 'square.png', rating: 1.5},
    {id: 7, name: 'Pizza Express', address: '1049 Bird St', image: 'star.png', rating: 3.5},
    {id: 8, name: 'Teriyaki To Go', address: '1885 Tea Berry Lane', image: 'triangle.png', rating: 3},
    {id: 9, name: 'Maroon Deli', address: '1082 Stuart St', image: 'circle.png', rating: 4.5},
    {id: 10, name: 'Prime Bar and Grill', address: '1848 Fairfax Dr', image: 'square.png', rating: 4.5},
    {id: 11, name: 'Dumpling House', address: '747 Kelly Dr', image: 'star.png', rating: 5},
    {id: 12, name: 'Hot Chicken', address: '1816 Olive St', image: 'triangle.png', rating: 3.5},
    {id: 13, name: "Luna's Tap Room", address: '3256 Spirit Dr', image: 'circle.png', rating: 3},
    {id: 14, name: 'Quick Sandwich Shop', address: '2587 Cherry Ridge Dr', image: 'square.png', rating: 4.5},
    {id: 15, name: "Bobby's Burgers", address: '4152 Berkley St', image: 'star.png', rating: 5},
    {id: 16, name: 'Turnpike Diner', address: '4571 Central Ave', image: 'triangle.png', rating: 2.5},
    {id: 17, name: 'Bombay Express', address: '65 Queens Lane', image: 'circle.png', rating: 3.5},
    {id: 18, name: 'Coffee Central', address: '3228 Oakwood Circle', image: 'square.png', rating: 4.5},
    {id: 19, name: "King's Garden", address: '2935 Victoria Ct', image: 'star.png', rating: 5},
    {id: 20, name: 'Salads and More', address: '2454 Preston St', image: 'triangle.png', rating: 2},
]

class App extends Component {
    state = {
        search: null
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>

                <Header />

                <TextInput
                    style={styles.input}
                    placeholder="Live Search"
                    onChangeText={text => {
                        this.setState({search: text})
                    }}
                    value={this.state.search}
                />

                <ScrollView contentContainerStyle={{
                    paddingTop: 30
                }}>
                    {
                        restaurants
                            .filter(place => {
                                return !this.state.search
                                    || place.name
                                        .toLowerCase()
                                        .indexOf(this.state.search.toLowerCase()) > -1
                            })
                            .map((place, index) => {
                                return (
                                    <View key={place.name} style={[
                                        styles.row,
                                        {
                                            backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'
                                        }
                                    ]}>
                                        <View style={styles.edges}>
                                            <Text>{index + 1}</Text>
                                        </View>

                                        <Text style={styles.nameAddress}>
                                            <Text>{place.name}</Text>
                                            <Text style={styles.addressText}>{place.address}</Text>
                                        </Text>

                                        <View style={styles.edges}>
                                            <Text>Info</Text>
                                        </View>
                                    </View>
                                )
                            })
                    }
                </ScrollView>
            </View>
        )
    }
}

export default App;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    edges: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    nameAddress: {
        flexDirection: 'column',
        flex: 8
    },
    addressText: {
        color: 'grey'
    },
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
