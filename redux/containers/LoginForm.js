import React from "react";
import { connect } from "react-redux";
import { Alert, StyleSheet, View } from "react-native";
import { Body, Item, Input, Button, Text } from "native-base";
import MainLogo from "../../components/Logo";
import Drawer from "../../components/Drawer";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpForm from "./SignUpForm";
import { login } from "../actions/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackToHomeScreen from '../../components/BackToHome';
import Loader from '../../components/LoaderScreen';

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
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  if(state?.identities.access_token != null){
    return <BackToHomeScreen navigation={navigation} />
  }
  return (
    <View style={{ flex: 1 }}>
      {state.loginReqesting ? <Loader/>: null}
      <Drawer navigation={navigation} name="Đăng nhập" />
      <KeyboardAwareScrollView>
        <Body>
          <MainLogo width={150} height={150} />
          <View style={styles.formAlign}>
            <Item style={styles.email}>
              <Input keyboardType="email-address" placeholder="Email" Icon style={styles.input} value={email} onChangeText={(e) => setEmail(e)}/>
            </Item>
            <Item style={styles.password}>
              <Input
                placeholder="Mật khẩu"
                secureTextEntry={true}
                style={styles.input}
                value={password}
                onChangeText={(p) => setPassword(p)}
              />
            </Item>
          </View>
          <Button
            style={styles.button}
            onPress={() => {if(email && password){dispatch(login(email, password))}}}
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
          {state.error ? <Text style={{ fontSize: 16, color: "red" }}>{state.errorMessage}</Text> : null}
        </Body>
      </KeyboardAwareScrollView>
    </View>
  );
}

const Stack = createStackNavigator();

function LoginFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginForm"
        component={connect(mapStateToIdentitiesProps)(LoginForm)}
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

function mapStateToIdentitiesProps(state) {
  return {
    state: state?.authReducer,
  };
}

export default connect(mapStateToProps)(LoginFlow);
