import React, { Component } from 'react';
import TabNavigator from './src/routes';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    render() {
        return(
            <View style={{paddingTop: 24, flex: 1}}>
                <TabNavigator  />
            </View>
        );
    }
}