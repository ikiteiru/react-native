import React, { Component } from 'react';
import { View, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
    }


    static navigationOptions = ({ navigation }) => ({
        title: (navigation.state.params || {}).name || 'Chat!',
    });

    render() {
        const user = {
            name: 'Jogn',
           // _id: Fire.shared.uid,
        };
        const mainContent = (
            <GiftedChat
                messages={this.state.messages}
                user={user}
            />
        );
        if (Platform.OS === 'android') {
            return (
                <KeyboardAvoidingView style={{flex: 1}} behavior="padding"  keyboardVerticalOffset={80} enabled>
                    {mainContent}
                </KeyboardAvoidingView>
            );
        }
        return (
            <GiftedChat
                messages={this.state.messages}
                user={user}
            />
        );
    }
}
const styles = StyleSheet.create({});
export default Chat;