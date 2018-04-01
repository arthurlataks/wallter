import React from 'react';
import { View, Text } from 'react-native';
import DefaultComponent from './app/components/default-component';
import { StackNavigator } from 'react-navigation';
import routerGlobal from './app/router/global';
import Theme from './app/config/theme';
import MessagesPresenter from './app/components/messages-presenter';
import styles from './app/styles';

const WallterApp = StackNavigator(routerGlobal, {
    initialRouteName: 'MainNavigationPresenter',
    navigationOptions: {
        headerTintColor: Theme.tintColor
    }
});

console.log(styles);

class App extends DefaultComponent {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <WallterApp />
                <MessagesPresenter />
            </View>
        );
    }
}

export default App;
