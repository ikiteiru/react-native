import React, { Component } from 'react';
import { View, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import Fire from '../Fire';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
    }
    componentDidMount() {
        Fire.shared.on(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        );
    }

    componentWillUnmount() {
        Fire.shared.off();
    }

    static navigationOptions = ({ navigation }) => ({
        title: (navigation.state.params || {}).name || 'Chat!',
    });

    render() {
        const user = {
            name: this.props.navigation.state.params.name,
            _id: Fire.shared.uid,
        };
        const mainContent = (
            <GiftedChat
                messages={this.state.messages}
                onSend={Fire.shared.send}
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
                onSend={Fire.shared.send}
                user={user}
            />
        );
    }
}
const styles = StyleSheet.create({});
export default Chat;