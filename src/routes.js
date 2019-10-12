import React from 'react';
import Conversations from './components/Conversations';
import Chat from './components/Chat';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const TabNavigator = createBottomTabNavigator(
    {
        Messages: Conversations,
        Notifications: Chat,
        Settings: Chat
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                let iconName;
                switch (navigation.state.routeName) {
                    case 'Messages':
                        iconName = 'ios-chatbubbles'
                        break;
                    case 'Notifications':
                        iconName = 'ios-notifications';
                        break;
                    case 'Settings':
                        iconName = 'ios-settings';
                        break;
                    default:
                        iconName = 'ios-home';
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showLabel: false,
            style: {
                backgroundColor: '#fff111',
                borderTopColor: "transparent"
            },
        },
        backBehavior: "history"
    });

export default createAppContainer(TabNavigator);
