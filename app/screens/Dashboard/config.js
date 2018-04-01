import React from 'react';
import { StackNavigator } from 'react-navigation';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import DefaultComponent from '../../components/default-component';
import routerSettings from '../../router/dashboard';
import Theme from '../../config/theme';

const DashboardView = StackNavigator(routerSettings, {
    initialRouteName: 'Dashboard',
    cardStyle: {
        backgroundColor: '#fff'
    },
    navigationOptions: {
        headerTintColor: Theme.tintColor
    }
});

class Dashboard extends DefaultComponent {
    static navigationOptions = {
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ tintColor }) => (
            <EntypoIcon
                name="pie-chart"
                size={ 24 }
                style={ { color: tintColor } }
            />
        ),
    };

    render() {
        return <DashboardView />;
    }
}

export default { screen: Dashboard };
