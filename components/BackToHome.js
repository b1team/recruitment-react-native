import React from "react";
import { Button, Text, View } from "react-native";
import Drawer from "./Drawer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function BackToHomeScreen({ navigation }) {
    return (
        <View>
            <Drawer navigation={navigation} name="Đăng nhập" />
            <KeyboardAwareScrollView>
                <Text>Ban da dang nhap</Text>
                <Button title="Trang chu" onPress={() => navigation.navigate("Home")} />
            </KeyboardAwareScrollView>
        </View>

    );
}

export default BackToHomeScreen