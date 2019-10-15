import PropTypes from 'prop-types'
import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewPropTypes,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
    getLocationAsync,
    pickImageAsync,
    takePictureAsync,
} from './mediaUtils'

export default class CustomActions extends React.Component {

    render() {
        const { onSend } = this.props;
        return (
            <View style={[styles.wrapper]}>
                <TouchableOpacity
                    style={[styles.icon]}
                    onPress={() => takePictureAsync(onSend)}
                >
                    <Ionicons name='ios-camera'  size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.icon]}
                    onPress={() => pickImageAsync(onSend)}
                >
                    <Ionicons name='ios-image'  size={20} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: 60,
        flexDirection: 'row',
        alignContent: 'space-around',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    icon: {
        fontSize: 20,
        padding: 5
    }
})

CustomActions.contextTypes = {
    actionSheet: PropTypes.func,
}

CustomActions.defaultProps = {
    onSend: () => {},
    options: {},
    renderIcon: null,
    containerStyle: {},
    wrapperStyle: {},
    iconTextStyle: {},
}

CustomActions.propTypes = {
    onSend: PropTypes.func,
    options: PropTypes.object,
    renderIcon: PropTypes.func,
    containerStyle: ViewPropTypes.style,
    wrapperStyle: ViewPropTypes.style,
    iconTextStyle: Text.propTypes.style,
}