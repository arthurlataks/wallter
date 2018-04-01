import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from '../../styles';

class InitialLoader extends ActivityIndicator {
    render() {
        return (
            <View style={ styles.verticalSpacing }>
                { super.render() }
            </View>
        );
    }
}

export default InitialLoader;
