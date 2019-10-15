import React from 'react';
import { View, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { Container, Text } from 'native-base';
import Modal from 'react-native-modalbox';
import { GiftedChat } from 'react-native-gifted-chat';
import CustomActions from "./CustomActions";

import * as actionsM from '../../actions/messages';

const styles = StyleSheet.create({
    modal: {
        flex: 0.8,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignContent: 'stretch',
        alignItems: 'stretch',
        justifyContent: 'flex-end',
    },
});

export class CustomModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
    }

    componentWillMount() {
        const messages = actionsM.getMessages().reverse();
        this.setState({
            messages: messages
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    renderCustomActions = (props) => {
        return (
            <CustomActions {...props} />
            );
    }

    render() {
        const {chatID, isVisible, onModalClose} = this.props;
        console.log(this.state.messages);
        return (
            <Modal
                transparent={false}
                isOpen={isVisible}
                swipeArea={50}
                backdropPressToClose={false}
                swipeToClose={true}
                style={[styles.modal]}
                position={'bottom'}
                onClosed={() => onModalClose()}
            >
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <GiftedChat
                        messages={this.state.messages}
                        onSend={messages => this.onSend(messages)}
                        inverted={false}
                        alwaysShowSend={true}
                        renderActions={this.renderCustomActions}
                        user={{
                            _id: 1,
                        }}
                    />
                </View>
                {
                    Platform.OS === 'android' && <KeyboardAvoidingView keyboardVerticalOffset={150} behavior="padding" />
                }
            </Modal>
        );
    }
};

