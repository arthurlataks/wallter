import { TabNavigator } from 'react-navigation';

import DashboardConfig from '../Dashboard/config';
import SettingsConfig from '../Settings/config';
import Theme from '../../config/theme';

const NavigationConfig = TabNavigator(
    {
        Dashboard: DashboardConfig,
        Settings: SettingsConfig
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: Theme.tintColor,
            inactiveTintColor: Theme.inactiveTintColor
        }
    }
);

export default NavigationConfig;
