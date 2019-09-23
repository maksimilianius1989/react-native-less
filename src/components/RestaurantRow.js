import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

export default class RestaurantRow extends Component {
    state = {
        showInfo: false
    }

    infoPressed = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        const {
            place,
            index
        } = this.props

        return (
            <View
                key={place.name}
                style={{backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'}}
            >
                <View style={styles.row}>
                    <View style={styles.edges}>
                        <Text>{index + 1}</Text>
                    </View>

                    <Text style={styles.nameAddress}>
                        <Text>{place.name}</Text>
                        <Text style={styles.addressText}>{place.address}</Text>
                    </Text>

                    <View style={styles.edges}>
                        <Button
                            title="Info"
                            color="#C93F0B"
                            accessibilityLabel="Info"
                            onPress={this.infoPressed}
                        />
                    </View>
                </View>

                {
                    this.state.showInfo &&
                    <View>
                        <Text>Restaurant Info</Text>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    edges: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        minWidth: 50
    },
    nameAddress: {
        flexDirection: 'column',
        flex: 8
    },
    addressText: {
        color: 'grey'
    },
})
