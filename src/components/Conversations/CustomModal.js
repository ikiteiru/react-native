import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text } from 'native-base';
import Modal from 'react-native-modalbox';

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '70%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
});

export const CustomModal = props => {
    const {chatID, isVisible, onModalClose} = props
    return (
        <Modal
            transparent={false}
            isOpen={isVisible}
            style={[styles.modal]}
            position={'bottom'}
            onClosed={() => onModalClose()}
        >
            <View>
                <Text>{chatID}</Text>
            </View>
        </Modal>
    );
};
