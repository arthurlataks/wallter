import React from 'react';
import { StackNavigator } from 'react-navigation';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import DefaultComponent from '../../components/default-component';
import routerSettings from '../../router/settings';
import Theme from '../../config/theme';

const SettingsView = StackNavigator(routerSettings, {
    initialRouteName: 'Settings',
    cardStyle: {
        backgroundColor: '#fff'
    },
    navigationOptions: {
        headerTintColor: Theme.tintColor
    }
});

class Settings extends DefaultComponent {
    static navigationOptions = {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
            <EntypoIcon
                name="cog"
                size={ 24 }
                style={ { color: tintColor } }
            />
        )
    };

    render() {
        return <SettingsView />;
    }
}

export default { screen: Settings };
