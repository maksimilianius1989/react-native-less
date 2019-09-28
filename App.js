import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation'
import RestaurantList from 'components/RestaurantList'
import RestaurantInfo from 'components/RestaurantInfo'

const List = createStackNavigator({
    Home: {screen: RestaurantList},
    Info: {screen: RestaurantInfo}
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#0066CC',
            color: '#FFF'
        },
        headerTintColor: '#FFF',
            headerTitleStyle: {
            color: '#FFF',
        }
    }
})

export default createBottomTabNavigator({
    List: {screen: List}
})