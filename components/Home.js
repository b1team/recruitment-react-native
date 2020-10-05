import React from 'react';
import { View, Text } from 'react-native';
import Drawer from './Drawer';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Drawer style={{ flex: 1 }} navigation={navigation} />
        </View>
    );
}
