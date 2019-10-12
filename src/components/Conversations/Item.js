import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    avatar: {
        fontWeight: '300',
        fontSize: 20,
        width: 40,
        height: 40,
        lineHeight: 40,
        flexGrow: 0,
        flexShrink: 0,
        borderRadius: 100,
        textAlign: 'center',
    },
    text: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 18,
    },
    view: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5,
        alignItems: 'center',
    }
});
export const ConversationItem = props => {
    const {id, Users, Unread} = props.chat;
    const ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return (
        <View style={styles.view}>
            <Text style={[styles.avatar, {backgroundColor: ColorCode}]}>{Users ? Users[0].Name.charAt(0) : 'U'}</Text>
            <Text style={styles.text}>{Users[0].Name}</Text>
        </View>
    );
};
