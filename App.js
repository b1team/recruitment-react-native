import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/Home";
import { Icon } from "native-base";
import LoginForm from "./components/LoginForm";
import ProfileScreen from "./components/Profile";
import store from './redux/store';
import { Provider } from 'react-redux'
import LogoutScreen from './redux/containers/logout';


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}


const Drawer = createDrawerNavigator();

function App() {
  const [state, setState] = React.useState()
  React.useEffect(() => {
    setState(store.getState())
  })
  var identities = state?.authReducer
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          {identities?.token !== null ? (
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
                  component={LoginForm}
                  options={{
                    title: "Đăng nhập",
                    drawerIcon: () => <Icon name="log-in" />,
                  }}
                />
              </>
            )}


        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;
