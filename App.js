import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import HeaderStyle from './HeaderStyle'

const restaurants = [
    {name: "React Cafe", address: "222 Anywhere St"},
    {name: "Fancy Restaurant", address: "799 Main St"},
    {name: "Taco Place", address: "550 Maple Rd"}
]

const App = () => {
  return (
    <View style={{
        flex: 1
    }}>
        <Text style={HeaderStyle.header}>Restaurant Review</Text>
        {
            restaurants.map((place, index) => {
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
    </View>
  );
};

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
    }
})
