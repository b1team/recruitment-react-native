import React from 'react';
import { Alert, View } from 'react-native';
import { Button, Text } from 'native-base';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createStackNavigator } from '@react-navigation/stack';
import UpgradeToEmployerForm from './UpgradeToEmployer';


function UpgradeSelectForm({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Button onPress={() => {navigation.navigate("UpgradeToEmployerForm")}}>
                        <Text>Tôi muốn tìm ứng viên</Text>
                    </Button>
                    <Button onPress={() => {Alert.alert("Ban co chac muon tro thanh nguoi tim viec")}}>
                        <Text>Tôi muốn tìm việc</Text>
                    </Button>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

const UpgradeStack = createStackNavigator();

function UpgradeScreen() {
    return (
        <UpgradeStack.Navigator mode="modal">
            <UpgradeStack.Screen name="UpgradeSelectForm" component={UpgradeSelectForm} options={{title: "Nâng cấp tài khoản"}}/>
            <UpgradeStack.Screen name="UpgradeToEmployerForm" component={UpgradeToEmployerForm}/>
        </UpgradeStack.Navigator>
    );
}

export default UpgradeScreen;