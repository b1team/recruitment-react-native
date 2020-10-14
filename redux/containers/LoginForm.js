import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Body, Item, Input, Button, Text } from "native-base";
import MainLogo from "../../components/Logo";
import Drawer from "../../components/Drawer";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpForm from "./SignUpForm";
import { Provider } from "react-redux";
import store from "../store";
import { loginAction } from "../actions/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const styles = StyleSheet.create({
  email: {
    width: 350,
  },
  password: {
    width: 350,
    marginTop: 15,
  },
  formAlign: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 12,
  },
  button: {
    width: 200,
    marginTop: 8,
    backgroundColor: "#0275d8",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  newbutton: {
    padding: 10,
  },
});

function LoginForm({navigation, state, dispatch}) {
  console.log(state);
  return (
    <View style={{ flex: 1 }}>
      <Drawer navigation={navigation} name="Đăng nhập" />
      <KeyboardAwareScrollView>
        <Body>
          <MainLogo width={150} height={150} />
          <View style={styles.formAlign}>
            <Item style={styles.email}>
              <Input placeholder="Email" Icon style={styles.input} />
            </Item>
            <Item style={styles.password}>
              <Input
                placeholder="Mật khẩu"
                secureTextEntry={true}
                style={styles.input}
              />
            </Item>
          </View>
          <Button
            style={styles.button}
            onPress={() => {dispatch(loginAction("asdf", "sdfasf"));}}
          >
            <Text style={{ fontSize: 16 }}>Đăng nhập</Text>
          </Button>
          <Text style={{ marginTop: 15 }}>
            Chưa có tài khoản?
            <Text
              style={{ color: "blue" }}
              onPress={() => navigation.navigate("SignUpForm")}
            >
              {" "}
              Đăng ký
            </Text>
          </Text>
          <Button
            style={styles.button}
            onPress={() => {navigation.navigate("Home")}}
          >
            <Text style={{ fontSize: 16 }}>Home</Text>
          </Button>
        </Body>
      </KeyboardAwareScrollView>
    </View>
  );
}

const Stack = createStackNavigator();

function LoginFlow(props) {
  // console.log(props)
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginForm"
        component={connect(mapStateToProps)(LoginForm)}
        options={{ title: "Đăng nhập", headerShown: false }}
      />
      <Stack.Screen
        name="SignUpForm"
        component={SignUpForm}
        options={{ title: "Đăng ký" }}
      />
    </Stack.Navigator>
  );
}

function mapStateToProps(state) {
  return {
    state: state,
  };
}

export default connect(mapStateToProps)(LoginFlow);
