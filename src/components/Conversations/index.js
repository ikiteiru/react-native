import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

import {ConversationItem} from './Item';
import {CustomModal} from "./CustomModal";
import * as actionsC from '../../actions/conversations';


class Conversations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: {},
            currentChat: null,
            isModalOpen: false
        };
    }

    componentDidMount() {
        this.setState({
            chats: actionsC.getChats()
        });
    }

    onPress = (chatID) => {
        //this.props.navigation.navigate('Chat', { id: chatID });
        this.setState({
           isModalOpen: true,
           currentChat: chatID
        });
    }

    onModalClose = (chatID) => {
        //this.props.navigation.navigate('Chat', { id: chatID });
        this.setState({
            isModalOpen: false
        });
    }

    render() {
        return (
            <View>
            {
                Object.entries(this.state.chats).length !== 0 ?
                this.state.chats.map(chat => <ConversationItem onPress={this.onPress} key={chat.id} chat={chat} />) :
                <Text style={styles.title}>Nothing to show</Text>
            }
            <CustomModal
                isVisible={this.state.isModalOpen}
                chatID={this.state.currentChat}
                onModalClose={this.onModalClose}
            />
            </View>
        );
    }
}
const offset = 24;
const styles = StyleSheet.create(
    {
        nameInput: {
            height: offset * 2,
            margin: offset,
            paddingHorizontal: offset,
            borderColor: '#111111',
            borderWidth: 1,
        },
        title: {
            marginTop: offset,
            marginLeft: offset,
            fontSize: offset,
        },
        buttonText: {
            marginLeft: offset,
            fontSize: offset,
        }
    }
);
export default Conversations;