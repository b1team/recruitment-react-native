import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/Home";
import { Icon, Text, View, Button } from "native-base";
import LoginForm from "./components/LoginForm";
import ProfileScreen from "./components/Profile";
import { getToken, saveToken, logout } from "./Auth";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function testComponent({navigation, route}){
  return (
    <View>
      <Text>Ahihi</Text>
      <Button onPress={() => saveToken("Vuonglv", route.params.token.setter)}><Text>Login</Text></Button>
    </View>
  );
}

function LogOutScreen({navigation, route}) {
  return (
    <View>
      <Text>Logout</Text>
      <Button onPress={() => logout(route.params.token.setter)}><Text>Logout</Text></Button>
    </View>
  );
}


const Drawer = createDrawerNavigator();

function App() {
  const [token, setToken] = React.useState(null)
  React.useEffect(() => {
    getToken(setToken)
  })
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        {console.log(token)}
        {token ? (
          <>
            <Drawer.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Trang chủ",
                drawerIcon: () => <Icon name="md-home" />,
              }}
            />
            <Drawer.Screen
              name="Login"
              component={LoginForm}
              options={{
                title: "Đăng nhập",
                drawerIcon: () => <Icon name="ios-person" />,
              }}
            />
            <Drawer.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                title: "Profile",
                drawerIcon: () => <Icon name="ios-person" />,
              }}
            />
            <Drawer.Screen
              name="Logout"
              component={LogOutScreen}
              initialParams={{token: {setter: setToken}}}
              options={{
                title: "Logout",
                drawerIcon: () => <Icon name="ios-person" />,
              }}
            />
          </>
        ) : (
          <>
            <Drawer.Screen
              name="Test"
              component={testComponent}
              initialParams={{token: {setter: setToken}}}
              options={{
                title: "Test",
                drawerIcon: () => <Icon name="ios-person" />,
              }}
            />
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
