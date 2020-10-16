import React from "react";
import {connect} from 'react-redux';
import { Alert, View, StyleSheet } from "react-native";
import { Button, Text } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createStackNavigator } from "@react-navigation/stack";
import UpgradeToEmployerForm from "./UpgradeToEmployer";
import UpgradeToEmployeeForm from "./UpgradeToEmployee";

function UpgradeSelectForm({ navigation, dispatch, state }) {
  // console.log(state)
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
            navigation.navigate("UpgradeToEmployeeForm");
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

function selectFormMapStateToProps(state){
  return {
    state: state.upgradeUserReducer
  }
}

const UpgradeStack = createStackNavigator();

function UpgradeScreen() {
  return (
    <UpgradeStack.Navigator mode="modal">
      <UpgradeStack.Screen
        name="UpgradeSelectForm"
        component={connect(selectFormMapStateToProps)(UpgradeSelectForm)}
      />
      <UpgradeStack.Screen
        name="UpgradeToEmployerForm"
        component={UpgradeToEmployerForm}
      />
       <UpgradeStack.Screen
        name="UpgradeToEmployeeForm"
        component={UpgradeToEmployeeForm}
      />
    </UpgradeStack.Navigator>
  );
}

export default connect()(UpgradeScreen);
