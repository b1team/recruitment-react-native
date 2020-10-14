import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../components/Home";
import { Icon } from "native-base";
import LoginFlow from "./LoginForm";
import ProfileScreen from "../../components/Profile";
import LogoutScreen from "./logout";
import { connect } from "react-redux";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

function FooView(props) {
//   console.log("FOO" + JSON.stringify(props));
  const identities = props.state.authReducer
  console.log("FOO  " + JSON.stringify(identities));
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Trang chủ",
          drawerIcon: () => <Icon name="md-home" />,
        }}
      />
      {identities?.token !== null ? (
        <>
          <Drawer.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: "Người dùng",
              drawerIcon: () => <Icon name="person" />,
            }}
          />

          <Drawer.Screen
            name="Logout"
            component={LogoutScreen}
            options={{
              title: "Đăng xuất",
              drawerIcon: () => <Icon name="log-out" />,
            }}
          />
        </>
      ) : (
        <>
          <Drawer.Screen
            name="Login"
            component={LoginFlow}
            options={{
              title: "Đăng nhập",
              drawerIcon: () => <Icon name="log-in" />,
            }}
          />
        </>
      )}
    </Drawer.Navigator>
  );
}


function mapStateToProps(state) {
    return {
      state: state,
    };
  }

export default connect(mapStateToProps)(FooView);

