import React from "react";
import { Alert, View, StyleSheet } from "react-native";
import { Button, Text } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createStackNavigator } from "@react-navigation/stack";
import UpgradeToEmployerForm from "./UpgradeToEmployer";

function UpgradeSelectForm({ navigation }) {
  return (
    <KeyboardAwareScrollView>
      <View style={{flex: 1, flexDirection: "column", justifyContent: "center"}}>
        <Button
          onPress={() => {
            navigation.navigate("UpgradeToEmployerForm");
          }}
          style={styles.button}
        >
          <Text>Tôi muốn tìm ứng viên</Text>
        </Button>
        <Button
          onPress={() => {
            Alert.alert("Ban co chac muon tro thanh nguoi tim viec");
          }}
          style={styles.button}
        >
          <Text>Tôi muốn tìm việc</Text>
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    minWidth: 200,
    alignSelf: "center",
    justifyContent: "center",
  },
});

const UpgradeStack = createStackNavigator();

function UpgradeScreen() {
  return (
    <UpgradeStack.Navigator mode="modal">
      <UpgradeStack.Screen
        name="UpgradeSelectForm"
        component={UpgradeSelectForm}
      />
      <UpgradeStack.Screen
        name="UpgradeToEmployerForm"
        component={UpgradeToEmployerForm}
      />
    </UpgradeStack.Navigator>
  );
}

export default UpgradeScreen;
