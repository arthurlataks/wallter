import React from 'react';
import { View, Text } from 'react-native';

import DefaultComponent from '../../components/default-component';
import styles from '../../styles';

class DashboardScreen extends DefaultComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={ styles.container }>
                <Text>Dashboard</Text>
            </View>
        )
    }
}

export default DashboardScreen;
