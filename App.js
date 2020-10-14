import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/Home";
import { Icon } from "native-base";
import LoginFlow from "./redux/containers/LoginForm";
import ProfileScreen from "./components/Profile";
import store from "./redux/store";
import { Provider } from "react-redux";
import LogoutScreen from "./redux/containers/logout";
import FooView from "./redux/containers/Foo"


function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <FooView/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
